import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from './useAdminAuth';

export default function ProtectedAdminRoute({ children }) {
  const { user, isAdmin, loading } = useAdminAuth();
  const location = useLocation();

  if (loading) {
    return (
      <main className="admin_shell">
        <div className="admin_loading">Checking access...</div>
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
    return (
      <main className="admin_shell">
        <section className="admin_panel admin_access_denied">
          <h1>Access denied</h1>
          <p>Your account is signed in, but it is not on the admin allowlist.</p>
        </section>
      </main>
    );
  }

  return children;
}
