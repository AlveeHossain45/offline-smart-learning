import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = { 
          id: 1, 
          email, 
          name: 'John Doe',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          joinedDate: new Date().toISOString()
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        resolve(true);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (name, email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = { 
          id: 1, 
          email, 
          name,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          joinedDate: new Date().toISOString()
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        resolve(true);
      }, 500);
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};