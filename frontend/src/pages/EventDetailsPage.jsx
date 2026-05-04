import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

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

function getPriceText(price) {
  const prices = {
    'free': 'უფასო',
    'paid': 'ფასიანი',
    'under50': '50₾-მდე',
    '50to100': '50₾ - 100₾',
    'over100': '100₾+'
  };
  return prices[price] || price;
}

function getLanguageText(language) {
  const languages = {
    'georgian': 'ქართული',
    'english': 'ინგლისური',
    'russian': 'რუსული',
    'bilingual': 'ორენოვანი'
  };
  return languages[language] || language;
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

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [similarEvents, setSimilarEvents] = useState([]);

  useEffect(() => {
    // Scroll to top when event changes
    window.scrollTo(0, 0);

    const fetchEventData = async () => {
      try {
        // Fetch specific event
        const eventDocRef = doc(db, 'events', id);
        const eventSnapshot = await getDoc(eventDocRef);
        
        if (eventSnapshot.exists()) {
          const foundEvent = { id: eventSnapshot.id, ...eventSnapshot.data() };
          setEvent(foundEvent);
          
          // Fetch all events for similar events calculation
          const querySnapshot = await getDocs(collection(db, 'events'));
          const allEvents = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          
          // Find similar events
          const similar = allEvents
            .filter(e => e.category === foundEvent.category && String(e.id) !== String(foundEvent.id))
            .slice(0, 3); // Max 3 similar events
          
          setSimilarEvents(similar);
        } else {
          setEvent(null);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
        setEvent(null);
      }
    };
    
    fetchEventData();
  }, [id]);

  if (!event) {
    return (
      <div className="event_details_not_found">
        <h2>აქტივობა არ მოიძებნა</h2>
        <button onClick={() => navigate('/events')} className="event_btn primary">
          დაბრუნება აქტივობებში
        </button>
      </div>
    );
  }

  return (
    <div className="event_details_page">
      {/* Back button */}
      <div className="event_details_nav">
        <div className="container">
          <button onClick={() => navigate('/events')} className="back_btn">
            <i className="fas fa-arrow-left"></i> ყველა აქტივობა
          </button>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="event_details_ecommerce_section">
        <div className="container">
          <div className="ecommerce_grid">
            {/* Left: Image */}
            <div className="ecommerce_image_side">
              <div className="ecommerce_image_wrapper">
                <img src={event.image} alt={event.title} className="ecommerce_main_image" />
              </div>
            </div>

            {/* Right: Info */}
            <div className="ecommerce_info_side">
              <div className="event_details_badge">{getCategoryText(event.category)}</div>
              <h1 className="ecommerce_title">{event.title}</h1>
              
              {event.organizer && (
                <div className="ecommerce_organizer">
                  <span className="org_label">ორგანიზატორი:</span>
                  <img src={event.organizer.logo} alt={event.organizer.name} className="ecommerce_org_logo" />
                  <span className="ecommerce_org_name">{event.organizer.name}</span>
                </div>
              )}

              <div className="ecommerce_divider"></div>

              <div className="ecommerce_description_section">
                <h3>აქტივობის შესახებ</h3>
                <p className="ecommerce_description">{event.description}</p>
              </div>

              <div className="event_details_meta_grid">
                <div className="meta_item">
                  <div className="meta_icon"><i className="fas fa-calendar-alt"></i></div>
                  <div className="meta_text">
                    <span className="meta_label">თარიღი</span>
                    <span className="meta_value">{formatDate(event.date)}</span>
                  </div>
                </div>
                <div className="meta_item">
                  <div className="meta_icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="meta_text">
                    <span className="meta_label">ადგილმდებარეობა</span>
                    <span className="meta_value">{getLocationText(event.location)}</span>
                  </div>
                </div>
                <div className="meta_item">
                  <div className="meta_icon"><i className="fas fa-user-graduate"></i></div>
                  <div className="meta_text">
                    <span className="meta_label">ასაკი / კლასი</span>
                    <span className="meta_value">{getGradeText(event.grade)}</span>
                  </div>
                </div>
                <div className="meta_item">
                  <div className="meta_icon"><i className="fas fa-book"></i></div>
                  <div className="meta_text">
                    <span className="meta_label">საგანი</span>
                    <span className="meta_value">{getSubjectText(event.subject)}</span>
                  </div>
                </div>
                <div className="meta_item">
                  <div className="meta_icon"><i className="fas fa-info-circle"></i></div>
                  <div className="meta_text">
                    <span className="meta_label">სტატუსი</span>
                    <span className={`meta_value status_${event.status}`}>
                      {event.status === 'open' ? 'ღიაა' : 'დახურულია'}
                    </span>
                  </div>
                </div>
                {event.price && (
                  <div className="meta_item">
                    <div className="meta_icon"><i className="fas fa-ticket-alt"></i></div>
                    <div className="meta_text">
                      <span className="meta_label">ღირებულება</span>
                      <span className="meta_value">{getPriceText(event.price)}</span>
                    </div>
                  </div>
                )}
                {event.language && (
                  <div className="meta_item">
                    <div className="meta_icon"><i className="fas fa-globe"></i></div>
                    <div className="meta_text">
                      <span className="meta_label">ენა</span>
                      <span className="meta_value">{getLanguageText(event.language)}</span>
                    </div>
                  </div>
                )}
                {event.deadline && (
                  <div className="meta_item">
                    <div className="meta_icon"><i className="fas fa-clock"></i></div>
                    <div className="meta_text">
                      <span className="meta_label">რეგისტრაციის ბოლო ვადა</span>
                      <span className="meta_value" style={{ color: '#dc3545' }}>{formatDate(event.deadline)}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="ecommerce_actions">
                <a 
                  href={event.registrationLink || "#"} 
                  target={event.registrationLink ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className={`event_btn primary ecommerce_register_btn ${event.status !== 'open' ? 'disabled' : ''}`}
                  onClick={(e) => {
                    if(event.status !== 'open' || !event.registrationLink) {
                       if(!event.registrationLink && event.status === 'open') {
                          // Allow click
                       } else {
                          e.preventDefault();
                       }
                    }
                  }}
                >
                  {event.status === 'open' ? 'რეგისტრაცია' : 'რეგისტრაცია დასრულებულია'}
                </a>
                <p className="ecommerce_action_note">
                  {event.status === 'open' ? 'ადგილები შეზღუდულია. დაარეგისტრირდით ახლავე.' : 'რეგისტრაცია აღარ არის შესაძლებელი.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Events */}
      {similarEvents.length > 0 && (
        <section className="similar_events_section">
          <div className="container">
            <h2 className="similar_events_title">მსგავსი აქტივობები</h2>
            <div className="events_grid">
              {similarEvents.map(simEvent => (
                <div key={simEvent.id} className="event_card" onClick={() => navigate(`/events/${simEvent.id}`)}>
                  <div className="event_image">
                    <img src={simEvent.image} alt={simEvent.title} />
                    <div className="event_badge">{getCategoryText(simEvent.category)}</div>
                  </div>
                  <div className="event_content">
                    <h3 className="event_title">{simEvent.title}</h3>
                    <div className="event_meta">
                      <div className="event_meta_item">
                        <i className="fas fa-calendar"></i>
                        <span>{formatDate(simEvent.date)}</span>
                      </div>
                      <div className="event_meta_item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{getLocationText(simEvent.location)}</span>
                      </div>
                    </div>
                    <p className="event_description">{simEvent.description}</p>
                    <div className="event_actions">
                      {simEvent.organizer && (
                        <div className="event_organizer">
                          <img src={simEvent.organizer.logo} alt={simEvent.organizer.name} className="organizer_logo" />
                          <span className="organizer_name">{simEvent.organizer.name}</span>
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
          </div>
        </section>
      )}
    </div>
  );
}
