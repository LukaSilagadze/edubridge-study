document.addEventListener("DOMContentLoaded", function () {
  // Filter Panel Toggle
  const filterBtn = document.querySelector(".filter-btn");
  const filtersPanel = document.querySelector(".filters-panel");
  const closeFilters = document.querySelector(".close-filters");

  filterBtn.addEventListener("click", function () {
    filtersPanel.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeFilters.addEventListener("click", function () {
    filtersPanel.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Grade Slider
  const gradeSlider = document.querySelector(".grade-slider");
  const selectedGrade = document.querySelector(".selected-grade");

  gradeSlider.addEventListener("input", function () {
    selectedGrade.textContent = `${this.value} კლასი`;
  });

  // Tab Switching
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      filterActivities(this.dataset.tab);
    });
  });

  // Sample Activity Data
  const activities = [
    {
      id: 1,
      title: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
      type: "mun",
      subject: "debate",
      age: "13-24",
      deadline: "25 ივნისი",
      location: "ნიუ იორკი, აშშ",
      price: "4800",
      description: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
      image: "munnyc2025.png",
      badge: "ახალი",
      link: "https://forms.gle/GHzuzQ1E4bY356cy6",
    },
    {
      id: 2,
      title: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
      type: "mun",
      subject: "debate",
      age: "14-25",
      deadline: "30 ივნისი",
      date: "12-16 აგვისტო",
      location: "თბილისი",
      price: "70",
      description: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
      image: "HccSimulation2025.png",
      badge: "ახალი",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform",
    },
    {
      id: 3,
      title: "SDG საზაფხულო ბანაკი ბაკურიანში",
      type: ["camp"],
      subject: "mun",
      age: "14-25",
      deadline: "30 ივლისი",
      date: "12-16 აგვისტო",
      location: "ბაკურიანი",
      price: "670",
      description: "SDG საზაფხულო ბანაკი ბაკურიანში ⛱️☀️",
      image: "SDGCampBakuriani.png",
      badge: "ახალი",
      link: "https://forms.gle/oo1qrc5nGAqWgVez6",
    },
    {
      id: 4,
      title: "ლოგოსის საზაფხულო სკოლა ლისზე",
      type: ["camp"],
      subject: "საზაფხულო სკოლა",
      age: "5-12 წლამდე",
      deadline: "30 ივლისი",
      date: "12-16 აგვისტო",
      location: "თბილისი, საქართველო",
      price: "130-515 ევრო",
      description: "ლოგოსის საზაფხულო სკოლა ლისზე ⛱️☀️",
      image: "gardening.png",
      badge: "",
      link: "https://logos.edu.ge/logosis_sazafxulo_skolashi_registracia/",
    },
    {
      id: 5,
      title: "ახალგაზრდობის ხმა",
      type: ["tournaments"],
      subject: "დებატები",
      age: "14-29 წლამდე",
      deadline: "18 ივლისი",
      date: "არჩევადია",
      location: "თბილისი, საქართველო",
      price: "უფასო",
      description: "ახალგაზრდობის ხმა",
      image: "debate1.jpg",
      badge: "უფასო",
      link: "https://forms.gle/4GHF5oGCH5jV6K5j7",
    },
    {
      id: 6,
      title: "პროგრამირება სკოლის პარალელურად",
      type: ["course"],
      subject: "პროგრამირების",
      age: "14-17 წლამდე",
      deadline: "",
      date: "კვირაში 2-ჯერ",
      location: "თბილისი, საქართველო",
      price: "",
      description: "ItStep Academy",
      image: "ItStep_1.png",
      badge: "",
      link: "https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning",
    },
    {
      id: 7,
      title: "Junior IT აკადემია",
      type: ["course"],
      subject: "პროგრამირების",
      age: "9-13 წელი",
      deadline: "",
      date: "კვირაში 1 დღე, 2 საათი",
      location: "თბილისი, საქართველო",
      price: "",
      description: "ItStep Academy",
      image: "ItStep_2.png",
      badge: "",
      link: "https://ge.itstep.org/junior-step-computer-academy-ge",
    },
    {
      id: 8,
      title: "გრაფიკული დიზაინი სკოლის პარალელურად",
      type: ["course"],
      subject: "გრაფიკული დიზაინი",
      age: "14-17 წლამდე",
      deadline: "",
      date: "კვირაში 2-ჯერ",
      location: "თბილისი, საქართველო",
      price: "",
      description: "ItStep Academy",
      image: "ItStep_3.png",
      badge: "",
      link: "https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning",
    },
  ];

  // Render Activities
  // Update your renderActivities function to include proper data-id and click handling
function renderActivities(activitiesToRender) {
    const grid = document.getElementById("activity-grid");
    grid.innerHTML = "";

    activitiesToRender.forEach((activity) => {
        const card = document.createElement("article");
        card.className = "activity-card";
        // Add data-id attribute to the card
        card.setAttribute('data-id', activity.id);
        
        card.innerHTML = `
            <div class="activity-image">
                <img src="./images/${activity.image}" alt="${activity.title}" loading="lazy">
                ${activity.badge ? `<span class="activity-badge">${activity.badge}</span>` : ""}
            </div>
            <div class="activity-content">
                <h3 class="activity-title">${activity.title}</h3>
                <div class="activity-meta">
                    <div class="activity-meta-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>ასაკი: ${activity.age}</span>
                    </div>
                    <div class="activity-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${activity.location}</span>
                    </div>
                    <div class="activity-meta-item">
                        <i class="far fa-clock"></i>
                        <span>რეგისტრაციის დასრულება: ${activity.deadline}</span>
                    </div>
                </div>
                
                <div class="activity-actions">
                    <a href="#" class="activity-btn details-btn">დეტალები</a>
                    <a href="${activity.link}" target="_blank" class="activity-btn register-btn">რეგისტრაცია</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Set up event listeners after cards are rendered
    setupDetailsButtons();
}

// Function to handle details button clicks
function setupDetailsButtons() {
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the closest activity card
            const card = this.closest('.activity-card');
            
            // Get the activity ID from the data-id attribute
            const activityId = card.getAttribute('data-id');
            
            // Debugging: log the ID to console
            console.log("Navigating to activity ID:", activityId);
            
            // Redirect to details page with activity ID
            window.location.href = `details.html?id=${activityId}`;
        });
    });
}

  // Filter Activities by Tab
  function filterActivities(tab) {
    if (tab === "all") {
      renderActivities(activities);
      return;
    }

    const filtered = activities.filter((activity) => {
      const activityTypes = Array.isArray(activity.type)
        ? activity.type
        : [activity.type];
      return activityTypes.includes(tab);
    });

    renderActivities(filtered);
  }

  // Initial render
  renderActivities(activities);

  // Search functionality
  const searchInput = document.querySelector(".search-box input");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    if (searchTerm.length < 2) {
      renderActivities(activities);
      return;
    }

    const filtered = activities.filter(
      (activity) =>
        activity.title.toLowerCase().includes(searchTerm) ||
        activity.description.toLowerCase().includes(searchTerm) ||
        activity.subject.toLowerCase().includes(searchTerm)
    );

    renderActivities(filtered);
  });

  // Apply Filters
  const applyFiltersBtn = document.querySelector(".apply-filters");
  applyFiltersBtn.addEventListener("click", function () {
    const selectedSubjects = Array.from(
      document.querySelectorAll('input[name="subject"]:checked')
    ).map((el) => el.value);
    const selectedTypes = Array.from(
      document.querySelectorAll('input[name="type"]:checked')
    ).map((el) => el.value);
    const selectedGrade = parseInt(gradeSlider.value);

    const filtered = activities.filter((activity) => {
      // Filter by subject
      if (
        selectedSubjects.length > 0 &&
        !selectedSubjects.includes(activity.subject)
      ) {
        return false;
      }

      // Filter by type
      if (
        selectedTypes.length > 0 &&
        !(Array.isArray(activity.type)
          ? activity.type.some((t) => selectedTypes.includes(t))
          : selectedTypes.includes(activity.type))
      ) {
        return false;
      }

      // Filter by grade
    //   const gradeRange = activity.grades.split("-").map(Number);
    //   if (selectedGrade < gradeRange[0] || selectedGrade > gradeRange[1]) {
    //     return false;
    //   }

      return true;
    });

    renderActivities(filtered);
    filtersPanel.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Reset Filters
  const resetFiltersBtn = document.querySelector(".reset-filters");
  resetFiltersBtn.addEventListener("click", function () {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    gradeSlider.value = 9;
    selectedGrade.textContent = "9 კლასი";
  });

  // Sort functionality
  const sortSelect = document.getElementById("sort-by");
  sortSelect.addEventListener("change", function () {
    let sortedActivities = [...activities];

    switch (this.value) {
      case "newest":
        // Assuming newer activities have higher IDs
        sortedActivities.sort((a, b) => b.id - a.id);
        break;
      case "deadline":
        // This would need actual date objects in a real implementation
        sortedActivities.sort((a, b) => a.deadline.localeCompare(b.deadline));
        break;
      case "popular":
      default:
        // Sort by badge presence (just for demo)
        sortedActivities.sort((a, b) => {
          if (a.badge === "პოპულარული") return -1;
          if (b.badge === "პოპულარული") return 1;
          if (a.badge === "ახალი") return -1;
          if (b.badge === "ახალი") return 1;
          return 0;
        });
    }

    renderActivities(sortedActivities);
  });
});


// Add click event listeners to details buttons
function setupDetailsButtons() {
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the activity ID from the card (you'll need to add data-id to your cards)
            const card = this.closest('.activity-card');
            const activityId = card.dataset.id;
            
            // Redirect to details page with activity ID
            window.location.href = `details.html?id=${activityId}`;
        });
    });
}

// Call this function after rendering activities
// Add this to your renderActivities function after grid.appendChild(card):
// setupDetailsButtons();

// Update your renderActivities function to include data-id attribute:
function renderActivities(activitiesToRender) {
    const grid = document.getElementById("activity-grid");
    grid.innerHTML = "";

    activitiesToRender.forEach((activity) => {
        const card = document.createElement("article");
        card.className = "activity-card";
        card.dataset.id = activity.id; // Add this line
        card.innerHTML = `
            <!-- rest of your card HTML -->
        `;
        grid.appendChild(card);
    });
    
    setupDetailsButtons(); // Add this line
}