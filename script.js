

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.header_nav');
  const mainMenuLinks = document.querySelectorAll('.header_list');
  const profileBtn = document.querySelector('.profile_btn');
  const profileDropdown = document.querySelector('.profile-dropdown');

  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    mainMenu.classList.toggle('active');
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
  });

  // Close mobile menu when a nav link is clicked
  mainMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 1125) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mainMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Reset nav when resizing up
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1125) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mainMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Toggle profile dropdown
  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', function () {
      profileDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.profile_btn') && !e.target.closest('.profile-dropdown')) {
        profileDropdown.classList.remove('active');
      }
    });
  }
});

// Updated activity data with more entries
const activities = [
    {
        id: 1,
        user: "ნინო ნათელაშვილი",
        avatar: "avatar1.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "მათემატიკის ოლიმპიადა - ოქრო",
        icon: "certificate",
        time: "2 საათის წინ"
    },
    {
        id: 2,
        user: "გიორგი მამულაძე",
        avatar: "avatar2.jpg",
        action: "დარეგისტრირდა",
        details: "გაეროს მოდელირება 2025",
        icon: "calendar-check",
        time: "5 საათის წინ"
    },
    {
        id: 3,
        user: "თამარ ჩხიკვაძე",
        avatar: "avatar3.jpg",
        action: "დაასრულა კურსი",
        details: "Python პროგრამირება",
        icon: "graduation-cap",
        time: "1 დღის წინ"
    },
    {
        id: 4,
        user: "ლუკა ზარანდია",
        avatar: "avatar4.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "დებატების ტურნირი - ვერცხლი",
        icon: "certificate",
        time: "2 დღის წინ"
    },
    {
        id: 5,
        user: "ანა ბერიძე",
        avatar: "avatar5.jpg",
        action: "დაიწყო ახალი კურსი",
        details: "ვებ-დიზაინის საბაზო კურსი",
        icon: "laptop-code",
        time: "1 დღის წინ"
    },
    {
        id: 6,
        user: "დავით ჯანაშია",
        avatar: "avatar6.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "რობოტექნიკის ბანაკი",
        icon: "robot",
        time: "3 დღის წინ"
    }
];

// Function to render compact activity cards
function renderActivities() {
    const activityFeed = document.getElementById('activity-feed');
    
    if (!activityFeed) return;
    
    activityFeed.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <img src="./images/${activity.avatar}" alt="${activity.user}" class="activity-avatar">
            <div class="activity-content">
                <div class="activity-user">${activity.user}</div>
                <div class="activity-text">
                    <strong>${activity.action}:</strong> ${activity.details}
                </div>
                <div class="activity-meta">
                    <i class="fas fa-${activity.icon} activity-icon"></i>
                    <span>${activity.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', renderActivities);