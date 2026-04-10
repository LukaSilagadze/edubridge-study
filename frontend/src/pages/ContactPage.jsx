import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const maxLength = 1000;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = [];
    
    if (!formData.firstName.trim()) newErrors.push('სახელი სავალდებულოა');
    if (!formData.lastName.trim()) newErrors.push('გვარი სავალდებულოა');
    
    if (!formData.email.trim()) {
      newErrors.push('ელ-ფოსტა სავალდებულოა');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა');
    }
    
    if (!formData.subject) newErrors.push('გთხოვთ აირჩიოთ თემა');
    if (!formData.message.trim()) newErrors.push('შეტყობინება სავალდებულოა');
    if (!formData.privacy) newErrors.push('გთხოვთ დაეთანხმოთ პირობებს');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', privacy: false
        });
        
        setTimeout(() => setIsSuccess(false), 5000);
      }, 2000);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "როგორ შემიძლია მივიღო მონაწილეობა აქტივობებში?", a: 'აქტივობებში მონაწილეობის მისაღებად, უბრალოდ აირჩიეთ სასურველი აქტივობა, დაათვალიერეთ დეტალები და დააჭირეთ "რეგისტრაცია" ღილაკს. შემდეგ შეავსეთ საჭირო ინფორმაცია და დაადასტურეთ მონაწილეობა.' },
    { q: "არის თუ არა აქტივობები უფასო?", a: 'ჩვენი პლატფორმაზე არის როგორც უფასო, ასევე ფასიანი აქტივობები. თითოეული აქტივობის გვერდზე მითითებულია მონაწილეობის ღირებულება ან "უფასო" ნიშანი.' },
    { q: "როგორ შემიძლია მივიღო სერტიფიკატი?", a: 'სერტიფიკატები გაიცემა აქტივობის წარმატებით დასრულების შემდეგ. ისინი ავტომატურად გამოგიგზავნებათ ელ-ფოსტაზე, ან შეგიძლიათ ჩამოტვირთოთ თქვენი პროფილიდან.' },
    { q: "რა მოხდება თუ არ შევძლებ მონაწილეობას?", a: 'თუ ვერ შეძლებთ მონაწილეობას, გთხოვთ დაგვიკავშირდეთ მინიმუმ 24 საათით ადრე. უფასო აქტივობებისთვის უბრალოდ გააუქმეთ რეგისტრაცია, ფასიანი აქტივობებისთვის კი ჩვენ დაგეხმარებით.' },
    { q: "როგორ შემიძლია გავხდე პარტნიორი?", a: 'პარტნიორობისთვის დაგვიკავშირდით ელ-ფოსტით partnership@edubridge.ge ან გამოიყენეთ ზემოთ მოცემული კონტაქტის ფორმა. ჩვენი გუნდი დაგიკავშირდებათ დეტალების გასარკვევად.' }
  ];

  return (
    <>
      {/* Contact Form Section */}
      <section className="contact_form_section">
        <div className="contact_form_container">
          <div className="form_content">
            <h3 className="form_h3">მოგვწერეთ შეტყობინება</h3>
            <p className="form_description">
              შეავსეთ ფორმა ქვემოთ და ჩვენი გუნდი დაგიკავშირდებათ რაც შეიძლება სწრაფად.
            </p>

            {errors.length > 0 && (
              <div className="error-container" style={{ background: '#fee', border: '1px solid #fcc', borderRadius: '8px', padding: '15px', marginBottom: '20px', color: '#c33', fontSize: '14px' }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>გთხოვთ შეასწოროთ შემდეგი შეცდომები:</h4>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {errors.map((err, i) => <li key={i}>{err}</li>)}
                </ul>
              </div>
            )}

            {isSuccess && (
              <div className="success-container" style={{ background: '#e6ffe6', border: '1px solid #ccffcc', borderRadius: '8px', padding: '15px', marginBottom: '20px', color: '#006600', fontSize: '14px' }}>
                <i className="fas fa-check" style={{ marginRight: '8px' }}></i>
                შეტყობინება წარმატებით გაიგზავნა!
              </div>
            )}

            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="form_row">
                <div className="form_group">
                  <label className="form_label" htmlFor="firstName">სახელი *</label>
                  <input type="text" id="firstName" name="firstName" className="form_input" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form_group">
                  <label className="form_label" htmlFor="lastName">გვარი *</label>
                  <input type="text" id="lastName" name="lastName" className="form_input" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="form_row">
                <div className="form_group">
                  <label className="form_label" htmlFor="email">ელ-ფოსტა *</label>
                  <input type="email" id="email" name="email" className="form_input" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form_group">
                  <label className="form_label" htmlFor="phone">ტელეფონი</label>
                  <input type="tel" id="phone" name="phone" className="form_input" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="subject">თემა *</label>
                <select id="subject" name="subject" className="form_select" value={formData.subject} onChange={handleChange} required>
                  <option value="">აირჩიეთ თემა</option>
                  <option value="general">ზოგადი კითხვა</option>
                  <option value="technical">ტექნიკური პრობლემა</option>
                  <option value="partnership">პარტნიორობა</option>
                  <option value="feedback">მოსაზრება</option>
                  <option value="other">სხვა</option>
                </select>
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="message">შეტყობინება *</label>
                <textarea id="message" name="message" className="form_textarea" rows="5" placeholder="დაწერეთ თქვენი შეტყობინება აქ..." value={formData.message} onChange={handleChange} required></textarea>
                <div className="char-counter" style={{ fontSize: '12px', textAlign: 'right', marginTop: '5px', color: (maxLength - formData.message.length) < 100 ? '#ff6b6b' : '#666' }}>
                  {formData.message.length}/{maxLength}
                </div>
              </div>
              <div className="form_group checkbox_group">
                <label className="checkbox_label">
                  <input type="checkbox" id="privacy" name="privacy" className="form_checkbox" checked={formData.privacy} onChange={handleChange} required />
                  <span className="checkmark"></span>
                  ვეთანხმები <a href="#" className="terms_link">პირობებს</a> და <a href="#" className="terms_link">კონფიდენციალურობის პოლიტიკას</a> *
                </label>
              </div>
              <button type="submit" className="submit_btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i><span>იგზავნება...</span></>
                ) : (
                  <><span>გაგზავნა</span><i className="fas fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>

          <div className="contact_info">
            <h3 className="contact_info_h3">საკონტაქტო ინფორმაცია</h3>
            <div className="contact_info_items">
              <div className="contact_info_item">
                <div className="contact_info_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact_info_content">
                  <h4>ელ-ფოსტა</h4>
                  <a href="mailto:info@edubridge.ge">edubridge.org@gmail.com</a>
                </div>
              </div>
              <div className="contact_info_item">
                <div className="contact_info_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact_info_content">
                  <h4>ტელეფონი</h4>
                  <a href="tel:+995322123456">+995 322 123 456</a>
                </div>
              </div>
              <div className="contact_info_item">
                <div className="contact_info_icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact_info_content">
                  <h4>მისამართი</h4>
                  <span>თბილისი, საქართველო</span>
                </div>
              </div>
            </div>
            <div className="contact_social">
              <h4>სოციალური ქსელები</h4>
              <div className="social_links">
                <a href="#" className="social_link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social_link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social_link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social_link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq_section">
        <div className="faq_container">
          <h3 className="faq_h3">ხშირად დასმული კითხვები</h3>
          <div className="faq_list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq_item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq_question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.q}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq_answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="office_hours_section">
        <div className="office_hours_container">
          <div className="office_hours_content">
            <h3 className="office_hours_h3">სამუშაო საათები</h3>
            <div className="hours_list">
              <div className="hour_item">
                <span className="day">ორშაბათი - პარასკევი</span>
                <span className="time">09:00 - 18:00</span>
              </div>
              <div className="hour_item">
                <span className="day">შაბათი</span>
                <span className="time">10:00 - 16:00</span>
              </div>
              <div className="hour_item">
                <span className="day">კვირა</span>
                <span className="time">უქმე</span>
              </div>
            </div>
            <p className="office_note">
              * ონლაინ მხარდაჭერა ხელმისაწვდომია 24/7
            </p>
          </div>
          <div className="office_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22333991126!2d44.64195479775819!3d41.72786065435448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1754294650927!5m2!1sen!2sge" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
