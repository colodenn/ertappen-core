/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthUser, Session } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '@/utils/client';
interface UserContextInterface {
  user: AuthUser | null;
  loginUser: (email: string) => Promise<any>;
  logoutUser: () => Promise<any> | void;
  setUser: (user: AuthUser) => void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);

    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);
  async function loginUser(email: string) {
    const { user, session, error } = await supabase.auth.signIn({ email });
    return { error, session, user };
  }

  async function logoutUser() {
    setUser(null);
    return await supabase.auth.signOut();
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
