import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function getCategoryText(category) {
  const categories = {
    'olympiads': 'ოლიმპიადა',
    'tournaments': 'ტურნირი',
    'workshops': 'სახელოსნო',
    'conferences': 'კონფერენცია',
    'charity': 'ქველმოქმედება',
    'labs': 'ლაბორატორია',
    'camp': 'ბანაკი',
    'mun': 'მუნი',
    'competitions': 'კონკურსი',
    'course': 'კურსი',
    'fair': 'გამოფენა',
    'hackathons': 'ჰაკათონი',
    'volunteering': 'მოხალისეობა'
  };
  return categories[category] || category;
}

function getLocationText(location) {
  const locations = {
    'online': 'ონლაინ',
    'offline': 'ფიზიკური',
    'hybrid': 'ჰიბრიდული',
    'tbilisi': 'თბილისი',
    'kutaisi': 'ქუთაისი',
    'batumi': 'ბათუმი',
    'rustavi': 'რუსთავი'
  };
  return locations[location] || location;
}

function getSubjectText(subject) {
  const subjects = {
    'stem': 'STEM',
    'business': 'ბიზნესი',
    'finance': 'ფინანსები',
    'law': 'სამართალი',
    'medicine': 'მედიცინა',
    'arts': 'ხელოვნება',
    'languages': 'ენები',
    'coding': 'პროგრამირება',
    'entrepreneurship': 'მეწარმეობა'
  };
  return subjects[subject] || subject;
}

function getGradeText(grade) {
  const grades = {
    'elementary': 'დაწყებითი',
    'middle': 'საშუალო',
    'high': 'საშუალო სრული'
  };
  return grades[grade] || grade;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; 
  return date.toLocaleDateString('ka-GE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function EventsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentSearch, setCurrentSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    subject: '',
    grade: '',
    location: '',
    price: '',
    language: '',
    status: ''
  });
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllEvents(eventsList);
        setFilteredEvents(eventsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({...prev, category: category}));
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...allEvents];
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(event => event.category === filters.category);
    }
    
    // Filter by search
    if (currentSearch) {
      const lowerSearch = currentSearch.toLowerCase();
      filtered = filtered.filter(event => 
        event.title?.toLowerCase().includes(lowerSearch) ||
        event.description?.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Filter by subject
    if (filters.subject) {
      filtered = filtered.filter(event => event.subject === filters.subject);
    }
    
    // Filter by grade
    if (filters.grade) {
      filtered = filtered.filter(event => event.grade === filters.grade);
    }
    
    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(event => event.location === filters.location);
    }

    // Filter by price
    if (filters.price) {
      filtered = filtered.filter(event => event.price === filters.price);
    }

    // Filter by language
    if (filters.language) {
      filtered = filtered.filter(event => event.language === filters.language);
    }
    
    // Filter by status / upcoming
    if (filters.status) {
      if (filters.status === 'upcoming' || filters.status === 'open') {
        filtered = filtered.filter(event => event.status === 'open');
      } else if (filters.status === 'closed') {
        filtered = filtered.filter(event => event.status === 'closed');
      }
    }

    setFilteredEvents(filtered);
  }, [filters, currentSearch, allEvents]);

  return (
    <>
      {/* Hero Section */}
      <section className="events_hero">
        <div className="events_hero_content">
          <h2 className="events_hero_h2">აღმოაჩინე შენი შემდეგი აქტივობა</h2>
          <p className="events_hero_p">
            იპოვე ასობით სასკოლო აქტივობა, ოლიმპიადა და ტურნირი. 
            აირჩიე შენთვის შესაფერისი და დაიწყე შენი გზა წარმატებისკენ.
          </p>
          <div className="events_search">
            <div className="search_container">
              <i className="fas fa-search search_icon"></i>
              <input 
                type="text" 
                placeholder="ძიება აქტივობებში..." 
                className="search_input" 
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
              />
              <button className="search_btn">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Filter Overlay & Panel */}
      <div className={`filter_sidebar_overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <aside className={`filter_sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="filter_sidebar_header">
          <h3>ფილტრები</h3>
          <button className="close_sidebar_btn" onClick={() => setIsSidebarOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="filter_sidebar_body">
          <div className="sidebar_filter_group">
            <label>კატეგორია</label>
            <select value={filters.category} onChange={(e) => setFilters({...filters, category: e.target.value})}>
              <option value="all">ყველა</option>
              <option value="olympiads">ოლიმპიადა</option>
              <option value="mun">მუნი (MUN)</option>
              <option value="competitions">კონკურსი</option>
              <option value="course">კურსები</option>
              <option value="camp">ბანაკი</option>
              <option value="fair">უნივერსიტეტების გამოფენა</option>
              <option value="workshops">ვორქშოფები</option>
              <option value="hackathons">ჰაკათონები</option>
              <option value="volunteering">მოხალისეობა</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>საგანი / სფერო</label>
            <select value={filters.subject} onChange={(e) => setFilters({...filters, subject: e.target.value})}>
              <option value="">ყველა</option>
              <option value="STEM">STEM</option>
              <option value="business">ბიზნესი</option>
              <option value="finance">ფინანსები</option>
              <option value="law">სამართალი</option>
              <option value="medicine">მედიცინა</option>
              <option value="arts">ხელოვნება</option>
              <option value="languages">ენები</option>
              <option value="coding">პროგრამირება</option>
              <option value="entrepreneurship">მეწარმეობა</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>ასაკი / კლასი</label>
            <select value={filters.grade} onChange={(e) => setFilters({...filters, grade: e.target.value})}>
              <option value="">ყველა</option>
              <option value="elementary">დაწყებითი</option>
              <option value="middle">საშუალო</option>
              <option value="high">საშუალო სრული</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>მდებარეობა / ფორმატი</label>
            <select value={filters.location} onChange={(e) => setFilters({...filters, location: e.target.value})}>
              <option value="">ყველა</option>
              <option value="tbilisi">თბილისი</option>
              <option value="kutaisi">ქუთაისი</option>
              <option value="batumi">ბათუმი</option>
              <option value="rustavi">რუსთავი</option>
              <option value="online">ონლაინ</option>
              <option value="hybrid">ჰიბრიდული</option>
              <option value="offline">ფიზიკური</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>ფასი</label>
            <select value={filters.price} onChange={(e) => setFilters({...filters, price: e.target.value})}>
              <option value="">ყველა</option>
              <option value="free">უფასო</option>
              <option value="paid">ფასიანი</option>
              <option value="under50">50₾-მდე</option>
              <option value="50to100">50₾ - 100₾</option>
              <option value="over100">100₾+</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>ენა</label>
            <select value={filters.language} onChange={(e) => setFilters({...filters, language: e.target.value})}>
              <option value="">ყველა</option>
              <option value="georgian">ქართული</option>
              <option value="english">ინგლისური</option>
              <option value="russian">რუსული</option>
              <option value="bilingual">ორენოვანი</option>
            </select>
          </div>

          <div className="sidebar_filter_group">
            <label>სტატუსი / თარიღი</label>
            <select value={filters.status} onChange={(e) => setFilters({...filters, status: e.target.value})}>
              <option value="">ყველა</option>
              <option value="upcoming">მომავალი / მიმდინარე</option>
              <option value="open">რეგისტრაცია ღიაა</option>
              <option value="closed">დასრულებული</option>
            </select>
          </div>

          <button className="sidebar_clear_btn" onClick={() => setFilters({category: 'all', subject: '', grade: '', location: '', price: '', language: '', status: ''})}>
            გასუფთავება
          </button>
        </div>
      </aside>

      {/* Top Bar for Filter Button */}
      <section className="active_filters_section">
        <div className="events_container" style={{ paddingTop: '20px', paddingBottom: '0', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="open_filters_btn" onClick={() => setIsSidebarOpen(true)}>
            <i className="fas fa-filter"></i> ფილტრები
          </button>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events_section">
        <div className="events_container">
          <div className="events_header">
            <div className="events_count">
              <span>{filteredEvents.length}</span> აქტივობა ნაპოვნია
            </div>
            <div className="events_sort">
              <label className="sort_label">დალაგება:</label>
              <select className="sort_select">
                <option value="date">თარიღით</option>
                <option value="name">სახელით</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="loading_spinner" style={{ textAlign: 'center', padding: '50px' }}>იტვირთება...</div>
          ) : filteredEvents.length > 0 ? (
            <div className="events_grid">
              {filteredEvents.map(event => (
                <div key={event.id} className="event_card" onClick={() => navigate(`/events/${event.id}`)}>
                  <div className="event_image">
                    <img src={event.image} alt={event.title} />
                    <div className="event_badge">{getCategoryText(event.category)}</div>
                  </div>
                  <div className="event_content">
                    <h3 className="event_title">{event.title}</h3>
                    <div className="event_meta">
                      <div className="event_meta_item">
                        <i className="fas fa-calendar"></i>
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="event_meta_item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{getLocationText(event.location)}</span>
                      </div>
                      {event.deadline && (
                        <div className="event_meta_item">
                          <i className="fas fa-clock"></i>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                            <span>რეგისტრაცია სრულდება: </span>
                            <span style={{ color: '#dc3545' }}>{formatDate(event.deadline)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="event_actions">
                      {event.organizer && (
                        <div className="event_organizer">
                          <img src={event.organizer.logo} alt={event.organizer.name} className="organizer_logo" />
                          <span className="organizer_name">{event.organizer.name}</span>
                        </div>
                      )}
                      <button className="event_btn primary">
                        დეტალები
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no_results">
              <i className="fas fa-search"></i>
              <h3>არ არის ნაპოვნი აქტივობები</h3>
              <p>სცადეთ სხვა ფილტრები ან ძიების ტერმინები</p>
              <button className="reset_search_btn" onClick={() => {setFilters({category: 'all', subject: '', grade: '', location: '', price: '', language: '', status: ''}); setCurrentSearch('');}}>
                <i className="fas fa-refresh"></i>
                ძიების გასუფთავება
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
