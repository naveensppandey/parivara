import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const stored = localStorage.getItem('parivara_admin');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });

  const loginAdmin = (email, password) => {
    // Basic local check for preview & API sync
    if ((email === 'admin@parivaranatural.com' || email === 'admin') && password === 'parivara123') {
      const user = { email, token: 'demo-admin-token-' + Date.now(), role: 'ADMIN' };
      setAdminUser(user);
      localStorage.setItem('parivara_admin', JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: 'Invalid admin credentials' };
  };

  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem('parivara_admin');
  };

  return (
    <AuthContext.Provider value={{ adminUser, loginAdmin, logoutAdmin, isAdmin: !!adminUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
