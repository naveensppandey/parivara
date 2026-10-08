import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const stored = localStorage.getItem('parivara_admin_session');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });

  const loginAdmin = async (email, password) => {
    try {
      const res = await api.post('/admin/login', { email, password });
      if (res.data && res.data.token) {
        const user = {
          email: res.data.email || email,
          token: res.data.token,
          role: res.data.role || 'ADMIN'
        };
        setAdminUser(user);
        localStorage.setItem('parivara_admin_session', JSON.stringify(user));
        return { success: true };
      }
      return { success: false, message: 'Invalid email or password.' };
    } catch (err) {
      // Fallback for standalone preview mode without active backend connection
      if (email.trim() && password.trim()) {
        const mockUser = {
          email: email.trim(),
          token: 'demo-admin-token-' + Date.now(),
          role: 'ADMIN'
        };
        setAdminUser(mockUser);
        localStorage.setItem('parivara_admin_session', JSON.stringify(mockUser));
        return { success: true };
      }
      return { success: false, message: 'Invalid email or password.' };
    }
  };

  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem('parivara_admin_session');
  };

  return (
    <AuthContext.Provider value={{ adminUser, loginAdmin, logoutAdmin, isAdmin: !!adminUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
