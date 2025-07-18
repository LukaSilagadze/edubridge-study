document.addEventListener("DOMContentLoaded", function () {
  // Get activity ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const activityId = urlParams.get("id");

  // Sample activity data (in a real app, this would come from an API)
  const activities = [
    {
      id: 1,
      title: "ნიუ იორკის საერთაშორისო გაეროს მოდელირება",
      type: "გაეროს მოდელირება",
      subject: "დებატები",
      age: "13-24 წლამდე",
      deadline: "30 ივლისი, 2025",
      date: "1 ნოემბერი, 2025",
      location: "ნიუ იორკი, აშშ",
      price: "$4800",
      description: `საქართველოს გაეროს მოდელირების ასოციაცია იწყებს მონაწილეების შერჩევას ნიუ-იორკის საერთაშორისო გაეროს მოდელირების პროექტში მონაწილეობისათვის!
🌍 მსოფლიოს სხვადასხვა კუთხიდან ასობით ახალგაზრდა ლიდერი ერთიანდება გაეროს მოდელირების (Model UN) პროექტებზე, რათა:
✔️ გაიუმჯობესონ მოლაპარაკებებისა და საჯარო გამოსვლების უნარები
✔️ განივითარონ ლიდერული და დელეგატური თვისებები
✔️ უკეთ გაეცნონ გაეროს სტრუქტურასა და მუშაობის პრინციპებს
✔️ მიიღონ საერთაშორისო გამოცდილება და გააღრმავონ პროფესიული უნარები
✔️ დაამყარონ მეგობრული ურთიერთობები თანატოლებთან მთელი მსოფლიოდან
📍 საქართველოს გაეროს მოდელირების ასოციაცია (Georgian MUN Association) უფლებამოსილია წარადგინოს საქართველოს ოფიციალური დელეგაცია გაეროს შტაბ-ბინაში, ნიუ-იორკში.

📌 პროექტის ძირითადი დეტალები:

თარიღი: 2025 წლის ნოემბერი
ასაკი: 13-დან 24 წლამდე
სამუშაო ენა: ინგლისური
Dress Code: ოფიციალური

პროექტის ღირებულება: 4800 აშშ დოლარი

💼 ფასი მოიცავს შემდეგს:
🔹 პროექტში მონაწილეობის საფასური
🔹 მოსამზადებელი ტრენინგები
🔹 ორმხრივი ავიაბილეთი და ბარგი
🔹 საცხოვრებელი უზრუნველყოფა
🔹 სოციალური და კულტურული საღამოები
🔹 ტურები და ექსკურსიები
🔹 მონაწილეობის სერტიფიკატი
🔹 სავიზო მომსახურება და მოსაკრებელი
🔹 ორგანიზებული გამყოლის მომსახურება

📋 მონაწილეობის მსურველებმა გთხოვთ შეავსოთ სააპლიკაციო ფორმა შემდეგ ბმულზე:
🔗 https://forms.gle/GHzuzQ1E4bY356cy6
⏳ შევსების ბოლო ვადაა – 30 ივლისი 2025.`,
      image: "./images/munnyc2025.png",
      badge: "ახალი",
      link: "https://forms.gle/GHzuzQ1E4bY356cy6",
      schedule: [
        { date: "15 აგვისტო", event: "რეგისტრაცია და გახსნის ცერემონია" },
        { date: "16 აგვისტო", event: "კომიტეტების პირველი სესიები" },
        { date: "17 აგვისტო", event: "საერთაშორისო საღამო" },
        { date: "18 აგვისტო", event: "დებატების ინტენსიური დღე" },
        {
          date: "19 აგვისტო",
          event: "დახურვის ცერემონია და დიპლომების გადაცემა",
        },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "თბილისი, საქართველო",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "Georgian Model United Nations Association (GMUNA)",
        description:
          "არასამთავრობო ორგანიზაცია, რომელიც მუშაობს ახალგაზრდული დიპლომატიის განვითარებაზე",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
    {
      id: 2,
      title: "ისტორიული კრიზისების კომიტეტის სიმულაცია",
      type: "გაეროს მოდელირება",
      subject: "დებატები",
      age: "14-25 წლამდე",
      deadline: "25 ივლისი, 2025",
      date: "2 - 3 - 4 აგვისტო, 2025",
      location: "თბილისი, საქართველო",
      price: "70 ლარი",
      description: `🇺🇳 HISTORICAL CRISIS COMMITTEE SIMULATION | TBILISI 2025

🎓საქართველოს გაეროს მოდელირების ასოციაცია იწყებს მონაწილეების შერჩევას „ისტორიული კრიზისების კომიტეტის“ (Historical Crisis Committee – HCC) სიმულაციისთვის, რომელიც ჩატარდება თბილისში, 2-3-4 აგვისტოს.

📜 „ისტორიული კრიზისების სიმულაცია“ – ეს არის პროექტი, რომელიც მონაწილეებს სამდღიანი ინტენსიური მუშაობის საშუალებას აძლევს, სადაც ისინი ისტორიულ გარემოში აღმოჩნდებიან და იმ დროის მოვლენებზე რეაგირებენ, როგორც ისტორიული ფიგურები.

🔵 მონაწილეები იღებენ კონკრეტული ისტორიული პიროვნებების როლებს (ლიდერები, დიპლომატები, სამხედრო ფიგურები) და კრიზისის გუნდის მიერ შემოთავაზებული დინამიკური სცენარების საფუძველზე იღებენ მყისიერ და სტრატეგიულ გადაწყვეტილებებს.

📍 დღე 1 – მონაწილეები იღებენ როლებს და იწყებენ ისტორიული სცენარის გაცნობას. იგეგმება სესია და პირველი რეაგირება შექმნილ ვითარებაზე.
📍 დღე 2 – დელეგატები მონაწილეობენ მოლაპარაკებებსა და დებატებში. იწყება საერთო გადაწყვეტილებების ჩამოყალიბება და კომუნიკეს შედგენა.
📍 დღე 3 – გენერალური შეკრება: თითოეული გუნდი წარადგენს კომუნიკეს, განიხილავს და დაიცავს საკუთარ სტრატეგიას და გადაწყვეტილებებს. გაიმართება კენჭისყრა.
📜 დაჯილდოვება: მონაწილეებს გადაეცემათ მონაწილეობის დამადასტურებელი სერთიფიკატი.

○| თარიღი: 2 - 3 - 4 აგვისტო
○| ასაკი: 14-25
○| სამუშაო ენა: ინგლისური
○| Dress Code: ოფიციალური

💵 პროექტში მონაწილეობის საფასური 70 ლარი.

მონაწილეობის მსურველებმა გთხოვთ შეავსოთ შემდეგი სააპლიკაციო ფორმა:

https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform

ისტორიული კრიზისების სიმულაცია თბილისი 2025 – ზაფხულის სესია

შევსების ბოლო ვადა: 25 ივლისი

⭕ შენიშვნა: თითოეული აპლიკანტი მონაწილეობის საფასურს იხდის მხოლოდ იმ შემთხვევაში, თუ ის გაივლის შესარჩევ ეტაპს. შერჩევის შემდეგ, თუ მონაწილე საკუთარი სურვილით გადაიფიქრებს პროექტში მონაწილეობას, გადახდილი თანხა უკან არ დაუბრუნდება.

სხვა რეგიონებიდან & ქალაქებიდან მონაწილეობის მსურველი ახალგაზრდებისთვის – მონაწილეობის საფასურში არ შედის განთავსება & ტრანსპორტირება.

გელოდებით ისტორიის ყველაზე დინამიურ სიმულაციაში 🩵`,
      image: "./images/HccSimulation2025.png",
      badge: "ახალი",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform",
      schedule: [
        { date: "12 აგვისტო", event: "რეგისტრაცია და ორიენტაცია" },
        { date: "13 აგვისტო", event: "ისტორიული კონტექსტის შესწავლა" },
        { date: "14 აგვისტო", event: "სიმულაციის პირველი დღე" },
        { date: "15 აგვისტო", event: "სიმულაციის მეორე დღე" },
        { date: "16 აგვისტო", event: "დასკვნები და დახურვის ცერემონია" },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "თბილისი, საქართველო",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "საქართველოს გაეროს მოდელირების ასოციაცია",
        description:
          "ორგანიზაცია, რომელიც ხელს უწყობს ახალგაზრდული დიპლომატიის განვითარებას საქართველოში",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
    {
      id: 3,
      title: "SDG საზაფხულო ბანაკი ბაკურიანში",
      type: "საზაფხულო ბანაკი",
      subject: "SDG სამუშაო პროცესი",
      age: "14-25 წლამდე",
      deadline: "30 ივლისი, 2025",
      date: "12-16 აგვისტო, 2025",
      location: "ბაკურიანი, საქართველო",
      price: "670 ლარი",
      description: `SDG საზაფხულო ბანაკი ბაკურიანში ⛱️☀️

საქართველოს გაეროს მოდელირების ასოციაცია, იწყებს მონაწილეების შერჩევას „SDG Camp bakuriani “-ის სესიისთვის.

პროექტი მოიცავს SDG სამუშაო პროცესს, თეორიულ და პრაქტიკულ სესიებს, ასევე სპორტულ აქტივობას და დასვენებას. 

ბოლო დღეს სერთიფიკატების გადაცემის ცერემონიის შემდეგ იქნება დახურვის წვეულება.

⛱️ SDG მოდელირება — ეს არის პროექტი, რომლის ფარგლებშიც ახალგაზრდები მუშაობენ საკომიტეტო ჯგუფებში და თანმიმდევრულად იკვლევენ, განიხილავენ და აანალიზებენ მდგრადი განვითარების მიზნებთან (SDG) დაკავშირებულ გლობალურ და ადგილობრივ პრობლემებს.

⛱️ მთელი მსოფლიოს მასშტაბით ახალგაზრდა ლიდერები აქტიურად არიან ჩართულნი მოდელირების საერთაშორისო პროექტებში, რაც მათ საშუალებას აძლევს:

🗝️ გაიუმჯობესონ მოლაპარაკებისა და საჯარო გამოსვლების უნარები;
🗝️ გაიღრმავონ ლიდერული თვისებები;
🗝️ ახლოს გაიცნონ გაეროს მუშაობის პრინციპები
🗝️ მიიღონ მეტი პრაქტიკული გამოცდილება;
🗝️ გაიუმჯობესონ გუნდური მუშაობის უნარები
🗝️ იმსჯელონ და გაეცნონ ისეთ მნიშვნელოვან თემებს, რომელიც დღეს მსოფლიო განრიგშია.
🗝️ გაეცნონ და დაუახლოვდნენ სხვა და სხვა პროფესიებს

📜 მონაწილეებს გადაეცემათ მონაწილეობის დამადასტურებელი სერთიფიკატი.

პროექტის საფასური - 670 ლარი 

რომელიც ფარავს

🌐 მგზავრობა - თბილისი|ბაკურიანი|თბილისი
🌐 განთავსება 5 დღის განმავლობაში
🌐 სამჯერადი კვება
🌐 მოდელირებაში მონაწილეობა
🌐 ინვენტარს 
🌐 სამაგიდო თამაშებს
🌐 ფოტოგრაფის მომსახურებას 
🌐 საკანცელარიო ნივთებისა
🌐 სერთიფიკატების საფასურს 

○| თარიღი: 12-16 აგვისტო
○| ასაკი: 14-25
○| სამუშაო ენა: ქართული
○| Dress Code: ოფიციალური

მონაწილეობის მსურველებმა გთხოვთ შეავსოთ შემდეგი სააპლიკაციო ფორმა:

https://forms.gle/oo1qrc5nGAqWgVez6

შევსების ბოლო ვადა: 30 ივლისი`,
      image: "./images/SDGCampBakuriani.png",
      badge: "ახალი",
      link: "https://forms.gle/oo1qrc5nGAqWgVez6",
      schedule: [
        { date: "12 აგვისტო", event: "ჩამოსვლა და ორიენტაცია" },
        {
          date: "13 აგვისტო",
          event: "SDG-ების შესავალი და გუნდური აქტივობები",
        },
        {
          date: "14 აგვისტო",
          event: "სათავგადასავლო დღე და გარემოსდაცვითი პროექტები",
        },
        { date: "15 აგვისტო", event: "სოციალური პროექტების შემუშავება" },
        {
          date: "16 აგვისტო",
          event: "პროექტების პრეზენტაცია და დახურვის ცერემონია",
        },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "თბილისი, საქართველო",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "საქართველოს გაეროს მოდელირების ასოციაცია",
        description:
          "ორგანიზაცია, რომელიც ხელს უწყობს ახალგაზრდული დიპლომატიის განვითარებას საქართველოში",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
  ];

  // Find the selected activity
  const selectedActivity = activities.find(
    (activity) => activity.id === parseInt(activityId)
  );

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
    document.getElementById("activity-location").textContent =
      activity.location;
    document.getElementById("activity-age").textContent = activity.age;
    document.getElementById("activity-type").textContent = activity.type;
    document.getElementById("activity-subject").textContent = activity.subject;

    // Set price and deadline
    document.getElementById("activity-price").textContent = activity.price;
    document.getElementById("activity-deadline").textContent =
      activity.deadline;

    // Set description
    document.getElementById("activity-description").textContent =
      activity.description;

    // Set registration link
    document.getElementById("register-link").href = activity.link;

    // Set schedule
    const scheduleContainer = document.getElementById("schedule-items");
    scheduleContainer.innerHTML = "";

    activity.schedule.forEach((item) => {
      const scheduleItem = document.createElement("div");
      scheduleItem.className = "schedule-item";
      scheduleItem.innerHTML = `
                <span class="schedule-date">${item.date}</span>
                <span class="schedule-event">${item.event}</span>
            `;
      scheduleContainer.appendChild(scheduleItem);
    });

    // Set contact information
    const contactContainer = document.getElementById("contact-info");
    contactContainer.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span class="contact-label">Email:</span>
            <span class="contact-value">
                <a href="mailto:${activity.contact.email}">${activity.contact.email}</a>
            </span>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span class="contact-label">ტელეფონი:</span>
            <div class="contact-value">
                ${activity.contact.phones.map(phone => `
                    <div class="phone-number">
                        <a href="tel:${phone}">${phone}</a>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span class="contact-label">მისამართი:</span>
            <span class="contact-value">${activity.contact.address}</span>
        </div>
    `;

    // Add social media links if they exist
    if (activity.contact.social) {
        const socialLinksHTML = createSocialLinks(activity.contact.social);
        contactContainer.innerHTML += socialLinksHTML;
    }

    // Set organizer info
    document.getElementById("organizer-logo").src = activity.organizer.logo;
    document.getElementById("organizer-logo").alt =
      activity.organizer.name + " Logo";
    document.getElementById("organizer-name").textContent =
      activity.organizer.name;
    document.getElementById("organizer-description").textContent =
      activity.organizer.description;
    document.getElementById("organizer-website").href =
      activity.organizer.website;
  }

  // Function to display similar activities (excluding the current one)
  function displaySimilarActivities(currentActivity) {
    const similarContainer = document.getElementById("similar-activities-grid");
    similarContainer.innerHTML = "";

    // Filter activities by same type (excluding current activity)
    const similarActivities = activities.filter(
      (activity) =>
        activity.type === currentActivity.type &&
        activity.id !== currentActivity.id
    );

    // If no similar activities by type, show random activities
    const activitiesToShow =
      similarActivities.length > 0
        ? similarActivities
        : activities.filter((activity) => activity.id !== currentActivity.id);

    // Display up to 3 similar activities
    activitiesToShow.slice(0, 3).forEach((activity) => {
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

  // Helper function to create social media links
function createSocialLinks(socialMedia) {
    const platforms = [
        { key: 'facebook', icon: 'fab fa-facebook-f', label: 'Facebook' },
        { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
        { key: 'twitter', icon: 'fab fa-twitter', label: 'Twitter' },
        { key: 'linkedin', icon: 'fab fa-linkedin-in', label: 'LinkedIn' }
    ];

    let linksHTML = '<div class="contact-item social-media-item"><i class="fas fa-share-alt"></i><span class="contact-label">სოციალური ქსელები:</span><div class="social-links">';

    platforms.forEach(platform => {
        if (socialMedia[platform.key]) {
            let url = socialMedia[platform.key];
            // Handle Instagram usernames (if it's not a full URL)
            if (platform.key === 'instagram' && !url.startsWith('http')) {
                url = `https://instagram.com/${url.replace('@', '')}`;
            }
            
            linksHTML += `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link ${platform.key}" aria-label="${platform.label}">
                    <i class="${platform.icon}"></i>
                </a>
            `;
        }
    });

    linksHTML += '</div></div>';
    return linksHTML;
}});