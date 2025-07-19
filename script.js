
  const notification = document.querySelector(".feature-notification");
  const closeBtn = document.querySelector(".close-notification");

  closeBtn.addEventListener("click", () => {
    notification.classList.add("hidden");
  });


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

// Update your activity data structure
const activities = [
    {
        id: 1,
        user: "ლუკა სილაგაძე",
        avatar: "profilepic_boy.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "მათემატიკის რესპუბლიკური ოლიმპიადა - ოქროს მედალი",
        icon: "certificate",
        time: "2 საათის წინ",
        likes: 5,
        comments: 2,
        liked: false
    },
    {
        id: 2,
        user: "ნინო გიგაური",
        avatar: "profilepic_girl.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "მათემატიკის რესპუბლიკური ოლიმპიადა - ოქროს მედალი",
        icon: "certificate",
        time: "2 საათის წინ",
        likes: 5,
        comments: 2,
        liked: false
    },
    {
        id: 3,
        user: "დათა ბახტაძე",
        avatar: "profilepic_boy.jpg",
        action: "მიიღო სერტიფიკატი",
        details: "მათემატიკის რესპუბლიკური ოლიმპიადა - ოქროს მედალი",
        icon: "certificate",
        time: "2 საათის წინ",
        likes: 5,
        comments: 2,
        liked: false
    },
    // ... more activities
];

// Function to render timeline
function renderTimeline() {
    const timelineContainer = document.getElementById('activity-timeline');
    
    timelineContainer.innerHTML = activities.map(activity => `
        <div class="timeline-item" data-activity-id="${activity.id}">
            <div class="timeline-content">
                <div class="timeline-header">
                    <img src="./images/${activity.avatar}" alt="${activity.user}" class="timeline-avatar">
                    <div>
                        <span class="timeline-user">${activity.user}</span>
                        <span class="timeline-time">
                            <i class="far fa-clock"></i> ${activity.time}
                        </span>
                    </div>
                </div>
                <div class="timeline-text">
                    <i class="fas fa-${activity.icon} timeline-icon"></i>
                    <strong>${activity.action}:</strong> ${activity.details}
                </div>
                <div class="timeline-actions">
                    <button class="action-btn like-btn ${activity.liked ? 'liked' : ''}" data-activity-id="${activity.id}">
                        <i class="${activity.liked ? 'fas' : 'far'} fa-heart"></i>
                        <span class="count">${activity.likes}</span>
                    </button>
                    <button class="action-btn comment-btn ${activity.showComments ? 'active' : ''}" data-activity-id="${activity.id}">
                        <i class="far fa-comment"></i>
                        <span class="count">${activity.comments}</span>
                    </button>
                </div>
                <div class="comment-section hidden" id="comments-${activity.id}"></div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    addTimelineEventListeners();
}

// Load more functionality
document.querySelector('.load-more-btn')?.addEventListener('click', function() {
    // In a real app, you would fetch more activities from server
    const moreActivities = [
        // Additional activity objects
    ];
    
    activities.push(...moreActivities);
    renderTimeline();
});

// Initialize
document.addEventListener('DOMContentLoaded', renderTimeline);


// Enhanced like functionality with animation
function handleLike(activityId) {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;
    
    // Toggle like state
    activity.liked = !activity.liked;
    activity.likes += activity.liked ? 1 : -1;
    
    // Update UI
    const likeBtn = document.querySelector(`.like-btn[data-activity-id="${activityId}"]`);
    if (likeBtn) {
        likeBtn.classList.toggle('liked', activity.liked);
        likeBtn.innerHTML = `
            <i class="${activity.liked ? 'fas' : 'far'} fa-heart"></i>
            <span class="count">${activity.likes}</span>
        `;
    }
}

// Enhanced comment toggle
function toggleComments(activityId) {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;
    
    activity.showComments = !activity.showComments;
    
    const commentBtn = document.querySelector(`.comment-btn[data-activity-id="${activityId}"]`);
    const commentSection = document.getElementById(`comments-${activityId}`);
    
    if (commentBtn && commentSection) {
        commentBtn.classList.toggle('active', activity.showComments);
        commentSection.classList.toggle('hidden', !activity.showComments);
        
        // Load comments if not already loaded
        if (activity.showComments && !commentSection.innerHTML) {
            loadComments(activityId);
        }
    }
}


// In the profile dropdown click handler
profileBtn.addEventListener('click', function() {
    const isAuthenticated = localStorage.getItem('edubridge-auth') === 'true';
    
    if (isAuthenticated) {
        // Show profile options if logged in
        profileDropdown.innerHTML = `
            <a href="./profile.html" class="dropdown-item">
                <i class="fas fa-user"></i> ჩემი პროფილი
            </a>
            <a href="./certificates.html" class="dropdown-item">
                <i class="fas fa-certificate"></i> ჩემი სერტიფიკატები
            </a>
            <button class="dropdown-item logout-btn">
                <i class="fas fa-sign-out-alt"></i> გამოსვლა
            </button>
        `;
    } else {
        // Show auth options if not logged in
        profileDropdown.innerHTML = `
            <a href="./signin.html" class="dropdown-item">
                <i class="fas fa-sign-in-alt"></i> ავტორიზაცია
            </a>
            <a href="./signup.html" class="dropdown-item">
                <i class="fas fa-user-plus"></i> რეგისტრაცია
            </a>
        `;
    }
    
    profileDropdown.classList.toggle('active');
});

// Add logout functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('logout-btn')) {
        localStorage.removeItem('edubridge-auth');
        localStorage.removeItem('edubridge-user');
        window.location.href = 'signin.html';
    }
});