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

// Function to add event listeners to timeline items
function addTimelineEventListeners() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const activityId = parseInt(this.getAttribute('data-activity-id'));
            handleLike(activityId);
        });
    });

    document.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const activityId = parseInt(this.getAttribute('data-activity-id'));
            toggleComments(activityId);
        });
    });
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
document.addEventListener('DOMContentLoaded', function() {
    renderTimeline();
    
    // Load upcoming events
    loadUpcomingEvents();
});

function loadUpcomingEvents() {
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
        // In a real app, you would fetch these from the server
        const events = [
            { name: "მათემატიკის ოლიმპიადა", date: "25 ივნისი", time: "10:00" },
            { name: "პროგრამირების კონკურსი", date: "30 ივნისი", time: "14:00" },
            { name: "სამეცნიერო ფერისტვალი", date: "5 ივლისი", time: "11:00" }
        ];
        
        eventsList.innerHTML = events.map(event => `
            <div class="event-item">
                <div class="event-date">
                    <span class="event-day">${event.date.split(' ')[0]}</span>
                    <span class="event-month">${event.date.split(' ')[1]}</span>
                </div>
                <div class="event-details">
                    <h4>${event.name}</h4>
                    <p><i class="far fa-clock"></i> ${event.time}</p>
                </div>
            </div>
        `).join('');
    }
}

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
        
        // Add animation
        likeBtn.classList.add('animate-like');
        setTimeout(() => {
            likeBtn.classList.remove('animate-like');
        }, 500);
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

function loadComments(activityId) {
    const commentSection = document.getElementById(`comments-${activityId}`);
    if (!commentSection) return;
    
    // In a real app, you would fetch comments from the server
    const comments = [
        { user: "მარიამი", text: "გილოცავთ! 🎉", time: "1 საათის წინ" },
        { user: "გიორგი", text: "დიდი წარმატება!", time: "45 წუთის წინ" }
    ];
    
    commentSection.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <img src="./images/profilepic_girl.jpg" alt="${comment.user}" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-user">${comment.user}</span>
                    <span class="comment-time">${comment.time}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        </div>
    `).join('') + `
    <div class="add-comment">
        <input type="text" placeholder="დაამატეთ კომენტარი..." class="comment-input">
        <button class="btn comment-submit-btn">გაგზავნა</button>
    </div>
    `;
}