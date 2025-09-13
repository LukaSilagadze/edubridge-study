document.addEventListener("DOMContentLoaded", function () {
  // Get activity ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const activityId = urlParams.get("id");

  // Sample activity data (in a real app, this would come from an API)
  const activities = [
    {
      id: 1,
      title: "New York International Model UN",
      type: "Model UN",
      subject: "Debates",
      age: "13-24 years old",
      deadline: "July 30, 2025",
      date: "November 1, 2025",
      location: "New York, USA",
      price: "$4800",
      description: `The Georgian Model UN Association is now accepting applications for the New York International Model UN Project!
🌍 Hundreds of young leaders from around the world are joining the Model UN project to:
✔️ Improve their negotiation and public speaking skills
✔️ Develop leadership and delegation skills
✔️ Learn more about the UN structure and working principles
✔️ Gain international experience and deepen their professional skills
✔️ Build friendships with peers from around the world
📍 The Georgian MUN Association is authorized to represent the official Georgian delegation at the UN Headquarters in New York.

📌 Main project details:

Date: November 2025
Age: 13 to 24
Working language: English
Dress Code: Formal

Project cost: 4800 USD

💼 The price includes the following:

🔹 Project participation fee
🔹 Preparatory trainings
🔹 Round-trip airfare and luggage
🔹 Accommodation
🔹 Social and cultural evenings
🔹 Tours and excursions
🔹 Certificate of participation
🔹 Visa services and fees
🔹 Organized escort services

📋 Those wishing to participate, please fill out the application form at the following link:
🔗 https://forms.gle/GHzuzQ1E4bY356cy6
⏳ The deadline for filling out is July 30, 2025.`,
      image: "./images/munnyc2025.png",
      badge: "ახალი",
      link: "https://forms.gle/GHzuzQ1E4bY356cy6",
      schedule: [
        { date: "15 august", event: "Registration and opening ceremony" },
        { date: "16 august", event: "Committee's first sessions" },
        { date: "17 august", event: "International evening" },
        { date: "18 august", event: "Intensive debate day" },
        {
          date: "19 august",
          event: "Closing ceremony and diploma presentation",
        },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "Tbilisi, Georgia",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "Georgian Model United Nations Association (GMUNA)",
        description:
          "Non-governmental organization working on the development of youth diplomacy in Georgia",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
    {
      id: 2,
      title: "Simulation of the Historical Crises Committee",
      type: "UN Simulation",
      subject: "Debates",
      age: "14-25 years old",
      deadline: "July 25, 2025",
      date: "August 2 - 4, 2025",
      location: "Tbilisi, Georgia",
      price: "70 GEL",
      description: `🇺🇳 HISTORICAL CRISIS COMMITTEE SIMULATION | TBILISI 2025

🎓The Georgian UN Modeling Association is starting to select participants for the “Historical Crisis Committee – HCC” simulation, which will be held in Tbilisi on August 2-3-4.

📜 “Historical Crisis Simulation” is a project that provides participants with three days of intensive work, where they find themselves in a historical environment and react to the events of that time as historical figures.

🔵 Participants take on the roles of specific historical figures (leaders, diplomats, military figures) and make immediate and strategic decisions based on dynamic scenarios proposed by the crisis team.

📍 Day 1 – Participants take on roles and begin to familiarize themselves with the historical scenario. A session and first response to the situation are planned.
📍 Day 2 – Delegates participate in negotiations and debates. The process of formulating common decisions and drafting a communiqué begins.
📍 Day 3 – General Assembly: Each team will present a communiqué, discuss and defend its own strategy and decisions. A vote will be held.
📜 Awards: Participants will be awarded a certificate of participation.

○| Date: 2 - 3 - 4 August
○| Age: 14-25
○| Working language: English
○| Dress Code: Formal

💵 Participation fee in the project is 70 GEL.

Those wishing to participate, please fill out the following application form:

https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform

Historical Crisis Simulation Tbilisi 2025 – Summer Session

Deadline for submission: July 25

⭕ Note: Each applicant pays the participation fee only if he/she passes the selection stage. After selection, if the participant changes his/her mind about participating in the project, the amount paid will not be refunded.

For young people wishing to participate from other regions & cities – the participation fee does not include accommodation & transportation.

We are waiting for you in the most dynamic simulation of history 🩵`,
      image: "./images/HccSimulation2025.png",
      badge: "New",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfAgERXVPV1b2Z1nstVDdrs57NbyfnCNkGz_r3z-nOCBYEzSQ/viewform",
      schedule: [
        { date: "12 august", event: "Registration and Orientation" },
        { date: "13 august", event: "Study of Historical Context" },
        { date: "14 august", event: "First Day of Simulation" },
        { date: "15 august", event: "Second Day of Simulation" },
        { date: "16 august", event: "Conclusions and Closing Ceremony" },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "Tbilisi, Georgia",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "Georgian Model United Nations Association (GMUNA)",
        description:
          "Organization that promotes the development of youth diplomacy in Georgia",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
    {
      id: 3,
      title: "SDG Summer Camp in Bakuriani",
      type: "camp",
      subject: "SDG Working Process",
      age: "14-25",
      deadline: "July 30, 2025",
      date: "August 12-16, 2025",
      location: "Bakuriani, Georgia",
      price: "670 GEL",
      description: `SDG Summer Camp in Bakuriani ⛱️☀️

The Georgian Model UN Association is starting to select participants for the “SDG Camp Bakuriani” session.

The project includes SDG work process, theoretical and practical sessions, as well as sports activities and relaxation.

On the last day, there will be a closing party after the certificate presentation ceremony.

⛱️ SDG Modeling is a project in which young people work in committee groups and consistently research, discuss and analyze global and local problems related to the Sustainable Development Goals (SDGs).

⛱️ Young leaders from all over the world are actively involved in international modeling projects, which allow them to:

🗝️ Improve their negotiation and public speaking skills;
🗝️ Deepen their leadership qualities;
🗝️ Get to know the principles of the UN work closely
🗝️ Gain more practical experience;
🗝️ Improve teamwork skills
🗝️ Discuss and learn about important topics that are on the world agenda today.
🗝️ Get to know and get closer to different professions

📜 Participants will be awarded a certificate of participation.

Project fee - 670 GEL

Which covers

🌐 Travel - Tbilisi|Bakuriani|Tbilisi
🌐 Accommodation for 5 days
🌐 Three meals a day
🌐 Participation in modeling
🌐 Inventory
🌐 Board games
🌐 Photographer's services
🌐 Stationery
🌐 Certificates

○| Date: August 12-16
○| Age: 14-25
○| Working language: Georgian
○| Dress Code: Formal

Those wishing to participate please complete the following application form:

https://forms.gle/oo1qrc5nGAqWgVez6

Deadline: July 30`,
      image: "./images/SDGCampBakuriani.png",
      badge: "New",
      link: "https://forms.gle/oo1qrc5nGAqWgVez6",
      schedule: [
        { date: "12 august", event: "Arrival and orientation" },
        {
          date: "13 august",
          event: "Introduction to the SDGs and team activities",
        },
        {
          date: "14 august",
          event: "Adventure day and environmental projects",
        },
        { date: "15 august", event: "Development of social projects" },
        {
          date: "16 august",
          event: "Presentation of projects and closing ceremony",
        },
      ],
      contact: {
        email: "georgianmuna@gmail.com",
        phones: ["+995 555 12 34 56", "+995 577 98 76 54"],
        address: "Tbilisi, Georgia",
        social: {
          facebook: "https://facebook.com/georgianMUN",
          instagram: "georgianmuna_official",
        },
      },
      organizer: {
        name: "Georgian Model United Nations Association (GMUNA)",
        description:
          "An organization that promotes the development of youth diplomacy in Georgia",
        logo: "./images/gmuna.jpg",
        website: "https://www.facebook.com/georgianMUN",
      },
    },
    {
      id: 4,
      title: "Logos Summer School on Lisi",
      type: "camp",
      subject: "Summer School",
      age: "5-12 years old",
      deadline: "July 30, 2025",
      date: "Summer 2025",
      location: "Tbilisi, Georgia",
      price: "130-515 Euro",
      description: `☀️ Logos Summer School – for I-VI grade students and preschool groups
📍 In the ecologically clean environment of Lisi

🔹 If you want your child's summer to be:
✅ Educational
✅ Fun
✅ Safe and active
We invite you to the Logos Summer School. 🧡

📅 Duration and time:
🕙 Every day 10:00 – 18:00
🍽 Two meals

📌 You can choose:

Full – 1 month program or the desired number of weeks.

🔵 One week fee -145 euros

💸 Discounts apply if you choose several weeks.

2 weeks – 275 euros

3 weeks – 395 euros

4 weeks – 515 euros

Fee for Logos residents:

🟠 One week fee - 130 euros

💸 Discounts apply if you choose several weeks:

2 weeks – 250 euros

3 weeks – 360 euros

4 weeks – 470 euros

👦👧 Age:

The program is designed for children aged 5 – 12
📚 Students will be divided according to age groups

🎨 Activities at the summer school:

📖 Literature

🗣 English language

🧠 Fun math

🎨 Art therapy

⚽️ Sports activities

🔬 Fun science

🧱 Programming

🌱 Gardening

👩‍🍳 Cooking

☎️For questions, contact us: Tamar Mikaberidze 577123292`,
      image: ["./images/gardening.png"],
      badge: "New",
      link: "https://logos.edu.ge/logosis_sazafxulo_skolashi_registracia/",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "info@logosi.org",
        phones: ["+995 577 12 32 92", "+995 577 68 07 88"],
        address: "Leo Kvachadze I Lane, 6, Tbilisi, Georgia",
        maps: "https://maps.app.goo.gl/j54AA75uKnv81z8W8",
        social: {
          facebook: "https://www.facebook.com/Logos.Edu.Ge",
          instagram: "logos_international_academy"
        },
      },
      organizer: {
        name: "საერთაშორისო აკადემია ლოგოსი • Logos International Academy",
        description:
          "",
        logo: "./images/logosi.jpg",
        website: "https://logos.edu.ge/",
      },
    },
    {
      id: 6,
      title: "Programming Alongside School",
      type: "course",
      subject: "Programming",
      age: "14-17 years old",
      deadline: "",
      date: "Twice a week",
      location: "Tbilisi, Georgia",
      price: "",
      description: `For more details, please visit the registration link: https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning`,
      image: [
  "./images/ItStep_1.png",
],
      badge: "",
      link: "https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "study@itstep.ge",
        phones: ["032 215 55 51"],
        address: "Tbilisi, Georgia",
        maps: "https://maps.app.goo.gl/fPYvWWrk667yJcaz8",
        social: {
          facebook: "https://www.facebook.com/itstep.ge",
          instagram: "itstep.ge"
        },
      },
      organizer: {
        name: "IT Academy Step Georgia",
        description:
          "The largest center for international transformational education in the field of IT - information technology. Develop while it's still time",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 7,
      title: "Junior IT Academy",
      type: "course",
      subject: "Programming",
      age: "9-13 years old",
      deadline: "",
      date: "Once a week, 2 hours",
      location: "Tbilisi, Georgia",
      price: "",
      description: `For more details, please visit the registration link: https://ge.itstep.org/junior-step-computer-academy-ge`,
      image: [
  "./images/ItStep_2.png",
],
      badge: "",
      link: "https://ge.itstep.org/junior-step-computer-academy-ge",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "study@itstep.ge",
        phones: ["032 215 55 51"],
        address: "Tbilisi, Georgia",
        maps: "https://maps.app.goo.gl/fPYvWWrk667yJcaz8",
        social: {
          facebook: "https://www.facebook.com/itstep.ge",
          instagram: "itstep.ge"
        },
      },
      organizer: {
        name: "IT Academy Step Georgia",
        description:
          "The largest center for international transformational education in the field of IT - information technology. Develop while it's still time",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 8,
      title: "Graphic Design Parallel to School",
      type: "course",
      subject: "Graphic Design",
      age: "14-17 years old",
      deadline: "",
      date: "Twice a week",
      location: "Tbilisi, Georgia",
      price: "",
      description: `For more details, please visit the registration link: https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning`,
      image: [
  "./images/ItStep_3.png",
],
      badge: "",
      link: "https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "study@itstep.ge",
        phones: ["032 215 55 51"],
        address: "თბილისი, საქართველო",
        maps: "https://maps.app.goo.gl/fPYvWWrk667yJcaz8",
        social: {
          facebook: "https://www.facebook.com/itstep.ge",
          instagram: "itstep.ge"
        },
      },
      organizer: {
        name: "IT Academy Step Georgia",
        description:
          "The largest center for international transformational education in the field of IT - information technology. Develop while it's still time",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 9,
      title: "Mountain Ski Club Extreme - Summer and Winter Camps",
      type: "camp",
      subject: "Camp",
      age: "6-14 years old",
      deadline: "",
      date: "10-day gathering",
      location: "Bakuriani, Georgia",
      price: "",
      description: `Since 2009, the Extreme Ski Club has been organizing 10-day winter and summer gatherings for children aged 6-14 in the town of Bakuriani.
Children will be provided
✅Transportation Tbilisi-Bakuriani-Tbilisi (by comfortable bus)
✅Accommodation
✅Three meals a day + seasonal fruits
✅ 6 experienced certified instructors
✅ First aid (medicines - by agreement with the parent
✅ Sports and cognitive games
✅ Hiking with overnight stay🏕
✅ Ski equipment in winter
✅ Cable car subscription
🟢 Summer gathering schedule:

✅ July 1-10 ⛱
✅ July 10-19 ⛱
✅ July 19-28 ⛱
✅ July 28 August 6 ⛱
✅ August 6-15 ⛱
✅ August 15-24 ⛱

❤ Plan your summer with us, choose the period you want, fill out the application and easily get to the unforgettable extreme gathering.

➡Summer gathering registration form:
🌐 https://forms.gle/Xnrae5GYvUVmptsU9

🟢 Winter Gathering Schedule:

🎿 December 20-December 29.⛷
🎿 January 2-January 11. ⛷
🎿 January 11-January 20. ⛷
🎿 January 20-January 29. ⛷
🎿 January 29-February 7. ⛷
🎿 February 7-February 16. ⛷
🎿 February 16-February 25. ⛷
🎿 February 25-March 6. ⛷
🎿 March 6-March 15. ⛷
🎿 March 15-March 24. ⛷

➡Winter Registration Form;
🌐 https://forms.gle/L9zWA6tBdT7AuAw2A
For more information, please contact us at the following numbers:

☎599713373
☎579718899`,
      image: [
  "./images/Xtreme.jpg",
],
      badge: "",
      link: "https://forms.gle/Xnrae5GYvUVmptsU9",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "sevikoabuladze@gmail.com",
        phones: ["599713373", "579718899"],
        address: "Bakuriani, Georgia",
        maps: "https://maps.app.goo.gl/adPrbB8Ug52LRx389",
        social: {
          facebook: "https://www.facebook.com/BAKURIANISKISCHOOl",
          instagram: "xtreme_skischool"
        },
      },
      organizer: {
        name: 'Mountain Ski Club "Extreme" Xtreme ski-school',
        description:
          "Group for learning to ski and snowboard, as well as organizing children's winter and summer camps in Bakuriani",
        logo: "./images/Xtreme.jpg",
        website: "https://www.facebook.com/BAKURIANISKISCHOOl",
      },
    },
    {
      id: 10,
      title: "International Education Fair LEAF Tbilisi / Batumi",
      type: "gallery",
      subject: "Gallery",
      age: "15-16+",
      deadline: "",
      date: "11/12 october, 2025",
      location: "Tbilisi / Batumi",
      price: "Free",
      description: `🎓 Want to study abroad but don't know where to start, how to choose a university, or how to secure funding?

LEAF's International Education Fair will be your guide

✔️You will be able to meet universities from all over the world in one place,

✔️Get the necessary information and plan your next steps,

✔️Learn all about financing options,

✔️Get answers to any questions related to studying abroad from LEAF's education consultants.

🔴Attendance is completely free and requires only registration: https://leaf.ge/leaf-fair-registration-2025/

Save the date:
📆October 11
🕛12:00 -17:00
📍Tbilisi, The Biltmore Tbilisi Hotel

📆October 12
🕛13:00 -18:00
📍Batumi, Radisson Blu Hotel Batumi

You will have the opportunity to personally meet representatives of international universities and receive comprehensive information about studying abroad.

🟢 At the LEAF International Education Fair, you can find the program of your choice:

✔️Bachelor's Degree
✔️Master's Degree
✔️Doctorate
✔️Online Programs
✔️Courses
✔️Summer Camps

🔴 At the fair, you will find a consulting space for those interested in the Fulbright, Chevening and Hungaricum scholarship programs.

So we are waiting for you!

Come to the fair and talk to representatives of the universities of your choice.`,
      image: [
  "./images/leaf_1.png",
],
      badge: "",
      link: "https://leaf.ge/leaf-fair-registration-2025/",
      schedule: [
        { date: "1", 
          event: "" },
        {
          date: "2",
          event: "",
        },
        {
          date: "3",
          event: "",
        },
        { date: "4", 
          event: "" 
        },
        {
          date: "5",
          event: "",
        },
      ],
      contact: {
        email: "info@leaf.ge",
        phones: ["+995 577 230464, 032 294 61 74"],
        address: "19 Gamrekeli St., Saburtalo, Tbilisi, Georgia",
        maps: "https://maps.app.goo.gl/adPrbB8Ug52LRx389",
        social: {
          facebook: "https://www.facebook.com/leaf.ge",
          instagram: "lifeinleaf"
        },
      },
      organizer: {
        name: 'LEAF [Liberal Enhanced Arts Foundation]',
        description:
          "",
        logo: "./images/LEAF.jpg",
        website: "https://leaf.ge/",
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
    const mainImage = document.getElementById("activity-main-image");
    // Use first image from images array, or fallback to image property
    if (activity.images && activity.images.length > 0) {
        mainImage.src = activity.images[0];
    } else {
        mainImage.src = activity.image;
    }
    mainImage.alt = activity.title;

    // Set main activity image and badge
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
          <span class="contact-value">
            <a href="${activity.contact.maps}" target="_blank" rel="noopener">
              ${activity.contact.address}
            </a>
          </span>
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
                    <div>
                      <h3 class="similar-activity-title">${activity.title}</h3>
                      <div class="similar-activity-meta">
                          <div><i class="fas fa-calendar-alt"></i> ${activity.date}</div>
                          <div><i class="fas fa-map-marker-alt"></i> ${activity.location}</div>
                      </div>
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