import { createContext, ReactNode, useEffect, useState } from "react";
import { firebase, auth } from "../services/firebase";

type User = {
  id: string;
  username: string;
};

type AuthContextType = {
  user: User | undefined;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  signout: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid } = user;

        if (!displayName) {
          throw new Error("Missing information from account.");
        }

        setUser({
          id: uid,
          username: displayName,
        });
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email: string, password: string) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (response.user) {
      if (!response.user.displayName) {
        throw new Error("Missing information from Account.");
      }
      setUser({
        id: response.user.uid,
        username: response.user.displayName,
      });
    }
  };

  const signup = async (email: string, password: string, username: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        if (result.user) {
          result.user.updateProfile({ displayName: username });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signout = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(undefined);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
