// document.addEventListener('DOMContentLoaded', function() {
//   const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//   const mainMenu = document.querySelector('.header_nav');
//   const mainMenuLinks = document.querySelectorAll('.header_list');

//   // Toggle mobile menu
//   mobileMenuToggle.addEventListener('click', function() {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//     mainMenu.classList.toggle('active');
    
//     // Toggle body scroll when menu is open
//     document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
//   });

//   // Close menu when clicking on a link (for mobile)
//   mainMenuLinks.forEach(link => {
//     link.addEventListener('click', function() {
//       if (window.innerWidth <= 1125) {
//         mobileMenuToggle.setAttribute('aria-expanded', 'false');
//         mainMenu.classList.remove('active');
//         document.body.style.overflow = 'auto';
//       }
//     });
//   });

//   // Close menu when resizing to desktop
//   window.addEventListener('resize', function() {
//     if (window.innerWidth > 1125) {
//       mobileMenuToggle.setAttribute('aria-expanded', 'false');
//       mainMenu.classList.remove('active');
//       document.body.style.overflow = 'auto';
//     }
//   });
// });



// const profileBtn = document.querySelector('.profile_btn');
// const profileDropdown = document.querySelector('.profile-dropdown');

// if (profileBtn && profileDropdown) {
//   profileBtn.addEventListener('click', function() {
//     profileDropdown.classList.toggle('active');
//   });

//   // Close when clicking outside
//   document.addEventListener('click', function(e) {
//     if (!e.target.closest('.profile_btn') && !e.target.closest('.profile-dropdown')) {
//       profileDropdown.classList.remove('active');
//     }
//   });
// }


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

