document.addEventListener('DOMContentLoaded', function() {
    // Filter Panel Toggle
    const filterBtn = document.querySelector('.filter-btn');
    const filtersPanel = document.querySelector('.filters-panel');
    const closeFilters = document.querySelector('.close-filters');
    
    filterBtn.addEventListener('click', function() {
        filtersPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeFilters.addEventListener('click', function() {
        filtersPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Grade Slider
    const gradeSlider = document.querySelector('.grade-slider');
    const selectedGrade = document.querySelector('.selected-grade');
    
    gradeSlider.addEventListener('input', function() {
        selectedGrade.textContent = `${this.value} კლასი`;
    });
    
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterActivities(this.dataset.tab);
        });
    });
    
    // Sample Activity Data
    const activities = [
        {
            id: 1,
            title: "მათემატიკის რესპუბლიკური ოლიმპიადა",
            type: "olympiad",
            subject: "math",
            grades: "9-12",
            deadline: "25 ივნისი",
            location: "თბილისი",
            description: "ქვეყნის მასშტაბის მათემატიკის ოლიმპიადა უმაღლესი დონის ამოცანებით.",
            image: "math_olympiad.jpg",
            badge: "ახალი"
        },
        {
            id: 2,
            title: "გაეროს მოდელირება",
            type: "tournament",
            subject: "debate",
            grades: "8-11",
            deadline: "30 ივნისი",
            location: "თბილისის საერთაშორისო სკოლა",
            description: "გაეროს სხვადასხვა კომიტეტების მოდელირება ინგლისურ და ქართულ ენებზე.",
            image: "debate.jpg",
            badge: "პოპულარული"
        },
        {
            id: 3,
            title: "პროგრამირების საზაფხულო ბანაკი",
            type: "camp",
            subject: "programming",
            grades: "7-12",
            deadline: "15 ივლისი",
            location: "ბათუმი",
            description: "2 კვირიანი ინტენსიური პროგრამირების კურსი Python და Web Development-ზე.",
            image: "mobilelearning.webp"
        },
        {
            id: 4,
            title: "ფიზიკის ოლიმპიადა",
            type: "olympiad",
            subject: "physics",
            grades: "9-11",
            deadline: "10 ივლისი",
            location: "თბილისის სახელმწიფო უნივერსიტეტი",
            description: "რესპუბლიკური ეტაპი საერთაშორისო ფიზიკის ოლიმპიადისთვის.",
            image: "physics.jpg"
        },
        {
            id: 5,
            title: "რობოტექნიკის კურსები",
            type: "course",
            subject: "programming",
            grades: "5-9",
            deadline: "მუდმივად",
            location: "ონლაინ",
            description: "8 კვირიანი კურსი რობოტების პროგრამირების საფუძვლებზე Arduino-ს გამოყენებით.",
            image: "robotics.jpg"
        },
        {
            id: 6,
            title: "დებატების ტურნირი",
            type: "tournament",
            subject: "debate",
            grades: "10-12",
            deadline: "5 აგვისტო",
            location: "ქუთაისი",
            description: "წლიური დებატების ტურნირი ქართულ და ინგლისურ ენებზე.",
            image: "debate_2.webp",
            badge: "ახალი"
        }
    ];
    
    // Render Activities
    function renderActivities(activitiesToRender) {
        const grid = document.getElementById('activity-grid');
        grid.innerHTML = '';
        
        activitiesToRender.forEach(activity => {
            const card = document.createElement('article');
            card.className = 'activity-card';
            card.innerHTML = `
                <div class="activity-image">
                    <img src="./images/${activity.image}" alt="${activity.title}" loading="lazy">
                    ${activity.badge ? `<span class="activity-badge">${activity.badge}</span>` : ''}
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">${activity.title}</h3>
                    <div class="activity-meta">
                        <div class="activity-meta-item">
                            <i class="fas fa-graduation-cap"></i>
                            <span>${activity.grades} კლასი</span>
                        </div>
                        <div class="activity-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${activity.location}</span>
                        </div>
                        <div class="activity-meta-item">
                            <i class="far fa-clock"></i>
                            <span>რეგისტრაცია დასრულდება: ${activity.deadline}</span>
                        </div>
                    </div>
                    <p class="activity-description">${activity.description}</p>
                    <div class="activity-actions">
                        <a href="#" class="activity-btn details-btn">დეტალები</a>
                        <a href="#" class="activity-btn register-btn">რეგისტრაცია</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    // Filter Activities by Tab
    function filterActivities(tab) {
        if (tab === 'all') {
            renderActivities(activities);
            return;
        }
        
        const filtered = activities.filter(activity => {
            if (tab === 'olympiads') return activity.type === 'olympiad';
            if (tab === 'tournaments') return activity.type === 'tournament';
            if (tab === 'camps') return activity.type === 'camp';
            if (tab === 'courses') return activity.type === 'course';
            return true;
        });
        
        renderActivities(filtered);
    }
    
    // Initial render
    renderActivities(activities);
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        if (searchTerm.length < 2) {
            renderActivities(activities);
            return;
        }
        
        const filtered = activities.filter(activity => 
            activity.title.toLowerCase().includes(searchTerm) || 
            activity.description.toLowerCase().includes(searchTerm) ||
            activity.subject.toLowerCase().includes(searchTerm)
        );
        
        renderActivities(filtered);
    });
    
    // Apply Filters
    const applyFiltersBtn = document.querySelector('.apply-filters');
    applyFiltersBtn.addEventListener('click', function() {
        const selectedSubjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(el => el.value);
        const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(el => el.value);
        const selectedGrade = parseInt(gradeSlider.value);
        
        const filtered = activities.filter(activity => {
            // Filter by subject
            if (selectedSubjects.length > 0 && !selectedSubjects.includes(activity.subject)) {
                return false;
            }
            
            // Filter by type
            if (selectedTypes.length > 0 && !selectedTypes.includes(activity.type)) {
                return false;
            }
            
            // Filter by grade
            const gradeRange = activity.grades.split('-').map(Number);
            if (selectedGrade < gradeRange[0] || selectedGrade > gradeRange[1]) {
                return false;
            }
            
            return true;
        });
        
        renderActivities(filtered);
        filtersPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Reset Filters
    const resetFiltersBtn = document.querySelector('.reset-filters');
    resetFiltersBtn.addEventListener('click', function() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        gradeSlider.value = 9;
        selectedGrade.textContent = "9 კლასი";
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-by');
    sortSelect.addEventListener('change', function() {
        let sortedActivities = [...activities];
        
        switch(this.value) {
            case 'newest':
                // Assuming newer activities have higher IDs
                sortedActivities.sort((a, b) => b.id - a.id);
                break;
            case 'deadline':
                // This would need actual date objects in a real implementation
                sortedActivities.sort((a, b) => a.deadline.localeCompare(b.deadline));
                break;
            case 'popular':
            default:
                // Sort by badge presence (just for demo)
                sortedActivities.sort((a, b) => {
                    if (a.badge === 'პოპულარული') return -1;
                    if (b.badge === 'პოპულარული') return 1;
                    if (a.badge === 'ახალი') return -1;
                    if (b.badge === 'ახალი') return 1;
                    return 0;
                });
        }
        
        renderActivities(sortedActivities);
    });
});