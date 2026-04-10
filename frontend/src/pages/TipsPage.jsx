import { useState, useEffect } from 'react';

const tipsData = [
  { id: 1, title: "ეფექტური სწავლის მეთოდები", category: "study", subject: "general", grade: "all", content: "გამოიყენე პომოდორო ტექნიკა - 25 წუთი სწავლა, შემდეგ 5 წუთი დასვენება. ეს ხელს უწყობს კონცენტრაციის შენარჩუნებას და ინფორმაციის უკეთ ათვისებას.", rating: 4.8, featured: true, icon: "fas fa-lightbulb" },
  { id: 2, title: "ოლიმპიადის მომზადების სტრატეგიები", category: "olympiad", subject: "math", grade: "high", content: "დაიწყე მომზადება ადრე, გამოიყენე წინა წლების ამოცანები, ივარჯიშე ყოველდღე და არ დაივიწყო დასვენება.", rating: 4.9, featured: true, icon: "fas fa-trophy" },
  { id: 3, title: "დროის მართვის რჩევები", category: "time", subject: "general", grade: "all", content: "შექმენი ყოველდღიური გეგმა, დაალაგე პრიორიტეტები და გამოიყენე დროის ბლოკები ეფექტურად.", rating: 4.7, featured: true, icon: "fas fa-clock" },
  { id: 4, title: "მოტივაციის შენარჩუნება", category: "motivation", subject: "general", grade: "all", content: "დაისახე მცირე მიზნები, აღნიშნე წარმატებები და არ დაივიწყო რატომ იწყებდი.", rating: 4.6, featured: false, icon: "fas fa-heart" },
  { id: 5, title: "მათემატიკის სწავლის რჩევები", category: "study", subject: "math", grade: "middle", content: "ივარჯიშე ყოველდღე, გამოიყენე ვიზუალური დახმარება და არ შეგეშინდეს შეცდომების.", rating: 4.5, featured: false, icon: "fas fa-calculator" },
  { id: 6, title: "ენის სწავლის მეთოდები", category: "study", subject: "language", grade: "all", content: "მოისმინე მუსიკა, ნახე ფილმები, ივარჯიშე ყოველდღე და გამოიყენე ენის გაცვლის პროგრამები.", rating: 4.4, featured: false, icon: "fas fa-language" },
  { id: 7, title: "კარიერული გეგმვა", category: "career", subject: "general", grade: "high", content: "გაარკვიე შენი ინტერესები, შეისწავლე ბაზრის მოთხოვნები და შექმენი გრძელვადიანი გეგმა.", rating: 4.3, featured: false, icon: "fas fa-briefcase" },
  { id: 8, title: "ფიზიკის ოლიმპიადის მომზადება", category: "olympiad", subject: "science", grade: "high", content: "შეისწავლე თეორია, ივარჯიშე ექსპერიმენტები და გამოიყენე ონლაინ რესურსები.", rating: 4.8, featured: false, icon: "fas fa-atom" },
  { id: 9, title: "პრეზენტაციის უნარების გაუმჯობესება", category: "career", subject: "general", grade: "all", content: "ივარჯიშე ყოველდღე, გამოიყენე ვიზუალური დახმარება და არ დაივიწყო აუდიტორიის ინტერესი.", rating: 4.2, featured: false, icon: "fas fa-presentation" },
  { id: 10, title: "შტრესის მართვა", category: "motivation", subject: "general", grade: "all", content: "ივარჯიშე მედიტაცია, გაატარე დრო ბუნებაში და არ დაივიწყო ფიზიკური აქტივობა.", rating: 4.1, featured: false, icon: "fas fa-spa" },
  { id: 11, title: "პროგრამირების საფუძვლები", category: "study", subject: "technology", grade: "middle", content: "დაიწყე Python-ით, ივარჯიშე ყოველდღე და გამოიყენე პრაქტიკული პროექტები.", rating: 4.7, featured: false, icon: "fas fa-code" },
  { id: 12, title: "ისტორიის სწავლის მეთოდები", category: "study", subject: "history", grade: "middle", content: "შექმენი ქრონოლოგია, გამოიყენე ვიზუალური დახმარება და დააკავშირე თანამედროვე მოვლენებთან.", rating: 4.0, featured: false, icon: "fas fa-landmark" }
];

const categoriesData = [
  { id: "study", title: "სწავლის მეთოდები", description: "ეფექტური სწავლის ტექნიკები და სტრატეგიები", icon: "fas fa-graduation-cap", count: 45 },
  { id: "olympiad", title: "ოლიმპიადის მომზადება", description: "სპეციალური რჩევები ოლიმპიადებისთვის", icon: "fas fa-trophy", count: 32 },
  { id: "time", title: "დროის მართვა", description: "როგორ ვიმართოთ დრო ეფექტურად", icon: "fas fa-clock", count: 28 },
  { id: "motivation", title: "მოტივაცია", description: "როგორ შევინარჩუნოთ მოტივაცია", icon: "fas fa-heart", count: 35 },
  { id: "career", title: "კარიერა", description: "კარიერული განვითარების რჩევები", icon: "fas fa-briefcase", count: 22 }
];

const expertsData = [
  { id: 1, name: "დოქტორი მარიამ ბერიძე", title: "საგანმანათლებლო ფსიქოლოგი", quote: "ყველა სტუდენტს აქვს უნიკალური სწავლის სტილი. მნიშვნელოვანია მისი აღმოჩენა და გამოყენება.", specialties: ["სწავლის მეთოდები", "მოტივაცია", "ფსიქოლოგია"], avatar: "/images/hero_image.jpeg" },
  { id: 2, name: "პროფესორი გიორგი მაისურაძე", title: "მათემატიკის პედაგოგი", quote: "მათემატიკა არის ლოგიკის ენა. მნიშვნელოვანია ფუნდამენტური ცნებების გაგება.", specialties: ["მათემატიკა", "ოლიმპიადები", "პედაგოგიკა"], avatar: "/images/hero_image.jpeg" },
  { id: 3, name: "ანა კაპანაძე", title: "კარიერული კონსულტანტი", quote: "წარმატებული კარიერა იწყება ადრეული გეგმვით და მუდმივი განვითარებით.", specialties: ["კარიერა", "გეგმვა", "განვითარება"], avatar: "/images/hero_image.jpeg" }
];

const resourcesData = [
  { id: 1, title: "ონლაინ კურსები", description: "უფასო და ფასიანი კურსები სხვადასხვა საგნებში", icon: "fas fa-laptop", link: "#" },
  { id: 2, title: "სახელმძღვანელოები", description: "ელექტრონული და ფიზიკური სახელმძღვანელოები", icon: "fas fa-book", link: "#" },
  { id: 3, title: "ვიდეო გაკვეთილები", description: "საგანმანათლებლო ვიდეოები და ლექციები", icon: "fas fa-video", link: "#" },
  { id: 4, title: "პრაქტიკული ამოცანები", description: "ამოცანების ბანკი სხვადასხვა საგნებში", icon: "fas fa-tasks", link: "#" },
  { id: 5, title: "ონლაინ ტესტები", description: "საშუალო და უმაღლესი დონის ტესტები", icon: "fas fa-clipboard-check", link: "#" },
  { id: 6, title: "მენტორობის პროგრამა", description: "პერსონალური მენტორობა ექსპერტებისგან", icon: "fas fa-user-graduate", link: "#" }
];

function getCategoryText(category) {
  const categories = {
    'study': 'სწავლის მეთოდები',
    'olympiad': 'ოლიმპიადის მომზადება',
    'time': 'დროის მართვა',
    'motivation': 'მოტივაცია',
    'career': 'კარიერა'
  };
  return categories[category] || category;
}

export default function TipsPage() {
  const [currentFilters, setCurrentFilters] = useState({ category: '', grade: '', subject: '' });
  const [currentSearch, setCurrentSearch] = useState('');
  const [filteredTips, setFilteredTips] = useState(tipsData);
  const [displayedTips, setDisplayedTips] = useState(6);

  useEffect(() => {
    let filtered = [...tipsData];

    if (currentSearch) {
      const lowerSrc = currentSearch.toLowerCase();
      filtered = filtered.filter(tip => 
        tip.title.toLowerCase().includes(lowerSrc) ||
        tip.content.toLowerCase().includes(lowerSrc)
      );
    }
    
    if (currentFilters.category) {
      filtered = filtered.filter(tip => tip.category === currentFilters.category);
    }
    
    if (currentFilters.grade) {
      filtered = filtered.filter(tip => tip.grade === currentFilters.grade || tip.grade === 'all');
    }
    
    if (currentFilters.subject) {
      filtered = filtered.filter(tip => tip.subject === currentFilters.subject || tip.subject === 'general');
    }
    
    setFilteredTips(filtered);
    setDisplayedTips(6);
  }, [currentSearch, currentFilters]);

  const clearAllFilters = () => {
    setCurrentSearch('');
    setCurrentFilters({ category: '', grade: '', subject: '' });
  };

  const handleCategoryClick = (categoryId) => {
    setCurrentFilters({ ...currentFilters, category: categoryId });
    document.querySelector('.all_tips_section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showTipDetails = (tip) => {
    alert(`რჩევის დეტალები: ${tip.title}\n\n${tip.content}`);
  };

  const featuredTips = tipsData.filter(tip => tip.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="tips_hero">
        <div className="tips_hero_content">
          <div className="tips_hero_text">
            <h1 className="tips_hero_title">სასწავლო რჩევები და სტრატეგიები</h1>
            <p className="tips_hero_description">
              აღმოაჩინე ეფექტური სწავლის მეთოდები, მიიღე რჩევები ექსპერტებისგან და გააუმჯობესე შენი აკადემიური წარმატებები
            </p>
            <div className="tips_hero_stats">
              <div className="stat_item">
                <span className="stat_number">500+</span>
                <span className="stat_label">რჩევა</span>
              </div>
              <div className="stat_item">
                <span className="stat_number">50+</span>
                <span className="stat_label">ექსპერტი</span>
              </div>
              <div className="stat_item">
                <span className="stat_number">10K+</span>
                <span className="stat_label">სტუდენტი</span>
              </div>
            </div>
          </div>
          <div className="tips_hero_visual">
            <div className="floating_card card_1">
              <i className="fas fa-lightbulb"></i>
              <span>სწავლის რჩევები</span>
            </div>
            <div className="floating_card card_2">
              <i className="fas fa-trophy"></i>
              <span>ოლიმპიადის მომზადება</span>
            </div>
            <div className="floating_card card_3">
              <i className="fas fa-clock"></i>
              <span>დროის მართვა</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Categories */}
      <section className="tips_categories">
        <div className="tips_categories_container">
          <h2 className="tips_categories_title">რჩევების კატეგორიები</h2>
          <div className="categories_grid">
            {categoriesData.map(category => (
              <div key={category.id} className="category_card" onClick={() => handleCategoryClick(category.id)}>
                <div className="category_icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category_title">{category.title}</h3>
                <p className="category_description">{category.description}</p>
                <span className="category_count">{category.count} რჩევა</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="featured_tips">
        <div className="featured_tips_container">
          <div className="featured_header">
            <h2 className="featured_title">პოპულარული რჩევები</h2>
            <p className="featured_subtitle">ყველაზე ხშირად გამოყენებული რჩევები სტუდენტების მიერ</p>
          </div>
          <div className="featured_tips_grid">
            {featuredTips.map(tip => (
              <div key={tip.id} className="featured_tip_card">
                <div className="tip_header">
                  <div className="tip_icon">
                    <i className={tip.icon}></i>
                  </div>
                  <div className="tip_meta">
                    <h3 className="tip_title">{tip.title}</h3>
                    <span className="tip_category">{getCategoryText(tip.category)}</span>
                  </div>
                </div>
                <p className="tip_content">{tip.content}</p>
                <div className="tip_actions">
                  <div className="tip_rating">
                    <i className="fas fa-star"></i>
                    <span>{tip.rating}</span>
                  </div>
                  <button className="read_more_btn" onClick={() => showTipDetails(tip)}>
                    ნახვა <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Advice Section */}
      <section className="expert_advice">
        <div className="expert_advice_container">
          <h2 className="expert_advice_title">ექსპერტების რჩევები</h2>
          <div className="experts_grid">
            {expertsData.map(expert => (
              <div key={expert.id} className="expert_card">
                <div className="expert_avatar">
                  <img src={expert.avatar} alt={expert.name} />
                </div>
                <h3 className="expert_name">{expert.name}</h3>
                <p className="expert_title">{expert.title}</p>
                <p className="expert_quote">"{expert.quote}"</p>
                <div className="expert_specialties">
                  {expert.specialties.map(spec => (
                    <span key={spec} className="expert_specialty">{spec}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="study_resources">
        <div className="study_resources_container">
          <h2 className="study_resources_title">სასწავლო რესურსები</h2>
          <div className="resources_grid">
            {resourcesData.map(resource => (
              <div key={resource.id} className="resource_card">
                <div className="resource_icon">
                  <i className={resource.icon}></i>
                </div>
                <h3 className="resource_title">{resource.title}</h3>
                <p className="resource_description">{resource.description}</p>
                <a href={resource.link} className="resource_link">
                  ნახვა <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Search and Filter */}
      <section className="tips_search_section">
        <div className="tips_search_container">
          <div className="search_header">
            <h2 className="search_title">იპოვე შენთვის შესაფერისი რჩევა</h2>
            <p className="search_subtitle">გამოიყენე ფილტრები და მოიძიე კონკრეტული რჩევები</p>
          </div>
          <div className="search_filters">
            <div className="search_input_group">
              <input 
                type="text" 
                placeholder="ძიება რჩევებში..." 
                className="search_input"
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
              />
              <i className="fas fa-search search_icon"></i>
            </div>
            <div className="filters_row">
              <select 
                className="filter_select"
                value={currentFilters.category}
                onChange={(e) => setCurrentFilters({...currentFilters, category: e.target.value})}
              >
                <option value="">ყველა კატეგორია</option>
                <option value="study">სწავლის მეთოდები</option>
                <option value="olympiad">ოლიმპიადის მომზადება</option>
                <option value="time">დროის მართვა</option>
                <option value="motivation">მოტივაცია</option>
                <option value="career">კარიერა</option>
              </select>
              <select 
                className="filter_select"
                value={currentFilters.grade}
                onChange={(e) => setCurrentFilters({...currentFilters, grade: e.target.value})}
              >
                <option value="">ყველა კლასი</option>
                <option value="elementary">დაწყებითი</option>
                <option value="middle">საშუალო</option>
                <option value="high">საშუალო სრული</option>
                <option value="university">უნივერსიტეტი</option>
              </select>
              <select 
                className="filter_select"
                value={currentFilters.subject}
                onChange={(e) => setCurrentFilters({...currentFilters, subject: e.target.value})}
              >
                <option value="">ყველა საგანი</option>
                <option value="math">მათემატიკა</option>
                <option value="science">მეცნიერება</option>
                <option value="language">ენები</option>
                <option value="history">ისტორია</option>
                <option value="art">ხელოვნება</option>
              </select>
            </div>
            <button className="clear_filters_btn" onClick={clearAllFilters}>
              <i className="fas fa-times"></i>
              ფილტრების გასუფთავება
            </button>
          </div>
        </div>
      </section>

      {/* All Tips Grid */}
      <section className="all_tips_section">
        <div className="all_tips_container">
          <div className="tips_header">
            <h2 className="all_tips_title">ყველა რჩევა</h2>
            <div className="tips_count">
              <span>{filteredTips.length}</span> რჩევა ნაპოვნია
            </div>
          </div>
          
          {filteredTips.length > 0 ? (
            <div className="tips_grid">
              {filteredTips.slice(0, displayedTips).map(tip => (
                <div key={tip.id} className="tip_card">
                  <div className="tip_card_header">
                    <div className="tip_card_icon">
                      <i className={tip.icon}></i>
                    </div>
                    <div className="tip_card_meta">
                      <h3 className="tip_card_title">{tip.title}</h3>
                      <span className="tip_card_category">{getCategoryText(tip.category)}</span>
                    </div>
                  </div>
                  <p className="tip_card_content">{tip.content}</p>
                  <div className="tip_card_footer">
                    <div className="tip_card_rating">
                      <i className="fas fa-star"></i>
                      <span>{tip.rating}</span>
                    </div>
                    <button className="tip_card_read_more" onClick={() => showTipDetails(tip)}>
                      ნახვა <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              <i className="fas fa-search" style={{ fontSize: '48px', color: '#ccc', marginBottom: '20px' }}></i>
              <h3 style={{ color: '#666', marginBottom: '10px' }}>რჩევა ვერ მოიძებნა</h3>
              <p style={{ color: '#999' }}>სცადეთ სხვა ფილტრები ან ძიების ტერმინები</p>
            </div>
          )}
          
          {displayedTips < filteredTips.length && (
            <div className="load_more_container">
              <button className="load_more_btn" onClick={() => setDisplayedTips(displayedTips + 6)}>
                <span>მეტი რჩევის ნახვა</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="tips_newsletter">
        <div className="tips_newsletter_container">
          <div className="newsletter_content">
            <div className="newsletter_text">
              <h3 className="newsletter_h3">მიიღე ყოველკვირეული რჩევები</h3>
              <p className="newsletter_description">გამოიწერე ჩვენი ბიულეტენი და მიიღე უახლესი სასწავლო რჩევები, სტრატეგიები და მოტივაციური ისტორიები</p>
              <div className="newsletter_features">
                <div className="feature_item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>ყოველ კვირას ახალი რჩევები</span>
                </div>
                <div className="feature_item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>ექსპერტების რჩევები</span>
                </div>
                <div className="feature_item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>პრაქტიკული სტრატეგიები</span>
                </div>
              </div>
            </div>
            <div className="newsletter_form">
              <form className="subscribe_form" onSubmit={(e) => { e.preventDefault(); alert("გამოწერილია!") }}>
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
      </section>
    </>
  );
}
