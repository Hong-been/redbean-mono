"use client"
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const GoogleCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        try {
          // Send a GET request to your backend server with the authorization code
          const response = await fetch(`http://localhost:3000/auth/google/callback?code=${code}`);
          
          if (response.ok) {
            const token = response.headers.get("Authorization") || "";
            localStorage.setItem("ss-token", token)
            router.replace('/');
          } else {
            console.error('Failed to authenticate user');
            router.replace('/auth/error'); // Redirect to an error page if authentication fails
          }
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
