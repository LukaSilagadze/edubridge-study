document.addEventListener("DOMContentLoaded", function() {
    // Get activity ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');
    
    // Sample activity data (in a real app, this would come from an API)
    const activities = [
        {
            id: 1,
            title: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
            type: "გაეროს მოდელირება",
            subject: "დებატები",
            age: "13-24 წლის",
            deadline: "25 ივნისი, 2025",
            date: "15-20 აგვისტო, 2025",
            location: "ნიუ იორკი, აშშ",
            price: "$4800",
            description: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება არის პრესტიჟული ღონისძიება, რომელიც აერთიანებს ახალგაზრდებს მთელი მსოფლიოდან. მონაწილეები მიიღებენ გაეროს სხვადასხვა კომიტეტების სიმულაციებში, განავითარებენ დებატების, კრიტიკული აზროვნების და დიპლომატიურ უნარებს. ღონისძიება მოიცავს სემინარებს, ოფიციალურ სადილებს და კულტურულ პროგრამებს.",
            image: "./images/munnyc2025.png",
            badge: "ახალი",
            link: "https://forms.gle/GHzuzQ1E4bY356cy6",
            schedule: [
                { date: "15 აგვისტო", event: "რეგისტრაცია და გახსნის ცერემონია" },
                { date: "16 აგვისტო", event: "კომიტეტების პირველი სესიები" },
                { date: "17 აგვისტო", event: "საერთაშორისო საღამო" },
                { date: "18 აგვისტო", event: "დებატების ინტენსიური დღე" },
                { date: "19 აგვისტო", event: "დახურვის ცერემონია და დიპლომების გადაცემა" }
            ],
            requirements: [
                "ინგლისური ენის კარგი ცოდნა",
                "16-24 წლის ასაკი",
                "მონაწილეობის მოწონება სკოლის/უნივერსიტეტის მხრიდან",
                "შევსებული რეგისტრაციის ფორმა",
                "მოტივაციური წერილი"
            ],
            organizer: {
                name: "Global MUN Foundation",
                description: "არასამთავრობო ორგანიზაცია, რომელიც მუშაობს ახალგაზრდული დიპლომატიის განვითარებაზე",
                logo: "./images/gmuna.jpg",
                website: "https://globalmun.org"
            }
        },
        {
            id: 2,
            title: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
            type: "გაეროს მოდელირება",
            subject: "დებატები",
            age: "14-25 წლის",
            deadline: "30 ივნისი, 2025",
            date: "12-16 აგვისტო, 2025",
            location: "თბილისი, საქართველო",
            price: "70 ლარი",
            description: "ისტორიული კრიზისების კომიტეტის სიმულაცია არის უნიკალური შესაძლებლობა მონაწილეებისთვის, განივითარონ კრიტიკული აზროვნება და გადაწყვეტილების მიღების უნარები ისტორიულ კონტექსტში. მონაწილეები იღებენ როლებს ისტორიულ პიროვნებებში და ცდილობენ ალტერნატიული ისტორიის შექმნას. ღონისძიება მოიცავს სემინარებს, სიმულაციებს და ექსპერტების ლექციებს.",
            image: "./images/HccSimulation2025.png",
            badge: "ახალი",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform",
            schedule: [
                { date: "12 აგვისტო", event: "რეგისტრაცია და ორიენტაცია" },
                { date: "13 აგვისტო", event: "ისტორიული კონტექსტის შესწავლა" },
                { date: "14 აგვისტო", event: "სიმულაციის პირველი დღე" },
                { date: "15 აგვისტო", event: "სიმულაციის მეორე დღე" },
                { date: "16 აგვისტო", event: "დასკვნები და დახურვის ცერემონია" }
            ],
            requirements: [
                "ისტორიისადმი ინტერესი",
                "14-25 წლის ასაკი",
                "დებატების ძირითადი უნარები",
                "შევსებული რეგისტრაციის ფორმა"
            ],
            organizer: {
                name: "საქართველოს გაეროს მოდელირების ასოციაცია",
                description: "ორგანიზაცია, რომელიც ხელს უწყობს ახალგაზრდული დიპლომატიის განვითარებას საქართველოში",
                logo: "./images/gmuna.jpg",
                website: "https://gmun.ge"
            }
        },
        {
            id: 3,
            title: "SDG საზაფხულო ბანაკი ბაკურიანში",
            type: "საზაფხულო ბანაკი",
            subject: "გაერთიანებული ერების მდგრადი განვითარების მიზნები",
            age: "14-25 წლის",
            deadline: "30 ივლისი, 2025",
            date: "12-16 აგვისტო, 2025",
            location: "ბაკურიანი, საქართველო",
            price: "670 ლარი",
            description: "SDG საზაფხულო ბანაკი ბაკურიანში არის უნიკალური საგანმანათლებლო პროგრამა, რომელიც ორიენტირებულია გაერთიანებული ერების მდგრადი განვითარების მიზნებზე. მონაწილეები მიიღებენ ლექციებს, სემინარებს და ვორქშოპებს გარემოსდაცვითობაზე, სოციალურ სამართლიანობაზე და ეკონომიკურ განვითარებაზე. პროგრამა ასევე მოიცავს სათავგადასავლო აქტივობებს და გუნდურ თამაშებს ბაკურიანის მშვენიერ ბუნებაში.",
            image: "./images/SDGCampBakuriani.png",
            badge: "ახალი",
            link: "https://forms.gle/oo1qrc5nGAqWgVez6",
            schedule: [
                { date: "12 აგვისტო", event: "ჩამოსვლა და ორიენტაცია" },
                { date: "13 აგვისტო", event: "SDG-ების შესავალი და გუნდური აქტივობები" },
                { date: "14 აგვისტო", event: "სათავგადასავლო დღე და გარემოსდაცვითი პროექტები" },
                { date: "15 აგვისტო", event: "სოციალური პროექტების შემუშავება" },
                { date: "16 აგვისტო", event: "პროექტების პრეზენტაცია და დახურვის ცერემონია" }
            ],
            requirements: [
                "ინტერესი მდგრადი განვითარების მიმართულებით",
                "14-25 წლის ასაკი",
                "გუნდში მუშაობის უნარი",
                "შევსებული რეგისტრაციის ფორმა"
            ],
            organizer: {
                name: "EduBridge",
                description: "საგანმანათლებლო აქტივობების პლატფორმა",
                logo: "./images/logo1.png",
                website: "https://edubridge.ge"
            }
        }
    ];
    
    // Find the selected activity
    const selectedActivity = activities.find(activity => activity.id === parseInt(activityId));
    
    // If activity found, display its details
    if (selectedActivity) {
        displayActivityDetails(selectedActivity);
        displaySimilarActivities(selectedActivity);
    } else {
        // Redirect to discover page if activity not found
        window.location.href = "./discover.html";
    }
    
    // Function to display activity details
    function displayActivityDetails(activity) {
        // Set main activity image and badge
        document.getElementById("activity-main-image").src = activity.image;
        document.getElementById("activity-main-image").alt = activity.title;
        
        if (activity.badge) {
            document.getElementById("activity-badge").textContent = activity.badge;
            document.getElementById("activity-badge").style.display = "block";
        } else {
            document.getElementById("activity-badge").style.display = "none";
        }
        
        // Set activity title
        document.getElementById("activity-title").textContent = activity.title;
        
        // Set meta information
        document.getElementById("activity-date").textContent = activity.date;
        document.getElementById("activity-location").textContent = activity.location;
        document.getElementById("activity-age").textContent = activity.age;
        document.getElementById("activity-type").textContent = activity.type;
        document.getElementById("activity-subject").textContent = activity.subject;
        
        // Set price and deadline
        document.getElementById("activity-price").textContent = activity.price;
        document.getElementById("activity-deadline").textContent = activity.deadline;
        
        // Set description
        document.getElementById("activity-description").textContent = activity.description;
        
        // Set registration link
        document.getElementById("register-link").href = activity.link;
        
        // Set schedule
        const scheduleContainer = document.getElementById("schedule-items");
        scheduleContainer.innerHTML = "";
        
        activity.schedule.forEach(item => {
            const scheduleItem = document.createElement("div");
            scheduleItem.className = "schedule-item";
            scheduleItem.innerHTML = `
                <span class="schedule-date">${item.date}</span>
                <span class="schedule-event">${item.event}</span>
            `;
            scheduleContainer.appendChild(scheduleItem);
        });
        
        // Set requirements
        const requirementsList = document.getElementById("requirements-list");
        requirementsList.innerHTML = "";
        
        activity.requirements.forEach(req => {
            const reqItem = document.createElement("li");
            reqItem.textContent = req;
            requirementsList.appendChild(reqItem);
        });
        
        // Set organizer info
        document.getElementById("organizer-logo").src = activity.organizer.logo;
        document.getElementById("organizer-logo").alt = activity.organizer.name + " Logo";
        document.getElementById("organizer-name").textContent = activity.organizer.name;
        document.getElementById("organizer-description").textContent = activity.organizer.description;
        document.getElementById("organizer-website").href = activity.organizer.website;
    }
    
    // Function to display similar activities (excluding the current one)
    function displaySimilarActivities(currentActivity) {
        const similarContainer = document.getElementById("similar-activities-grid");
        similarContainer.innerHTML = "";
        
        // Filter activities by same type (excluding current activity)
        const similarActivities = activities.filter(activity => 
            activity.type === currentActivity.type && activity.id !== currentActivity.id
        );
        
        // If no similar activities by type, show random activities
        const activitiesToShow = similarActivities.length > 0 ? 
            similarActivities : 
            activities.filter(activity => activity.id !== currentActivity.id);
        
        // Display up to 3 similar activities
        activitiesToShow.slice(0, 3).forEach(activity => {
            const activityCard = document.createElement("div");
            activityCard.className = "similar-activity-card";
            activityCard.innerHTML = `
                <div class="similar-activity-image">
                    <img src="${activity.image}" alt="${activity.title}" loading="lazy">
                </div>
                <div class="similar-activity-content">
                    <h3 class="similar-activity-title">${activity.title}</h3>
                    <div class="similar-activity-meta">
                        <div><i class="fas fa-calendar-alt"></i> ${activity.date}</div>
                        <div><i class="fas fa-map-marker-alt"></i> ${activity.location}</div>
                    </div>
                    <a href="./details.html?id=${activity.id}" class="similar-activity-btn">დეტალები</a>
                </div>
            `;
            similarContainer.appendChild(activityCard);
        });
    }
});