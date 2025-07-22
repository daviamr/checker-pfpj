import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { AuthContext, type AuthContextType, type User } from './auth-context';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  // Verificar se há um token salvo ao inicializar
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('userData');
    
    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser) as User);
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        console.error('Erro ao carregar dados do usuário:', error);
      }
    }
    setLoading(false);
  }, []);

  const value: AuthContextType = {
    user,
    token,
    loading,
    setUser,
    setToken,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};