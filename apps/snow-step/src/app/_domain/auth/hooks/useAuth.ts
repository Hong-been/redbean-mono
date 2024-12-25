import { useAuthStore } from '@/app/_domain/auth/stores/authStore';
import { authenticateWithCode, refreshAccessToken } from '@/app/_domain/auth/repositories/authRepository';

export const useAuth = () => {
  const { 
    accessToken, 
    setAccessToken, 
    isAuthenticated,
    hasAttemptedRefresh,
    setHasAttemptedRefresh 
  } = useAuthStore();

  const handleAuthentication = async (code: string) => {
    try {
      const token = await authenticateWithCode(code);
      setAccessToken(token);
    } catch (error) {
      setAccessToken(null);
      throw error;
    }
  };

  const handleRefreshToken = async () => {
    try {
      const token = await refreshAccessToken();
      setAccessToken(token);
    } catch (error) {
      setAccessToken(null);
      throw error;
    } finally {
      setHasAttemptedRefresh(true);
    }
  };

  const handleLogout = () => {
    setAccessToken(null);
    setHasAttemptedRefresh(false);
    // 필요한 경우 서버에 로그아웃 요청
  };

  return {
    accessToken,
    hasAttemptedRefresh,
    isAuthenticated,
    handleAuthentication,
    handleRefreshToken,
    handleLogout,
  };
}; 