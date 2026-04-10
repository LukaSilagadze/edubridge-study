import { useState, useEffect } from 'react';

const eventsData = [
  {
    id: 1,
    title: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
    category: "mun",
    subject: "debate",
    age: "13-24",
    location: "ნიუ იორკი, აშშ",
    date: "2025-10-15",
    description: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
    image: "/images/munnyc2025.png",
    status: "closed",
    participants: 150,
    maxParticipants: 200,
    organizer: {
      name: "Gmuna",
      logo: "/images/gmuna.jpg"
    }
  },
  {
    id: 2,
    title: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
    category: "mun",
    subject: "debate",
    age: "14-25",
    location: "თილისი, საქართველო",
    date: "12-16 აგვისტო",
    description: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
    image: "/images/HccSimulation2025.png",
    status: "closed",
    participants: 80,
    maxParticipants: 100,
    organizer: {
      name: "Gmuna",
      logo: "/images/gmuna.jpg"
    }
  },
  {
    id: 3,
    title: "SDG საზაფხულო ბანაკი ბაკურიანში",
    category: "camp",
    subject: "SDG",
    age: "14-25",
    location: "ბაკურიანი, საქართველო",
    date: "12-16 აგვისტო",
    description: "SDG საზაფხულო ბანაკი ბაკურიანში",
    image: "/images/SDGCampBakuriani.png",
    status: "closed",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "Gmuna",
      logo: "/images/gmuna.jpg"
    }
  },
  {
    id: 4,
    title: "ლოგოსის საზაფხულო სკოლა ლისზე",
    category: "camp",
    subject: "საზაფხულო სკოლა",
    age: "5-12 წლამდე",
    location: "თბილისი, საქართველო",
    date: "12-16 აგვისტო",
    description: "ლოგოსის საზაფხულო სკოლა ლისზე",
    image: "/images/gardening.png",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "ლოგოსი",
      logo: "/images/logosi.jpg"
    }
  },
  {
    id: 5,
    title: "ახალგაზრდობის ხმა",
    category: "workshops",
    subject: "დებატები",
    age: "14-29",
    location: "თბილისი, საქართველო",
    date: "12-16 აგვისტო",
    description: "ახალგაზრდობის ხმა",
    image: "/images/debate1.jpg",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "GIDE",
      logo: "/images/GIDE.png"
    }
  },
  {
    id: 6,
    title: "პროგრამირება სკოლის პარალელურად",
    category: "course",
    subject: "პროგრამირება",
    age: "14-17 წლამდე",
    location: "თბილისი, საქართველო",
    date: "2024-03-25",
    description: "ItStep Academy",
    image: "/images/ItStep_1.png",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "ItStep Academy",
      logo: "/images/it-step.png"
    }
  },
  {
    id: 7,
    title: "Junior IT აკადემია",
    category: "course",
    subject: "პროგრამირება",
    age: "9-13 წელი",
    location: "თბილისი, საქართველო",
    date: "2024-03-25",
    description: "ItStep Academy",
    image: "/images/ItStep_2.png",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "ItStep Academy",
      logo: "/images/it-step.png"
    }
  },
  {
    id: 8,
    title: "გრაფიკული დიზაინი სკოლის პარალელურად",
    category: "course",
    subject: "გრაფიკული დიზაინი",
    age: "14-17 წლამდე",
    location: "თბილისი, საქართველო",
    date: "2024-03-25",
    description: "ItStep Academy",
    image: "/images/ItStep_3.png",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "ItStep Academy",
      logo: "/images/it-step.png"
    }
  },
  {
    id: 9,
    title: "სამთო სათხილამურო კლუბი იქსტრიმი",
    category: "camp",
    subject: "ბანაკი",
    age: "6-14 წლის",
    location: "ბაკურიანი, საქართველო",
    date: "12-16 აგვისტო",
    description: "სამთო სათხილამურო კლუბი იქსტრიმი",
    image: "/images/Xtreme.jpg",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "იქსტრიმი",
      logo: "/images/Xtreme.jpg"
    }
  },
  {
    id: 10,
    title: "International Education Fair LEAF Tbilisi / Batumi",
    category: "fair",
    subject: "სამსახური",
    age: "14-25",
    location: "თბილისი, საქართველო",
    date: "12-16 აგვისტო",
    description: "განათლების საერთაშორისო გამოფენა",
    image: "/images/leaf_1.png",
    status: "open",
    participants: 25,
    maxParticipants: 30,
    organizer: {
      name: "იქსტრიმი",
      logo: "/images/LEAF.jpg"
    }
  },
];

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
    'course': 'კურსი',
    'fair': 'გამოფენა'
  };
  return categories[category] || category;
}

function getLocationText(location) {
  const locations = {
    'online': 'ონლაინ',
    'offline': 'ფიზიკური',
    'hybrid': 'ჰიბრიდული'
  };
  return locations[location] || location;
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
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentFilters, setCurrentFilters] = useState({ subject: '', grade: '', location: '', date: '' });
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    let filtered = [...eventsData];
    
    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(event => event.category === currentCategory);
    }
    
    // Filter by search
    if (currentSearch) {
      const lowerSearch = currentSearch.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(lowerSearch) ||
        event.description.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Filter by subject
    if (currentFilters.subject) {
      filtered = filtered.filter(event => event.subject === currentFilters.subject);
    }
    
    // Filter by grade
    if (currentFilters.grade) {
      filtered = filtered.filter(event => event.grade === currentFilters.grade);
    }
    
    // Filter by location
    if (currentFilters.location) {
      filtered = filtered.filter(event => event.location === currentFilters.location);
    }
    
    setFilteredEvents(filtered);
  }, [currentCategory, currentSearch, currentFilters]);

  const clearAllFilters = () => {
    setCurrentCategory('all');
    setCurrentSearch('');
    setCurrentFilters({ subject: '', grade: '', location: '', date: '' });
  };

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
        <div className="events_hero_stats">
          <div className="stat_item">
            <span className="stat_number">500+</span>
            <span className="stat_label">აქტივობა</span>
          </div>
          <div className="stat_item">
            <span className="stat_number">50+</span>
            <span className="stat_label">ორგანიზაცია</span>
          </div>
          <div className="stat_item">
            <span className="stat_number">10K+</span>
            <span className="stat_label">მონაწილე</span>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="category_section">
        <div className="category_container">
          <div className="category_tabs">
            {['all', 'olympiads', 'tournaments', 'conferences', 'charity', 'labs'].map(cat => (
              <button 
                key={cat}
                className={`category_tab ${currentCategory === cat ? 'active' : ''}`} 
                onClick={() => setCurrentCategory(cat)}
              >
                <i className="fas fa-th-large"></i>
                <span>{getCategoryText(cat) === 'all' ? 'ყველა' : getCategoryText(cat)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters_section">
        <div className="filters_container">
          <div className="filters_row">
            <div className="filter_group">
              <label className="filter_label">საგანი</label>
              <select 
                className="filter_select" 
                value={currentFilters.subject}
                onChange={(e) => setCurrentFilters({...currentFilters, subject: e.target.value})}
              >
                <option value="">ყველა საგანი</option>
                <option value="math">მათემატიკა</option>
                <option value="science">მეცნიერება</option>
                <option value="literature">ლიტერატურა</option>
                <option value="history">ისტორია</option>
                <option value="geography">გეოგრაფია</option>
                <option value="languages">ენები</option>
                <option value="arts">ხელოვნება</option>
                <option value="technology">ტექნოლოგია</option>
              </select>
            </div>
            <div className="filter_group">
              <label className="filter_label">კლასი</label>
              <select 
                className="filter_select"
                value={currentFilters.grade}
                onChange={(e) => setCurrentFilters({...currentFilters, grade: e.target.value})}
              >
                <option value="">ყველა კლასი</option>
                <option value="elementary">დაწყებითი</option>
                <option value="middle">საშუალო</option>
                <option value="high">საშუალო სრული</option>
              </select>
            </div>
            <div className="filter_group">
              <label className="filter_label">მდებარეობა</label>
              <select 
                className="filter_select"
                value={currentFilters.location}
                onChange={(e) => setCurrentFilters({...currentFilters, location: e.target.value})}  
              >
                <option value="">ყველა ფორმატი</option>
                <option value="online">ონლაინ</option>
                <option value="offline">ფიზიკური</option>
                <option value="hybrid">ჰიბრიდული</option>
              </select>
            </div>
          </div>
          <div className="filters_actions">
            <button className="clear_filters_btn" onClick={clearAllFilters}>
              <i className="fas fa-times"></i>
              ფილტრების გასუფთავება
            </button>
          </div>
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
          
          {filteredEvents.length > 0 ? (
            <div className="events_grid">
              {filteredEvents.map(event => (
                <div key={event.id} className="event_card">
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
                      <div className="event_meta_item">
                        <i className="fas fa-users"></i>
                        <span>{event.participants}/{event.maxParticipants} მონაწილე</span>
                      </div>
                    </div>
                    <p className="event_description">{event.description}</p>
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
              <button className="reset_search_btn" onClick={clearAllFilters}>
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
