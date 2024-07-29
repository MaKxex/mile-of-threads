"use client"

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

interface UserContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const login = async (email: string, password: string) => {
    try {
      const authData = await pb.collection('user').authWithPassword(email, password);
      
      setUser(authData);
      localStorage.setItem('user', JSON.stringify(authData));
    } catch (err) {
      throw new Error('Failed to sign in: ' + (err as Error).message);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      await pb.collection('user').create({
        email,
        password,
        passwordConfirm: password,
        name,
      });
      await login(email, password);
    } catch (err) {
      throw new Error('Failed to register: ' + (err as Error).message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  return (
    <UserContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
