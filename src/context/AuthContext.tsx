import * as React from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const AuthContext = React.createContext({});

export const useAuthContext = () => {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const router = useRouter();
  const isAvailableForViewing = router.pathname === '/' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/404';
  const value = { user }

  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUser(user);
      !user && !isAvailableForViewing && (await router.push("/login"));
    });
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
