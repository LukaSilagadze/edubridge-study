import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAdminAuth } from '../../admin/useAdminAuth';
import { mapEventsSnapshot } from '../../utils/events';

function sortEvents(events) {
  return [...events].sort((a, b) => {
    const aDate = a.date || '';
    const bDate = b.date || '';
    return bDate.localeCompare(aDate);
  });
}

export default function AdminEventsPage() {
  const { user, isAdmin, adminDocPath, logout } = useAdminAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        const snapshot = await getDocs(collection(db, 'events'));
        setEvents(sortEvents(mapEventsSnapshot(snapshot)));
      } catch (fetchError) {
        console.error('Could not load events:', fetchError);
        setError('Could not load events.');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return events;

    return events.filter((event) => {
      return (
        event.title?.toLowerCase().includes(term) ||
        event.organizer?.name?.toLowerCase().includes(term) ||
        event.category?.toLowerCase().includes(term)
      );
    });
  }, [events, search]);

  async function handleDelete(eventId, title) {
    const confirmed = window.confirm(`Delete "${title || 'this event'}"? This goes live immediately.`);
    if (!confirmed) return;

    setDeletingId(eventId);
    setError('');

    try {
      await deleteDoc(doc(db, 'events', String(eventId)));
      setEvents((currentEvents) => currentEvents.filter((event) => event.id !== eventId));
    } catch (deleteError) {
      console.error('Could not delete event:', deleteError);
      setError(
        `Could not delete event${deleteError.code ? ` (${deleteError.code})` : ''}: ` +
        `${deleteError.message || 'Firestore rejected the delete request.'} ` +
        `Admin check: ${adminDocPath || `admins/${user?.uid}`} is ${isAdmin ? 'present' : 'missing'}.`,
      );
    } finally {
      setDeletingId('');
    }
  }

  return (
    <main className="admin_shell">
      <header className="admin_topbar">
        <div>
          <p className="admin_eyebrow">Signed in as {user?.email}</p>
          <h1>Events</h1>
          <p className="admin_eyebrow">
            Admin UID: {user?.uid} · Allowlist: {isAdmin ? adminDocPath : 'missing'}
          </p>
        </div>
        <div className="admin_topbar_actions">
          <Link to="/" className="admin_secondary_btn">View site</Link>
          <button type="button" className="admin_secondary_btn" onClick={logout}>Sign out</button>
          <Link to="/admin/events/new" className="admin_primary_btn">New event</Link>
        </div>
      </header>

      <section className="admin_panel">
        <div className="admin_table_header">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search events"
            className="admin_search"
          />
          <span>{filteredEvents.length} events</span>
        </div>

        {error && <div className="admin_error">{error}</div>}
        {loading && <div className="admin_loading">Loading events...</div>}

        {!loading && (
          <div className="admin_event_list">
            {filteredEvents.map((event) => (
              <article className="admin_event_row" key={event.id}>
                <img src={event.image || '/images/logo.svg'} alt="" />
                <div className="admin_event_row_main">
                  <h2>{event.title || 'Untitled event'}</h2>
                  <p>{event.category || 'No category'} · {event.date || 'No date'} · {event.status || 'No status'}</p>
                </div>
                <div className="admin_row_actions">
                  <Link to={`/events/${event.id}`} className="admin_text_btn">View</Link>
                  <Link to={`/admin/events/${event.id}/edit`} className="admin_text_btn">Edit</Link>
                  <button
                    type="button"
                    className="admin_danger_btn"
                    onClick={() => handleDelete(event.id, event.title)}
                    disabled={deletingId === event.id}
                  >
                    {deletingId === event.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </article>
            ))}

            {filteredEvents.length === 0 && (
              <div className="admin_empty">No events match your search.</div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
