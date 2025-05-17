import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStoredData();
  }, []);

  async function loadStoredData() {
    try {
      const storedUser = await AsyncStorage.getItem('@PrecificaFacil:user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      // TODO: Implementar chamada à API de autenticação
      const mockUser = {
        id: '1',
        name: 'Usuário Teste',
        email,
      };

      await AsyncStorage.setItem('@PrecificaFacil:user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      // TODO: Implementar chamada à API de registro
      const mockUser = {
        id: '1',
        name,
        email,
      };

      await AsyncStorage.setItem('@PrecificaFacil:user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Erro ao criar conta');
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem('@PrecificaFacil:user');
      setUser(null);
    } catch (error) {
      throw new Error('Erro ao fazer logout');
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
} 