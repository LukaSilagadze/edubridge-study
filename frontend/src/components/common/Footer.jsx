import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_main">
          <div className="footer_brand">
            <div className="footer_logo">
              <img src="/images/logo.svg" alt="EduBridge Logo" />
              <h3 className="footer_logo_text">EduBridge</h3>
            </div>
            <p className="footer_description">აღმოაჩინე, მიიღე მონაწილეობა და გამოიჩინე თავი საქართველოს საუკეთესო საგანმანათლებლო აქტივობებში</p>
            <div className="footer_social">
              <a href="#" className="footer_social_link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer_social_link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer_social_link">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#" className="footer_social_link">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer_links">
            <div className="footer_column">
              <h4 className="footer_column_title">აქტივობები</h4>
              <ul className="footer_links_list">
                <li><Link to="/profile" className="footer_link">პროფილი</Link></li>
                <li><a href="#" className="footer_link">ოლიმპიადები</a></li>
                <li><a href="#" className="footer_link">ტურნირები</a></li>
                <li><a href="#" className="footer_link">სახელოსნოები</a></li>
                <li><a href="#" className="footer_link">კონფერენციები</a></li>
                <li><a href="#" className="footer_link">საგანმანათლებლო ლაბორატორიები</a></li>
              </ul>
            </div>
            <div className="footer_column">
              <h4 className="footer_column_title">სერვისები</h4>
              <ul className="footer_links_list">
                <li><a href="#" className="footer_link">სერტიფიკატები</a></li>
                <li><a href="#" className="footer_link">პორტფოლიო</a></li>
                <li><a href="#" className="footer_link">რჩევები</a></li>
                <li><a href="#" className="footer_link">მენტორობა</a></li>
                <li><a href="#" className="footer_link">კარიერული რჩევები</a></li>
              </ul>
            </div>
            <div className="footer_column">
              <h4 className="footer_column_title">ჩვენს შესახებ</h4>
              <ul className="footer_links_list">
                <li><a href="#" className="footer_link">ჩვენი ისტორია</a></li>
                <li><a href="#" className="footer_link">გუნდი</a></li>
                <li><a href="#" className="footer_link">პარტნიორები</a></li>
                <li><a href="#" className="footer_link">კარიერა</a></li>
                <li><a href="#" className="footer_link">პრესა</a></li>
              </ul>
            </div>
            <div className="footer_column">
              <h4 className="footer_column_title">დახმარება</h4>
              <ul className="footer_links_list">
                <li><a href="#" className="footer_link">FAQ</a></li>
                <li><Link to="/contact" className="footer_link">კონტაქტი</Link></li>
                <li><a href="#" className="footer_link">მხარდაჭერა</a></li>
                <li><a href="#" className="footer_link">სახელმძღვანელო</a></li>
                <li><a href="#" className="footer_link">შეფასებები</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <div className="footer_copyright">
              <p>&copy; 2024 EduBridge. ყველა უფლება დაცულია.</p>
            </div>
            <div className="footer_legal">
              <a href="#" className="footer_legal_link">პირობები</a>
              <a href="#" className="footer_legal_link">კონფიდენციალურობა</a>
              <a href="#" className="footer_legal_link">Cookie პოლიტიკა</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
