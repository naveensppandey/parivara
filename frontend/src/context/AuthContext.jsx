import React, { createContext, useContext, useState } from 'react';

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
    const inputEmail = email.toLowerCase().trim();
    // Allow pandeynaveen360@gmail.com or admin@parivaranatural.com or admin
    if (
      (inputEmail === 'pandeynaveen360@gmail.com' || inputEmail === 'admin@parivaranatural.com' || inputEmail === 'admin') &&
      password === 'parivara123'
    ) {
      const user = { email: inputEmail, token: 'admin-auth-token-' + Date.now(), role: 'ADMIN' };
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
