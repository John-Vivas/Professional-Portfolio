import { useState, useEffect } from 'react';
import { LoginCredentials, AuthState } from '../types';
import { authApi } from '../utils/api';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null
  });

  // Check for existing user on mount
  useEffect(() => {
    const checkAuth = async () => {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      try {
        const user = await authApi.getCurrentUser();
        setAuthState({
          user,
          isLoading: false,
          error: null
        });
      } catch (err) {
        setAuthState({
          user: null,
          isLoading: false,
          error: 'Failed to authenticate user'
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authApi.login(credentials);
      
      if (result?.user) {
        setAuthState({
          user: result.user,
          isLoading: false,
          error: null
        });
        return true;
      } else {
        setAuthState({
          user: null,
          isLoading: false,
          error: 'Invalid credentials'
        });
        return false;
      }
    } catch (err) {
      setAuthState({
        user: null,
        isLoading: false,
        error: 'Login failed. Please try again.'
      });
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await authApi.logout();
      setAuthState({
        user: null,
        isLoading: false,
        error: null
      });
    } catch (err) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Logout failed'
      }));
    }
  };

  return {
    user: authState.user,
    isLoading: authState.isLoading,
    isAuthenticated: !!authState.user,
    error: authState.error,
    login,
    logout
  };
};