import { useState, useMemo } from 'react';

const monthNames = [
  'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
  'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
];

const sampleEvents = [
  { id: 1, title: 'მათემატიკის რესპუბლიკური ოლიმპიადა', date: '2024-12-15', time: '09:00', location: 'თბილისის სახელმწიფო უნივერსიტეტი', type: 'olympiad', status: 'registered' },
  { id: 2, title: 'პროგრამირების სახელოსნო', date: '2024-12-15', time: '14:30', location: 'IT Academy Step Georgia', type: 'workshop', status: 'pending' },
  { id: 3, title: 'დებატების ტურნირი', date: '2024-12-15', time: '16:00', location: 'GIDE ცენტრი', type: 'tournament', status: 'open' },
  { id: 4, title: 'ფიზიკის საერთაშორისო ოლიმპიადა', date: '2024-12-20', time: '10:00', location: 'ბათუმი', type: 'olympiad', status: 'open' },
  { id: 5, title: 'AI და მანქანური სწავლება', date: '2024-12-22', time: '15:00', location: 'ონლაინ', type: 'workshop', status: 'open' },
  { id: 6, title: 'ქიმიის ტურნირი', date: '2024-12-25', time: '11:00', location: 'თბილისი', type: 'tournament', status: 'open' }
];

export default function CalendarPage() {
  const [currentMonthDate, setCurrentMonthDate] = useState(() => {
    const d = new Date();
    d.setDate(1); // Set to first of the month
    return d;
  });
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);
  const [notification, setNotification] = useState(null);

  const prevMonth = () => {
    setCurrentMonthDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonthDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const getCalendarDays = () => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    // JS getDay() returns 0 for Sunday
    const dayOffset = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1; // Assuming Monday is first day of week as in the original HTML
    startDate.setDate(startDate.getDate() - dayOffset);

    const days = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const calendarDays = useMemo(() => getCalendarDays(), [currentMonthDate]);

  const isSameDay = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const formatDateYMD = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const dayEvents = useMemo(() => {
    const selectedYMD = formatDateYMD(selectedDate);
    return sampleEvents.filter(event => event.date === selectedYMD);
  }, [selectedDate]);

  const getEventsForDate = (date) => {
    const ymd = formatDateYMD(date);
    return sampleEvents.filter(event => event.date === ymd);
  };

  const getEventTypeName = (type) => {
    const types = { olympiad: 'ოლიმპიადა', workshop: 'სახელოსნო', tournament: 'ტურნირი', course: 'კურსი' };
    return types[type] || type;
  };

  const getEventStatusName = (status) => {
    const statuses = { registered: 'დარეგისტრირებული', pending: 'მოლოდინში', open: 'ღია რეგისტრაცია', closed: 'დახურული' };
    return statuses[status] || status;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // For Upcoming Section
  const upcomingEvents = useMemo(() => {
    // Only filtering by logic defined in JS
    return sampleEvents.filter(event => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'olympiads') return event.type === 'olympiad';
      if (activeFilter === 'workshops') return event.type === 'workshop';
      if (activeFilter === 'tournaments') return event.type === 'tournament';
      return true;
    });
  }, [activeFilter]);

  const closeModal = () => setActiveModal(null);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    closeModal();
    showNotification('აქტივობა წარმატებით დაემატა!', 'success');
  };

  const handleSaveReminders = () => {
    closeModal();
    showNotification('შეგახსენებთ ჩართულია!', 'success');
  };

  return (
    <>
      <style>{`
        .event_modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .modal_overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); }
        .modal_content { position: relative; background: #FFFFFF; border-radius: 20px; padding: 30px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); }
        .modal_close { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
        .modal_close:hover { background: #e2e8f0; color: #1e293b; }
        .modal_body h3 { font-family: var(--text-font); font-weight: 700; font-size: 24px; color: #1e293b; margin-bottom: 20px; text-transform: uppercase; }
        .event_form { display: flex; flex-direction: column; gap: 20px; }
        .form_group { display: flex; flex-direction: column; gap: 8px; }
        .form_group label { font-family: var(--text-font); font-weight: 600; font-size: 14px; color: #1e293b; text-transform: uppercase; letter-spacing: 1px; }
        .form_group input, .form_group select { padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-family: var(--text-font); font-size: 14px; transition: all 0.3s ease; }
        .form_group input:focus, .form_group select:focus { outline: none; border-color: #00E6FB; box-shadow: 0 0 0 3px rgba(0, 230, 251, 0.1); }
        .form_row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form_actions { display: flex; gap: 12px; justify-content: flex-end; margin-top: 20px; }
        .btn_primary, .btn_secondary { padding: 12px 24px; border-radius: 8px; border: none; font-family: var(--text-font); font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .btn_primary { background: linear-gradient(135deg, #00E6FB 0%, #00D4E6 100%); color: #022762; }
        .btn_primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 230, 251, 0.3); }
        .btn_secondary { background: #f1f5f9; color: #64748b; }
        .btn_secondary:hover { background: #e2e8f0; color: #1e293b; }
        .reminder_options { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
        .reminder_option { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .reminder_option input[type="checkbox"] { width: 18px; height: 18px; accent-color: #00E6FB; }
        .reminder_option span { font-family: var(--text-font); font-size: 14px; color: #1e293b; }
        .no_events { text-align: center; padding: 40px 20px; color: #64748b; }
        .no_events i { font-size: 48px; margin-bottom: 16px; color: #cbd5e1; }
        .no_events p { font-family: var(--text-font); font-size: 16px; margin-bottom: 24px; }
        .notification { position: fixed; top: 20px; right: 20px; background: #FFFFFF; border-radius: 12px; padding: 16px 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); display: flex; align-items: center; gap: 12px; z-index: 1001; animation: slideIn 0.3s ease; border-left: 4px solid #00E6FB; }
        .notification.success { border-left-color: #10b981; }
        .notification i { color: #00E6FB; font-size: 18px; }
        .notification.success i { color: #10b981; }
        .notification span { font-family: var(--text-font); font-weight: 600; font-size: 14px; color: #1e293b; }
        .notification button { background: none; border: none; color: #64748b; cursor: pointer; padding: 4px; border-radius: 4px; transition: all 0.3s ease; }
        .notification button:hover { background: #f1f5f9; color: #1e293b; }
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @media (max-width: 768px) { .modal_content { margin: 20px; padding: 20px; } .form_row { grid-template-columns: 1fr; } .form_actions { flex-direction: column; } .notification { left: 20px; right: 20px; top: 20px; } }
      `}</style>

      {/* Notifications */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`fas fa-${notification.type === 'success' ? 'check-circle' : 'info-circle'}`}></i>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="calendar_hero">
        <div className="calendar_hero_content">
          <h2 className="calendar_hero_h2">თქვენი საგანმანათლებლო კალენდარი</h2>
          <p className="calendar_hero_p">
            თვალი ადევნეთ ყველა მნიშვნელოვან აქტივობას, ვადას და მოვლენას.
            არ გამოგრჩეთ არანაირი შესაძლებლობა!
          </p>
          <div className="calendar_quick_actions">
            <button className="quick_action_btn primary" onClick={() => setActiveModal('addEvent')}>
              <i className="fas fa-plus"></i>
              <span>ახალი აქტივობა</span>
            </button>
            <button className="quick_action_btn secondary" onClick={() => setActiveModal('reminder')}>
              <i className="fas fa-bell"></i>
              <span>შეგახსენებთ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Main Section */}
      <section className="calendar_main">
        <div className="calendar_container">
          {/* Calendar Navigation */}
          <div className="calendar_navigation">
            <div className="calendar_nav_left">
              <button className="nav_btn" onClick={prevMonth}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <h3 className="current_month">
                {monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
              </h3>
              <button className="nav_btn" onClick={nextMonth}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="calendar_nav_right">
              <button className="view_btn active" data-view="month">
                <i className="fas fa-calendar-alt"></i>
                <span>თვე</span>
              </button>
              <button className="view_btn" data-view="week">
                <i className="fas fa-calendar-week"></i>
                <span>კვირა</span>
              </button>
              <button className="view_btn" data-view="day">
                <i className="fas fa-calendar-day"></i>
                <span>დღე</span>
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="calendar_grid">
            <div className="calendar_weekdays">
              <div className="weekday">ორშ</div>
              <div className="weekday">სამ</div>
              <div className="weekday">ოთხ</div>
              <div class="weekday">ხუთ</div>
              <div className="weekday">პარ</div>
              <div className="weekday">შაბ</div>
              <div className="weekday">კვი</div>
            </div>
            <div className="calendar_days">
              {calendarDays.map((d, index) => {
                const isOtherMonth = d.getMonth() !== currentMonthDate.getMonth();
                const isToday = isSameDay(d, new Date());
                const isSelected = isSameDay(d, selectedDate);
                const evts = getEventsForDate(d);

                let className = 'calendar_day';
                if (isOtherMonth) className += ' other_month';
                if (isToday) className += ' today';
                if (isSelected) className += ' selected';

                return (
                  <div key={index} className={className} onClick={() => setSelectedDate(d)}>
                    <div className="day_number">{d.getDate()}</div>
                    {evts.length > 0 && (
                      <div className="day_events">
                        {evts.slice(0, 3).map((e, i) => (
                          <div key={i} className={`event_dot ${e.type}`}></div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Events Sidebar */}
        <div className="events_sidebar">
          <div className="sidebar_header">
            <h3 className="sidebar_title">დღის აქტივობები</h3>
            <span className="selected_date">
              {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}
            </span>
          </div>

          <div className="events_list">
            {dayEvents.length > 0 ? (
              dayEvents.map(event => (
                <div key={event.id} className={`event_item ${event.type}`}>
                  <div className="event_time">{event.time}</div>
                  <div className="event_content">
                    <h4 className="event_title">{event.title}</h4>
                    <p className="event_location">
                      <i className="fas fa-map-marker-alt"></i>
                      {event.location}
                    </p>
                    <div className="event_meta">
                      <span className={`event_type ${event.type}`}>{getEventTypeName(event.type)}</span>
                      <span className={`event_status ${event.status}`}>{getEventStatusName(event.status)}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no_events">
                <i className="fas fa-calendar-day"></i>
                <p>ამ დღეს არ არის დაგეგმილი აქტივობა</p>
                <button className="add_event_btn" onClick={() => setActiveModal('addEvent')} style={{margin: '0 auto'}}>
                  <i className="fas fa-plus"></i>
                  <span>დაამატე აქტივობა</span>
                </button>
              </div>
            )}
          </div>

          {dayEvents.length > 0 && (
            <button className="add_event_btn" onClick={() => setActiveModal('addEvent')}>
              <i className="fas fa-plus"></i>
              <span>ახალი აქტივობის დამატება</span>
            </button>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming_events_section">
        <div className="upcoming_container">
          <div className="upcoming_header">
            <h3 className="upcoming_h3">მომავალი აქტივობები</h3>
            <div className="upcoming_filters">
              <button className={`filter_btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>ყველა</button>
              <button className={`filter_btn ${activeFilter === 'olympiads' ? 'active' : ''}`} onClick={() => setActiveFilter('olympiads')}>ოლიმპიადები</button>
              <button className={`filter_btn ${activeFilter === 'workshops' ? 'active' : ''}`} onClick={() => setActiveFilter('workshops')}>სახელოსნოები</button>
              <button className={`filter_btn ${activeFilter === 'tournaments' ? 'active' : ''}`} onClick={() => setActiveFilter('tournaments')}>ტურნირები</button>
            </div>
          </div>

          <div className="upcoming_grid">
            {upcomingEvents.map(event => {
              const eventDate = new Date(event.date);
              return (
                <div key={event.id} className={`upcoming_card ${event.type}`}>
                  <div className="upcoming_date">
                    <span className="date_day">{eventDate.getDate()}</span>
                    <span className="date_month">{monthNames[eventDate.getMonth()].slice(0, 3)}</span>
                  </div>
                  <div className="upcoming_content">
                    <h4 className="upcoming_title">{event.title}</h4>
                    <p className="upcoming_description">
                      მიიღე მონაწილეობა აღნიშნულ ღონისძიებაში
                    </p>
                    <div className="upcoming_meta">
                      <span className="upcoming_location">
                        <i className="fas fa-map-marker-alt"></i>
                        {event.location}
                      </span>
                      <span className="upcoming_deadline">
                        <i className="fas fa-clock"></i>
                        რეგისტრაცია: {eventDate.getDate() - 2} {monthNames[eventDate.getMonth()].slice(0, 3)}
                      </span>
                    </div>
                    <button className="upcoming_btn">დეტალები</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal === 'addEvent' && (
        <div className="event_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal_body">
              <h3>ახალი აქტივობის დამატება</h3>
              <form className="event_form" onSubmit={handleSubmitEvent}>
                <div className="form_group">
                  <label>აქტივობის სახელი</label>
                  <input type="text" placeholder="შეიყვანეთ სახელი" required />
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label>თარიღი</label>
                    <input type="date" required />
                  </div>
                  <div className="form_group">
                    <label>დრო</label>
                    <input type="time" required />
                  </div>
                </div>
                <div className="form_group">
                  <label>მისამართი</label>
                  <input type="text" placeholder="შეიყვანეთ მისამართი" required />
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label>ტიპი</label>
                    <select required>
                      <option value="">აირჩიეთ ტიპი</option>
                      <option value="olympiad">ოლიმპიადა</option>
                      <option value="workshop">სახელოსნო</option>
                      <option value="tournament">ტურნირი</option>
                      <option value="course">კურსი</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>სტატუსი</label>
                    <select required>
                      <option value="">აირჩიეთ სტატუსი</option>
                      <option value="open">ღია რეგისტრაცია</option>
                      <option value="pending">მოლოდინში</option>
                      <option value="registered">დარეგისტრირებული</option>
                    </select>
                  </div>
                </div>
                <div className="form_actions">
                  <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                  <button type="submit" className="btn_primary">დამატება</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'reminder' && (
        <div className="event_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal_body">
              <h3>შეგახსენებთ</h3>
              <p>მიიღეთ შეგახსენებთ ახალ აქტივობებზე და მნიშვნელოვან თარიღებზე</p>
              <div className="reminder_options">
                <label className="reminder_option">
                  <input type="checkbox" defaultChecked />
                  <span>ელ-ფოსტით</span>
                </label>
                <label className="reminder_option">
                  <input type="checkbox" defaultChecked />
                  <span>ბრაუზერის შეგახსენებით</span>
                </label>
                <label className="reminder_option">
                  <input type="checkbox" />
                  <span>SMS-ით</span>
                </label>
              </div>
              <div className="form_actions">
                <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                <button type="button" className="btn_primary" onClick={handleSaveReminders}>შენახვა</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
