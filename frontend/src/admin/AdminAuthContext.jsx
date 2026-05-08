import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { AdminAuthContext } from './AuthContextBase';

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminDocPath, setAdminDocPath] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setUser(currentUser);

      if (!currentUser) {
        setIsAdmin(false);
        setAdminDocPath('');
        setLoading(false);
        return;
      }

      try {
        const adminRef = doc(db, 'admins', currentUser.uid);
        const adminSnapshot = await getDoc(adminRef);
        setAdminDocPath(adminRef.path);
        setIsAdmin(adminSnapshot.exists());
      } catch (error) {
        console.error('Admin check failed:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAdmin,
      adminDocPath,
      loading,
      logout: () => signOut(auth),
    }),
    [adminDocPath, isAdmin, loading, user],
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
