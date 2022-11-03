import * as React from 'react';
import { useRouter } from 'next/router';
import { auth } from '../libs/firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

type UserType = User | null;

type AuthContextProps = {
  user: UserType;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<UserType>(null);
  const router = useRouter();
  const isAvailableForViewing =
    router.pathname === '/' ||
    router.pathname === '/login' ||
    router.pathname === '/signup' ||
    router.pathname === '/404';

  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        !user && !isAvailableForViewing && (await router.push('/login'));
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
