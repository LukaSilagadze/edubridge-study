import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [activeFilter, setActiveFilter] = useState('ყველა');
  const [activeModal, setActiveModal] = useState(null);
  const [notification, setNotification] = useState(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: 'გიორგი მაისურაძეს პროფილი',
        text: 'ნახეთ ჩემი მიღწევები და პორტფოლიო EduBridge-ზე!',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showNotification('ბმული დაკოპირებულია!', 'success');
    }
  };

  const closeModal = () => setActiveModal(null);

  const handleSave = (message) => {
    showNotification(message, 'success');
    closeModal();
  };

  const activities = [
    { id: 1, title: 'მათემატიკის რესპუბლიკური ოლიმპიადა', desc: '1-ლი ადგილი, 98/100 ქულა', date: '15 დეკემბერი, 2024', typeText: 'ოლიმპიადა', typeClass: 'olympiad', status: 'completed' },
    { id: 2, title: 'ფიზიკის საერთაშორისო ოლიმპიადა', desc: '2-ე ადგილი, 92/100 ქულა', date: '20 ნოემბერი, 2024', typeText: 'ოლიმპიადა', typeClass: 'olympiad', status: 'completed' },
    { id: 3, title: 'ქიმიის ტურნირი', desc: 'რეგისტრაცია დასრულებული', date: '25 დეკემბერი, 2024', typeText: 'ტურნირი', typeClass: 'tournament', status: 'upcoming' },
    { id: 4, title: 'AI და მანქანური სწავლება', desc: 'სახელოსნო დასრულებული', date: '22 ნოემბერი, 2024', typeText: 'სახელოსნო', typeClass: 'workshop', status: 'completed' },
  ];

  const filteredActivities = activities.filter(activity => {
    if (activeFilter === 'ყველა') return true;
    return activity.typeText.toLowerCase().includes(activeFilter.toLowerCase()) || 
           (activeFilter === 'ოლიმპიადები' && activity.typeText === 'ოლიმპიადა') ||
           (activeFilter === 'სახელოსნოები' && activity.typeText === 'სახელოსნო') ||
           (activeFilter === 'ტურნირები' && activity.typeText === 'ტურნირი');
  });

  return (
    <>
      <style>{`
        .profile_modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .modal_overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); }
        .modal_content { position: relative; background: #FFFFFF; border-radius: 20px; padding: 30px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); }
        .modal_close { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
        .modal_close:hover { background: #e2e8f0; color: #1e293b; }
        .modal_body h3 { font-family: var(--text-font); font-weight: 700; font-size: 24px; color: #1e293b; margin-bottom: 20px; text-transform: uppercase; }
        .profile_form, .achievement_form, .project_form, .goal_form { display: flex; flex-direction: column; gap: 20px; }
        .form_group { display: flex; flex-direction: column; gap: 8px; }
        .form_group label { font-family: var(--text-font); font-weight: 600; font-size: 14px; color: #1e293b; text-transform: uppercase; letter-spacing: 1px; }
        .form_group input, .form_group select, .form_group textarea { padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-family: var(--text-font); font-size: 14px; transition: all 0.3s ease; }
        .form_group input:focus, .form_group select:focus, .form_group textarea:focus { outline: none; border-color: #00E6FB; box-shadow: 0 0 0 3px rgba(0, 230, 251, 0.1); }
        .form_group textarea { resize: vertical; min-height: 80px; }
        .form_row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form_actions { display: flex; gap: 12px; justify-content: flex-end; margin-top: 20px; }
        .btn_primary, .btn_secondary { padding: 12px 24px; border-radius: 8px; border: none; font-family: var(--text-font); font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .btn_primary { background: linear-gradient(135deg, #00E6FB 0%, #00D4E6 100%); color: #022762; }
        .btn_primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 230, 251, 0.3); }
        .btn_secondary { background: #f1f5f9; color: #64748b; }
        .btn_secondary:hover { background: #e2e8f0; color: #1e293b; }
        .notification { position: fixed; top: 20px; right: 20px; background: #FFFFFF; border-radius: 12px; padding: 16px 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); display: flex; align-items: center; gap: 12px; z-index: 1001; animation: slideIn 0.3s ease; border-left: 4px solid #00E6FB; }
        .notification.success { border-left-color: #10b981; }
        .notification.error { border-left-color: #ef4444; }
        .notification i { color: #00E6FB; font-size: 18px; }
        .notification.success i { color: #10b981; }
        .notification.error i { color: #ef4444; }
        .notification span { font-family: var(--text-font); font-weight: 600; font-size: 14px; color: #1e293b; }
        .notification button { background: none; border: none; color: #64748b; cursor: pointer; padding: 4px; border-radius: 4px; transition: all 0.3s ease; }
        .notification button:hover { background: #f1f5f9; color: #1e293b; }
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @media (max-width: 768px) { .modal_content { margin: 20px; padding: 20px; } .form_row { grid-template-columns: 1fr; } .form_actions { flex-direction: column; } .notification { left: 20px; right: 20px; top: 20px; } }
      `}</style>

      {/* Notifications */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`fas fa-${notification.type === 'success' ? 'check-circle' : notification.type === 'error' ? 'exclamation-circle' : 'info-circle'}`}></i>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Modals */}
      {activeModal === 'editProfile' && (
        <div className="profile_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}><i className="fas fa-times"></i></button>
            <div className="modal_body">
              <h3>პროფილის რედაქტირება</h3>
              <form className="profile_form" onSubmit={(e) => { e.preventDefault(); handleSave('პროფილი წარმატებით განახლდა!'); }}>
                <div className="form_group">
                    <label>სახელი და გვარი</label>
                    <input type="text" defaultValue="გიორგი მაისურაძე" required />
                </div>
                <div className="form_row">
                    <div className="form_group">
                        <label>სკოლა</label>
                        <input type="text" defaultValue="თბილისის ფიზიკა-მათემატიკის სკოლა" required />
                    </div>
                    <div className="form_group">
                        <label>კლასი</label>
                        <select required defaultValue="11">
                            <option value="11">11-ე კლასი</option>
                            <option value="10">10-ე კლასი</option>
                            <option value="12">12-ე კლასი</option>
                        </select>
                    </div>
                </div>
                <div className="form_group">
                    <label>ელ-ფოსტა</label>
                    <input type="email" defaultValue="giorgi@example.com" required />
                </div>
                <div className="form_group">
                    <label>ქალაქი</label>
                    <input type="text" defaultValue="თბილისი" required />
                </div>
                <div className="form_actions">
                    <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                    <button type="submit" className="btn_primary">შენახვა</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'addAchievement' && (
        <div className="profile_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}><i className="fas fa-times"></i></button>
            <div className="modal_body">
              <h3>ახალი ჯილდოს დამატება</h3>
              <form className="achievement_form" onSubmit={(e) => { e.preventDefault(); handleSave('ჯილდო წარმატებით დაემატა!'); }}>
                <div className="form_group">
                    <label>ჯილდოს სახელი</label>
                    <input type="text" placeholder="შეიყვანეთ ჯილდოს სახელი" required />
                </div>
                <div className="form_row">
                    <div className="form_group">
                        <label>თარიღი</label>
                        <input type="date" required />
                    </div>
                    <div className="form_group">
                        <label>ქულა</label>
                        <input type="number" placeholder="0-100" min="0" max="100" required />
                    </div>
                </div>
                <div className="form_group">
                    <label>აღწერა</label>
                    <textarea placeholder="ჯილდოს აღწერა" rows="3" required></textarea>
                </div>
                <div className="form_group">
                    <label>ტიპი</label>
                    <select required>
                        <option value="">აირჩიეთ ტიპი</option>
                        <option value="gold">ოქრო</option>
                        <option value="silver">ვერცხლი</option>
                        <option value="bronze">ბრინჯაო</option>
                    </select>
                </div>
                <div className="form_actions">
                    <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                    <button type="submit" className="btn_primary">შენახვა</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'addProject' && (
        <div className="profile_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}><i className="fas fa-times"></i></button>
            <div className="modal_body">
              <h3>ახალი პროექტის დამატება</h3>
              <form className="project_form" onSubmit={(e) => { e.preventDefault(); handleSave('პროექტი წარმატებით დაემატა!'); }}>
                <div className="form_group">
                    <label>პროექტის სახელი</label>
                    <input type="text" placeholder="შეიყვანეთ პროექტის სახელი" required />
                </div>
                <div className="form_group">
                    <label>აღწერა</label>
                    <textarea placeholder="პროექტის აღწერა" rows="3" required></textarea>
                </div>
                <div className="form_row">
                    <div className="form_group">
                        <label>ტექნოლოგიები</label>
                        <input type="text" placeholder="Python, JavaScript, etc." required />
                    </div>
                    <div className="form_group">
                        <label>წელი</label>
                        <input type="number" defaultValue="2024" min="2020" max="2030" required />
                    </div>
                </div>
                <div className="form_group">
                    <label>სურათი</label>
                    <input type="file" accept="image/*" />
                </div>
                <div className="form_actions">
                    <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                    <button type="submit" className="btn_primary">შენახვა</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'addGoal' && (
        <div className="profile_modal active">
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal_content">
            <button className="modal_close" onClick={closeModal}><i className="fas fa-times"></i></button>
            <div className="modal_body">
              <h3>ახალი მიზნის დამატება</h3>
              <form className="goal_form" onSubmit={(e) => { e.preventDefault(); handleSave('მიზანი წარმატებით დაემატა!'); }}>
                <div className="form_group">
                    <label>მიზნის სახელი</label>
                    <input type="text" placeholder="შეიყვანეთ მიზნის სახელი" required />
                </div>
                <div className="form_group">
                    <label>აღწერა</label>
                    <textarea placeholder="მიზნის აღწერა" rows="3" required></textarea>
                </div>
                <div className="form_row">
                    <div className="form_group">
                        <label>პროგრესი (%)</label>
                        <input type="number" placeholder="0-100" min="0" max="100" required />
                    </div>
                    <div className="form_group">
                        <label>ვადა</label>
                        <input type="date" required />
                    </div>
                </div>
                <div className="form_actions">
                    <button type="button" className="btn_secondary" onClick={closeModal}>გაუქმება</button>
                    <button type="submit" className="btn_primary">შენახვა</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Profile Hero Section */}
      <section className="profile_hero">
        <div className="profile_hero_content">
          <div className="profile_avatar">
            <img src="/images/hero_image.jpeg" alt="Student Avatar" className="avatar_img" />
            <div className="avatar_badge">
              <i className="fas fa-crown"></i>
            </div>
          </div>
          <div className="profile_info">
            <h1 className="profile_name">გიორგი მაისურაძე</h1>
            <div className="profile_stats">
              <div className="stat_item">
                <span className="stat_number">15</span>
                <span className="stat_label">აქტივობა</span>
              </div>
              <div className="stat_item">
                <span className="stat_number">8</span>
                <span className="stat_label">ჯილდო</span>
              </div>
              <div className="stat_item">
                <span className="stat_number">95%</span>
                <span className="stat_label">წარმატება</span>
              </div>
            </div>
            <div className="profile_actions">
              <button className="profile_btn primary" onClick={() => setActiveModal('editProfile')}>
                <i className="fas fa-edit"></i>
                <span>პროფილის რედაქტირება</span>
              </button>
              <button className="profile_btn secondary" onClick={shareProfile}>
                <i className="fas fa-share"></i>
                <span>გაზიარება</span>
              </button>
            </div>
          </div>
        </div>
        <div className="profile_hero_background">
          <div className="achievement_showcase">
            <div className="achievement_item">
              <i className="fas fa-trophy"></i>
              <span>1st Place</span>
            </div>
            <div className="achievement_item">
              <i className="fas fa-medal"></i>
              <span>Gold Medal</span>
            </div>
            <div className="achievement_item">
              <i className="fas fa-star"></i>
              <span>Top 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Content */}
      <main className="profile_main">
        <div className="profile_container">
          {/* Left Sidebar */}
          <aside className="profile_sidebar">
            {/* Personal Info Card */}
            <div className="sidebar_card">
              <h3 className="card_title">
                <i className="fas fa-user"></i>
                პირადი ინფორმაცია
              </h3>
              <div className="personal_info">
                <div className="info_item">
                  <span className="info_label">სკოლა:</span>
                  <span className="info_value">თბილისის ფიზიკა-მათემატიკის სკოლა</span>
                </div>
                <div className="info_item">
                  <span className="info_label">კლასი:</span>
                  <span className="info_value">11-ე კლასი</span>
                </div>
                <div className="info_item">
                  <span className="info_label">ქალაქი:</span>
                  <span className="info_value">თბილისი</span>
                </div>
                <div className="info_item">
                  <span className="info_label">დაბადების თარიღი:</span>
                  <span className="info_value">15 მარტი, 2007</span>
                </div>
                <div className="info_item">
                  <span className="info_label">ელ-ფოსტა:</span>
                  <span className="info_value">giorgi@example.com</span>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="sidebar_card">
              <h3 className="card_title">
                <i className="fas fa-brain"></i>
                უნარები
              </h3>
              <div className="skills_list">
                <div className="skill_item">
                  <span className="skill_name">მათემატიკა</span>
                  <div className="skill_bar">
                    <div className="skill_progress" style={{ width: animateBars ? '95%' : '0%', transition: 'width 1s ease' }}></div>
                  </div>
                  <span className="skill_percentage">95%</span>
                </div>
                <div className="skill_item">
                  <span className="skill_name">ფიზიკა</span>
                  <div className="skill_bar">
                    <div className="skill_progress" style={{ width: animateBars ? '88%' : '0%', transition: 'width 1s ease' }}></div>
                  </div>
                  <span className="skill_percentage">88%</span>
                </div>
                <div className="skill_item">
                  <span className="skill_name">პროგრამირება</span>
                  <div className="skill_bar">
                    <div className="skill_progress" style={{ width: animateBars ? '82%' : '0%', transition: 'width 1s ease' }}></div>
                  </div>
                  <span className="skill_percentage">82%</span>
                </div>
                <div className="skill_item">
                  <span className="skill_name">ინგლისური</span>
                  <div className="skill_bar">
                    <div className="skill_progress" style={{ width: animateBars ? '90%' : '0%', transition: 'width 1s ease' }}></div>
                  </div>
                  <span className="skill_percentage">90%</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="sidebar_card">
              <h3 className="card_title">
                <i className="fas fa-chart-line"></i>
                სტატისტიკა
              </h3>
              <div className="quick_stats">
                <div className="stat_card">
                  <div className="stat_icon">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <div className="stat_content">
                    <span className="stat_number">23</span>
                    <span className="stat_label">დასწრებული</span>
                  </div>
                </div>
                <div className="stat_card">
                  <div className="stat_icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="stat_content">
                    <span className="stat_number">12</span>
                    <span className="stat_label">ჯილდო</span>
                  </div>
                </div>
                <div className="stat_card">
                  <div className="stat_icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat_content">
                    <span className="stat_number">8</span>
                    <span className="stat_label">გუნდი</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="profile_content">
            {/* Achievement Showcase */}
            <section className="achievement_section">
              <div className="section_header">
                <h2 className="section_title">
                  <i className="fas fa-trophy"></i>
                  მიღწევები
                </h2>
                <button className="section_btn" onClick={() => setActiveModal('addAchievement')}>
                  <i className="fas fa-plus"></i>
                  ახალი ჯილდო
                </button>
              </div>
              <div className="achievements_grid">
                <div className="achievement_card gold" onClick={() => showNotification('ჯილდო "მათემატიკის რესპუბლიკური ოლიმპიადა" - 1-ლი ადგილი, 2024 წელი', 'info')}>
                  <div className="achievement_icon">
                    <i className="fas fa-crown"></i>
                  </div>
                  <div className="achievement_content">
                    <h3 className="achievement_title">მათემატიკის რესპუბლიკური ოლიმპიადა</h3>
                    <p className="achievement_description">1-ლი ადგილი, 2024 წელი</p>
                    <div className="achievement_meta">
                      <span className="achievement_date">15 დეკემბერი, 2024</span>
                      <span className="achievement_score">98/100 ქულა</span>
                    </div>
                  </div>
                  <div className="achievement_badge">🥇</div>
                </div>
                <div className="achievement_card silver" onClick={() => showNotification('ჯილდო "ფიზიკის საერთაშორისო ოლიმპიადა" - 2-ე ადგილი, 2024 წელი', 'info')}>
                  <div className="achievement_icon">
                    <i className="fas fa-medal"></i>
                  </div>
                  <div className="achievement_content">
                    <h3 className="achievement_title">ფიზიკის საერთაშორისო ოლიმპიადა</h3>
                    <p className="achievement_description">2-ე ადგილი, 2024 წელი</p>
                    <div className="achievement_meta">
                      <span className="achievement_date">20 ნოემბერი, 2024</span>
                      <span className="achievement_score">92/100 ქულა</span>
                    </div>
                  </div>
                  <div className="achievement_badge">🥈</div>
                </div>
                <div className="achievement_card bronze" onClick={() => showNotification('ჯილდო "პროგრამირების ტურნირი" - 3-ე ადგილი, 2024 წელი', 'info')}>
                  <div className="achievement_icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="achievement_content">
                    <h3 className="achievement_title">პროგრამირების ტურნირი</h3>
                    <p className="achievement_description">3-ე ადგილი, 2024 წელი</p>
                    <div className="achievement_meta">
                      <span className="achievement_date">10 ოქტომბერი, 2024</span>
                      <span className="achievement_score">85/100 ქულა</span>
                    </div>
                  </div>
                  <div className="achievement_badge">🥉</div>
                </div>
              </div>
            </section>

            {/* Activity History */}
            <section className="activity_section">
              <div className="section_header">
                <h2 className="section_title">
                  <i className="fas fa-history"></i>
                  აქტივობების ისტორია
                </h2>
                <div className="activity_filters">
                  {['ყველა', 'ოლიმპიადები', 'სახელოსნოები', 'ტურნირები'].map(filter => (
                    <button 
                      key={filter} 
                      className={`filter_btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="activity_timeline">
                {filteredActivities.map(activity => (
                  <div key={activity.id} className={`timeline_item ${activity.status}`} style={{ display: 'flex', opacity: 1 }}>
                    <div className="timeline_marker">
                      <i className={`fas ${activity.status === 'completed' ? 'fa-check-circle' : 'fa-clock'}`}></i>
                    </div>
                    <div className="timeline_content">
                      <h3 className="timeline_title">{activity.title}</h3>
                      <p className="timeline_description">{activity.desc}</p>
                      <div className="timeline_meta">
                        <span className="timeline_date">{activity.date}</span>
                        <span className={`timeline_type ${activity.typeClass}`}>{activity.typeText}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio Builder */}
            <section className="portfolio_section">
              <div className="section_header">
                <h2 className="section_title">
                  <i className="fas fa-briefcase"></i>
                  პორტფოლიო
                </h2>
                <button className="section_btn" onClick={() => setActiveModal('addProject')}>
                  <i className="fas fa-plus"></i>
                  ახალი პროექტი
                </button>
              </div>
              <div className="portfolio_grid">
                <div className="portfolio_card">
                  <div className="portfolio_image">
                    <img src="/images/hero_image.jpeg" alt="Project 1" />
                    <div className="portfolio_overlay">
                      <button className="portfolio_btn" onClick={(e) => { e.stopPropagation(); showNotification('პროექტი "მათემატიკური ალგორითმი" - პროგრამა, რომელიც ამოხსნის კომპლექსურ მათემატიკურ ამოცანებს', 'info'); }}>
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">მათემატიკური ალგორითმი</h3>
                    <p className="portfolio_description">პროგრამა, რომელიც ამოხსნის კომპლექსურ მათემატიკურ ამოცანებს</p>
                    <div className="portfolio_meta">
                      <span className="portfolio_tech">Python, NumPy</span>
                      <span className="portfolio_date">2024</span>
                    </div>
                  </div>
                </div>
                <div className="portfolio_card">
                  <div className="portfolio_image">
                    <img src="/images/hero_image.jpeg" alt="Project 2" />
                    <div className="portfolio_overlay">
                      <button className="portfolio_btn" onClick={(e) => { e.stopPropagation(); showNotification('პროექტი "ფიზიკის სიმულატორი" - 3D სიმულატორი ფიზიკური პროცესების დემონსტრაციისთვის', 'info'); }}>
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">ფიზიკის სიმულატორი</h3>
                    <p className="portfolio_description">3D სიმულატორი ფიზიკური პროცესების დემონსტრაციისთვის</p>
                    <div className="portfolio_meta">
                      <span className="portfolio_tech">JavaScript, Three.js</span>
                      <span className="portfolio_date">2024</span>
                    </div>
                  </div>
                </div>
                <div className="portfolio_card">
                  <div className="portfolio_image">
                    <img src="/images/hero_image.jpeg" alt="Project 3" />
                    <div className="portfolio_overlay">
                      <button className="portfolio_btn" onClick={(e) => { e.stopPropagation(); showNotification('პროექტი "საგანმანათლებლო აპლიკაცია" - მობილური აპლიკაცია სტუდენტებისთვის', 'info'); }}>
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">საგანმანათლებლო აპლიკაცია</h3>
                    <p className="portfolio_description">მობილური აპლიკაცია სტუდენტებისთვის</p>
                    <div className="portfolio_meta">
                      <span className="portfolio_tech">React Native</span>
                      <span className="portfolio_date">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Goals & Progress */}
            <section className="goals_section">
              <div className="section_header">
                <h2 className="section_title">
                  <i className="fas fa-target"></i>
                  მიზნები და პროგრესი
                </h2>
                <button className="section_btn" onClick={() => setActiveModal('addGoal')}>
                  <i className="fas fa-plus"></i>
                  ახალი მიზანი
                </button>
              </div>
              <div className="goals_grid">
                <div className="goal_card" onClick={() => showNotification('მიზანი "საერთაშორისო ოლიმპიადა" - 75% დასრულებული', 'info')}>
                  <div className="goal_header">
                    <h3 className="goal_title">საერთაშორისო ოლიმპიადა</h3>
                    <span className="goal_percentage">75%</span>
                  </div>
                  <div className="goal_progress">
                    <div className="progress_bar">
                      <div className="progress_fill" style={{ width: animateBars ? '75%' : '0%', transition: 'width 1s ease' }}></div>
                    </div>
                  </div>
                  <p className="goal_description">მონაწილეობა მიიღო საერთაშორისო მათემატიკის ოლიმპიადაში</p>
                  <div className="goal_deadline">
                    <i className="fas fa-calendar"></i>
                    <span>15 იანვარი, 2025</span>
                  </div>
                </div>
                <div className="goal_card" onClick={() => showNotification('მიზანი "უნივერსიტეტის მოსამზადებელი" - 60% დასრულებული', 'info')}>
                  <div className="goal_header">
                    <h3 className="goal_title">უნივერსიტეტის მოსამზადებელი</h3>
                    <span className="goal_percentage">60%</span>
                  </div>
                  <div className="goal_progress">
                    <div className="progress_bar">
                      <div className="progress_fill" style={{ width: animateBars ? '60%' : '0%', transition: 'width 1s ease' }}></div>
                    </div>
                  </div>
                  <p className="goal_description">მომზადება უნივერსიტეტის მისაღებ გამოცდებზე</p>
                  <div className="goal_deadline">
                    <i className="fas fa-calendar"></i>
                    <span>1 მაისი, 2025</span>
                  </div>
                </div>
                <div className="goal_card" onClick={() => showNotification('მიზანი "პროგრამირების სერტიფიკატი" - 90% დასრულებული', 'info')}>
                  <div className="goal_header">
                    <h3 className="goal_title">პროგრამირების სერტიფიკატი</h3>
                    <span className="goal_percentage">90%</span>
                  </div>
                  <div className="goal_progress">
                    <div className="progress_bar">
                      <div className="progress_fill" style={{ width: animateBars ? '90%' : '0%', transition: 'width 1s ease' }}></div>
                    </div>
                  </div>
                  <p className="goal_description">Python პროგრამირების სერტიფიკატის მიღება</p>
                  <div className="goal_deadline">
                    <i className="fas fa-calendar"></i>
                    <span>30 დეკემბერი, 2024</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
