import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NewHomePage from './pages/NewHomePage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import CalendarPage from './pages/CalendarPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminEventsPage from './pages/admin/AdminEventsPage';
import AdminEventFormPage from './pages/admin/AdminEventFormPage';
import { AdminAuthProvider } from './admin/AdminAuthContext';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute';

function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={isAdminRoute ? 'admin_app' : 'container'}>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<NewHomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/events"
          element={
            <ProtectedAdminRoute>
              <AdminEventsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/events/new"
          element={
            <ProtectedAdminRoute>
              <AdminEventFormPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/events/:id/edit"
          element={
            <ProtectedAdminRoute>
              <AdminEventFormPage />
            </ProtectedAdminRoute>
          }
        />
        <Route path="/admin" element={<Navigate to="/admin/events" replace />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AdminAuthProvider>
        <AppLayout />
      </AdminAuthProvider>
    </Router>
  );
}

export default App;
