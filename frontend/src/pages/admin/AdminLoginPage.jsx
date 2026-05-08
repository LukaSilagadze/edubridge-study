import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAdminAuth } from '../../admin/useAdminAuth';

export default function AdminLoginPage() {
  const { user, isAdmin, adminDocPath, loading, logout } = useAdminAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const from = location.state?.from?.pathname || '/admin/events';

  if (!loading && user && isAdmin) {
    return <Navigate to={from} replace />;
  }

  if (!loading && user && !isAdmin) {
    return (
      <main className="admin_shell admin_login_shell">
        <section className="admin_login_panel">
          <p className="admin_eyebrow">Signed in as {user.email}</p>
          <h1>Access denied</h1>
          <div className="admin_error">
            This account is signed in, but it is not on the admin allowlist.
            Create the Firestore document <strong>{adminDocPath || `admins/${user.uid}`}</strong>.
          </div>
          <button type="button" className="admin_secondary_btn" onClick={logout}>
            Sign out
          </button>
        </section>
      </main>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (signInError) {
      console.error('Admin sign-in failed:', signInError);
      setError(
        `Could not sign in${signInError.code ? ` (${signInError.code})` : ''}. ` +
        `${signInError.message || 'Check the email, password, and Firebase Authentication settings.'}`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin_shell admin_login_shell">
      <section className="admin_login_panel">
        <div>
          <p className="admin_eyebrow">EduBridge Admin</p>
          <h1>Sign in</h1>
        </div>

        <form className="admin_form compact" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </label>

          {error && <div className="admin_error">{error}</div>}

          <button type="submit" className="admin_primary_btn" disabled={submitting}>
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  );
}
