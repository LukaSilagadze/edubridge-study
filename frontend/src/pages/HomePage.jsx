import { Link } from 'react-router-dom';

const activityCards = [
  {
      id: 1,
      title: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
      age: "13-24",
      location: "ნიუ იორკი, აშშ",
      image: "munnyc2025.png",
      badge: "ახალი",
      link: "https://forms.gle/GHzuzQ1E4bY356cy6",
  },
  {
      id: 2,
      title: "პროგრამირება სკოლის პარალელურად",
      age: "14-17 წლამდე",
      location: "თბილისი, საქართველო",
      image: "ItStep_1.png",
      badge: "",
      link: "https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning",
  },
  {
      id: 3,
      title: "სამთო სათხილამურო კლუბი იქსტრიმი",
      age: "6-14 წლის",
      location: "ბაკურიანი, საქართველო",
      image: "Xtreme.jpg",
      badge: "",
      link: "https://forms.gle/Xnrae5GYvUVmptsU9",
  },
];

export default function HomePage() {
  return (
    <>
      {/* after header section */}
      <section className="hero">
        <div className="hero_text_div">
          <h2 className="hero_h2">
            აღმოაჩინე. <br />მიიღე მონაწილეობა. <br />გამოიჩინე თავი.
          </h2>
          <p className="hero_p">
            იპოვე ოლიმპიადები, ტურნირები და სხვა სასკოლო აქტივობები. განათავსე
            შენი წარმატებები ერთ პორტფოლიოში.
          </p>
          <button className="hero_btn" onClick={() => window.location.href='/events'}>
            <img src="/images/arrow.svg" alt="" />აქტივობები
          </button>
        </div>
        <div className="hero_img_div">
          <img src="/images/hero_image.jpeg" alt="Hero image" />
        </div>
      </section>

      {/* activity section */}
      <section className="activity_section">
        <div className="activity_div">
          <div className="activity_text_div">
            <h3 className="activity_h3">მიმდინარე აქტივობები</h3>
            <div className="activity_seeAll">
              <img src="/images/arrow.svg" alt="" />
              <Link to="/events" className="activity_a">ყველას ნახვა</Link>
            </div>
          </div>
          <div id="activity_div_cards" className="activity_div_cards">
            {activityCards.map((activity) => (
              <article key={activity.id} className="activity_card">
                  <div className="activity-image">
                      <img src={`/images/${activity.image}`} alt={activity.title} loading="lazy" />
                      {activity.badge && <span className="activity-badge">{activity.badge}</span>}
                  </div>
                  <div className="activity-content">
                      <h3 className="activity-title">{activity.title}</h3>
                      <div className="activity-meta">
                          <div className="activity-meta-item">
                              <i className="fas fa-graduation-cap"></i>
                              <span>ასაკი: {activity.age}</span>
                          </div>
                          <div className="activity-meta-item">
                              <i className="fas fa-map-marker-alt"></i>
                              <span>{activity.location}</span>
                          </div>
                      </div>
                      <div className="activity-actions">
                          <Link to="#" className="activity-btn details-btn">დეტალები</Link>
                          <a href={activity.link} target="_blank" rel="noreferrer" className="activity-btn register-btn">რეგისტრაცია</a>
                      </div>
                  </div>
              </article>
            ))}
          </div>
        </div>
        <div className="students_acticity_div">
          <h2 className="students_acticity_h2">ბოლო აქტივობები</h2>
          <div id="students_acticity_div_cards" className="students_acticity_div_cards">
            {['ლუკა სილაგაძე', 'დათა ბახტაძე', 'ნინო გიგაური'].map((name, index) => (
              <article key={index} className="students_acticity_card">
                <div className="card-content">
                  <span className="students_activity_name">{name}</span>
                  <span className="students_activity_text">
                    მიიღო სერტიფიკატი მათემატიკის რესპუბლიკური ოლიმპიადაში -{' '}
                    <span className="students_activity_achiv">ოქროს მედალი</span>
                  </span>
                </div>
                <div className="card-buttons">
                  <button className="card-btn like-btn">
                    <i className="fa-solid fa-heart"></i>
                    <span className="like-count">12</span>
                  </button>
                  <button className="card-btn comment-btn">
                    <i className="fa-solid fa-comment-dots"></i>
                    <span>კომენტარი</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
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
          <div className="partners_stats">
            <div className="stat_item">
              <span className="stat_number">50+</span>
              <span className="stat_label">პარტნიორი ორგანიზაცია</span>
            </div>
            <div className="stat_item">
              <span className="stat_number">100+</span>
              <span className="stat_label">სასწავლო დაწესებულება</span>
            </div>
            <div className="stat_item">
              <span class="stat_number">1000+</span>
              <span class="stat_label">წარმატებული სტუდენტი</span>
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
    </>
  );
}
