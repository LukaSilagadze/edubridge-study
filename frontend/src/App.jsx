import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import TipsPage from './pages/TipsPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
