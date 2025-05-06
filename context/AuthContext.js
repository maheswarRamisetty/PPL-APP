'use client';

import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const getRegisteredUsers = () => {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  };

  const saveRegisteredUser = (user) => {
    const users = getRegisteredUsers();
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const login = async (email, password) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const users = getRegisteredUsers();
    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (!matchedUser) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = matchedUser;
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    return userWithoutPassword;
  };

  const register = async (name, email, password) => {
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    const users = getRegisteredUsers();
    const exists = users.find(u => u.email === email);
    if (exists) {
      throw new Error('User already exists');
    }

    const newUser = { id: Date.now().toString(), name, email, password };
    saveRegisteredUser(newUser);

    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    return userWithoutPassword;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
