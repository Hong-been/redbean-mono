"use client"
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authenticateWithCode } from '@/domain/auth/repositories/authRepository';

const GoogleCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        try {
          const token = await authenticateWithCode(code);
          localStorage.setItem("ss-token", token);
          router.replace('/');
        } catch (error) {
          console.error('Callback error:', error);
          router.replace('/auth/error');
        }
      }
    };

    handleGoogleCallback();
  }, [router, searchParams]);

  return (
    <div>
      <h2>Processing Authentication...</h2>
      <p>Please wait while we handle the authentication.</p>
    </div>
  );
};

export default GoogleCallback;
