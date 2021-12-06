import { createContext, ReactNode, useEffect, useState } from "react";
import { firebase, auth } from "../services/firebase";

type User = firebase.User;

type AuthContextType = {
  user: User | undefined;
  signin: (email: string, password: string) => Promise<void>;
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
        setUser(user);
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
      setUser(response.user);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
