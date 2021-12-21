import React, { createContext, useContext, useState } from 'react';

interface UserContextInterface {
  user: User | null;
  loginUser: (email: string) => void;
}

interface User {
  email: string;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  function loginUser(email: string) {
    setUser({ email: email });
  }

  return (
    <UserContext.Provider value={{ user, loginUser }}>
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
