import * as React from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export type UserType = User | null;

export type AuthContextProps = {
  user: UserType;
}

export type AuthProps = {
  children: React.ReactNode;
}

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = React.useState<UserType>(null);
  const router = useRouter();
  const isAvailableForViewing = router.pathname === '/' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/404';
  const value = { user }

  React.useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      !user && !isAvailableForViewing && (await router.push("/login"))
    })
    return () => {
      authStateChanged()
    }
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
