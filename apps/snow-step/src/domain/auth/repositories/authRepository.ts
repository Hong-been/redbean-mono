export const extractBearerToken = (authHeader: string | null): string => {
  if (!authHeader) return '';
  return authHeader.replace('Bearer ', '');
};

export const authenticateWithCode = async (code: string): Promise<string> => {
  const response = await fetch(`http://localhost:3000/auth/google/callback?code=${code}`);
  
  if (!response.ok) {
    throw new Error('Failed to authenticate user');
  }
  
  const authHeader = response.headers.get("Authorization");
  return extractBearerToken(authHeader);
};