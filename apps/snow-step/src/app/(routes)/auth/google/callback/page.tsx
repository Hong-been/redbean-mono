"use client"
import { useAuth } from '@/app/_domain/auth/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GoogleCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        try {
          await handleAuthentication(code);
          router.replace('/');
        } catch (error) {
          console.error('Callback error:', error);
          router.replace('/auth/error');
        }
      }
    };

    handleGoogleCallback();
  }, [router, searchParams, handleAuthentication]);

  return null; // or loading indicator
};

export default GoogleCallback;
