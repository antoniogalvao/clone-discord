import { createContext, ReactNode, useEffect, useState } from 'react';
import { firebase, auth } from '../services/firebase';

type User = {
  id: string;
  username: string;
};

type AuthContextType = {
  user: User | undefined;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
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
          throw new Error('Missing information from account.');
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

  const signIn = async (email: string, password: string) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (response.user) {
        if (!response.user.displayName) {
          throw new Error('Missing information from Account.');
        }
        setUser({
          id: response.user.uid,
          username: response.user.displayName,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (email: string, password: string, username: string) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (response.user) {
        await response.user?.updateProfile({ displayName: username });

        setUser({ username, id: response.user?.uid });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(undefined);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
