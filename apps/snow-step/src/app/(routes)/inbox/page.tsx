import { ProtectedRoute } from '@/app/_domain/auth/components/ProtectedRoute';

export default function InboxPage() {
  return (
    <ProtectedRoute>
      <div>
        This is a protected inbox page
      </div>
    </ProtectedRoute>
  );
}
