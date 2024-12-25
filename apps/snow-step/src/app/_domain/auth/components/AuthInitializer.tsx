'use client';

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

export const AuthInitializer = () => {
  const router = useRouter();
  const { isAuthenticated, hasAttemptedRefresh, handleRefreshToken } = useAuth();
  
  useEffect(() => {
    const initializeAuth = async () => {
      if (!isAuthenticated() && !hasAttemptedRefresh) {
        try {
          await handleRefreshToken();
        } catch (error) {
          console.error('Failed to refresh token:', error);
        }
      }
    };

    initializeAuth();
  }, [isAuthenticated, hasAttemptedRefresh, handleRefreshToken, router]);

  return null;
}; 