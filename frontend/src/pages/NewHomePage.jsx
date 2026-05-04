import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/new-homepage.css';

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

export default function NewHomePage() {
  const navigate = useNavigate();
  const rowRef = useRef(null);
  const [eventsData, setEventsData] = useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEventsData(eventsList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Extract unique categories for the sidebar (mapping to Georgian names if desired, or just using current text/functionality)
  const categories = [
    { id: 'mun', label: 'გაეროს მოდელირება', icon: 'fa-globe' },
    { id: 'course', label: 'კურსები', icon: 'fa-laptop-code' },
    { id: 'camp', label: 'ბანაკები', icon: 'fa-campground' },
    { id: 'fair', label: 'გამოფენები', icon: 'fa-building' },
    { id: 'workshops', label: 'ვორქშოფები', icon: 'fa-users' },
    { id: 'tournaments', label: 'ტურნირები', icon: 'fa-trophy' },
  ];

  return (
    <div className="new-home-container">
      {/* Top Section: Sidebar + Hero */}
      <section className="new-home-top">
        {/* Sidebar */}
        <aside className="new-home-sidebar">
          <ul className="sidebar-list">
            {categories.map((cat) => (
              <li key={cat.id} className="sidebar-item">
                <Link to={`/events?category=${cat.id}`} className="sidebar-link">
                  <i className={`fa-solid ${cat.icon}`}></i>
                  <span>{cat.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Hero Banner */}
        <div className="new-home-hero">
          <div className="new-hero-content">
            <div className="new-hero-text">
              <h2>
                აღმოაჩინე. <br />მიიღე მონაწილეობა. <br />გამოიჩინე თავი.
              </h2>
              <button className="new-hero-btn" onClick={() => navigate('/events')}>
                <img src="/images/arrow.svg" alt="" /> აქტივობები
              </button>
            </div>
            <div className="new-hero-image">
              <img src="/images/hero_image.jpeg" alt="Hero banner" />
            </div>
          </div>
        </div>
      </section>

      {/* Events Row Section */}
      <section className="new-home-events-section">
        <div className="section-header">
          <h3>მიმდინარე აქტივობები</h3>
          <Link to="/events" className="see-all-link">ყველას ნახვა <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        
        <div className="events-row-container">
          <button className="scroll-btn left-btn" aria-label="Scroll left" onClick={() => scroll('left')}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="events-row" ref={rowRef}>
            {eventsData.slice(0, 15).map((event) => (
              <article 
                key={event.id} 
                className="event-product-card"
                onClick={() => navigate(`/events/${event.id}`)}
              >
                <div className="card-image-wrapper">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  {event.status === 'open' && <span className="badge open">ღიაა</span>}
                  {event.status === 'closed' && <span className="badge closed">დახურულია</span>}
                </div>
                <div className="card-content">
                  <div className="card-top-info">
                    <span className="event-date"><i className="fa-regular fa-calendar"></i> {event.date}</span>
                  </div>
                  <h4 className="event-title">{event.title}</h4>
                  <div className="event-details">
                    <div className="detail-item">
                      <i className="fa-solid fa-graduation-cap"></i> {getGradeText(event.grade)}
                    </div>
                    <div className="detail-item">
                      <i className="fa-solid fa-location-dot"></i> {getLocationText(event.location)}
                    </div>
                    {event.deadline && (
                      <div className="detail-item" style={{ color: '#dc3545', width: '100%' }}>
                        <i className="fa-regular fa-clock"></i> ბოლო ვადა: {formatDate(event.deadline)}
                      </div>
                    )}
                  </div>
                  <div className="card-actions">
                    <Link 
                      to={`/events/${event.id}`} 
                      className="action-btn details-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      დეტალები
                    </Link>
                    {event.registrationLink && (
                      <a 
                        href={event.registrationLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="action-btn register-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        რეგისტრაცია
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="scroll-btn right-btn" aria-label="Scroll right" onClick={() => scroll('right')}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* How It Works section */}
      <section className="how_it_works_section">
        <div className="how_it_works_container">
          <h3 className="how_it_works_h3">როგორ მუშაობს</h3>
          <div className="steps_container">
            <div className="step_card">
              <div className="step_number">1</div>
              <div className="step_icon">
                <i className="fa-solid fa-search"></i>
              </div>
              <h4 className="step_title">იპოვე აქტივობა</h4>
              <p className="step_description">დაათვალიერე ასობით სასკოლო აქტივობა, ოლიმპიადა და ტურნირი</p>
            </div>
            <div className="step_arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step_card">
              <div className="step_number">2</div>
              <div className="step_icon">
                <i className="fa-solid fa-user-plus"></i>
              </div>
              <h4 className="step_title">დარეგისტრირდი</h4>
              <p className="step_description">მარტივად დარეგისტრირდი შენთვის საინტერესო აქტივობაში</p>
            </div>
            <div className="step_arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step_card">
              <div className="step_number">3</div>
              <div className="step_icon">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h4 className="step_title">მიიღე მონაწილეობა</h4>
              <p className="step_description">გამოიჩინე თავი და დაამტკიცე შენი უნარები</p>
            </div>
            <div className="step_arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step_card">
              <div className="step_number">4</div>
              <div className="step_icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h4 className="step_title">გაამდიდრე შენი პორტფელი</h4>
              <p className="step_description">მიიღე სერტიფიკატი და დაამატე პორტფოლიოში</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organizations section */}
      <section className="partners_section">
        <div className="partners_container">
          <h3 className="partners_h3">ჩვენი პარტნიორები</h3>
          <p className="partners_subtitle">ვთანამშრომლობთ საქართველოს წამყვან სასწავლო დაწესებულებებთან</p>
          <div className="partners_grid">
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/gmuna.jpg" alt="Georgian Model United Nations Association" />
              </div>
              <h4 className="partner_name">Georgian Model United Nations Association </h4>
            </div>
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/logosi.jpg" alt="Logos International Academy" />
              </div>
              <h4 className="partner_name">საერთაშორისო აკადემია ლოგოსი • Logos International Academy</h4>
            </div>
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/it-step.png" alt="IT Academy Step Georgia" />
              </div>
              <h4 className="partner_name">IT Academy Step Georgia</h4>
            </div>
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/LEAF.jpg" alt="LEAF" />
              </div>
              <h4 className="partner_name">LEAF [Liberal Enhanced Arts Foundation] </h4>
            </div>
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/Xtreme.jpg" alt="Xtreme ski-school" />
              </div>
              <h4 className="partner_name">სამთო-სათხილამურო კლუბი "იქსტრიმი" Xtreme ski-school</h4>
            </div>
            <div className="partner_card">
              <div className="partner_logo">
                <img src="/images/GIDE.png" alt="GIDE" />
              </div>
              <h4 className="partner_name">Georgian Institute for Debate and Education • GIDE</h4>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter/Stay Updated section */}
      <section className="newsletter_section">
        <div className="newsletter_container">
          <div className="newsletter_content">
            <div className="newsletter_text">
              <h3 className="newsletter_h3">მიიღე სიახლეები</h3>
              <p className="newsletter_description">მიიღე უახლესი ინფორმაცია ახალ აქტივობებზე, ოლიმპიადებზე და სპეციალურ შეთავაზებებზე</p>
              <div className="newsletter_features">
                <div className="feature_item">
                  <i className="fa-solid fa-bell"></i>
                  <span>შეგატყობინებთ ახალ აქტივობებზე</span>
                </div>
                <div className="feature_item">
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>მოგახსენებთ რეგისტრაციის ვადებს</span>
                </div>
                <div className="feature_item">
                  <i className="fa-solid fa-gift"></i>
                  <span>სპეციალური შეთავაზებები და ფასდაკლებები</span>
                </div>
              </div>
            </div>
            <div className="newsletter_form">
              <div className="form_container">
                <h4 className="form_title">გამოიწერე ჩვენი ბიულეტენი</h4>
                <form className="subscribe_form">
                  <div className="input_group">
                    <input type="text" placeholder="თქვენი სახელი" className="form_input" required />
                    <i className="fa-solid fa-user input_icon"></i>
                  </div>
                  <div className="input_group">
                    <input type="email" placeholder="ელ-ფოსტა" className="form_input" required />
                    <i className="fa-solid fa-envelope input_icon"></i>
                  </div>
                  <div className="checkbox_group">
                    <label className="checkbox_label">
                      <input type="checkbox" className="form_checkbox" required />
                      <span className="checkmark"></span>
                      ვეთანხმები <a href="#" className="terms_link">პირობებს</a> და <a href="#" className="terms_link">კონფიდენციალურობის პოლიტიკას</a>
                    </label>
                  </div>
                  <button type="submit" className="subscribe_btn">
                    <span>გამოიწერე</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
