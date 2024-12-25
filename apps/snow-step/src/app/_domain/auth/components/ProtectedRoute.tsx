'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAuthenticated, hasAttemptedRefresh } = useAuth();

  useEffect(() => {
    if (!isAuthenticated() && hasAttemptedRefresh) {
      router.replace('/');
    }
  }, [isAuthenticated, hasAttemptedRefresh, router]);

  // 인증 시도 중에는 로딩 표시
  if (!hasAttemptedRefresh) {
    return <div>Loading...</div>; // 또는 적절한 로딩 컴포넌트
  }

  // 인증되지 않았다면 null 반환 (리다이렉트 될 것이므로)
  if (!isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
};
