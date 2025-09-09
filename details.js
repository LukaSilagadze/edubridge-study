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

🔵 მონაწილეები იღებენ კონკრეტული ისტორიული პიროვნებების როლებს (ლიდერები, დიპლომატები, სამხედრო ფიგურები) და კრიზისის გუნდის მიერ შემოთავაზებული დინამიური სცენარების საფუძველზე იღებენ მყისიერ და სტრატეგიულ გადაწყვეტილებებს.

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
      type: "camp",
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
    {
      id: 4,
      title: "ლოგოსის საზაფხულო სკოლა ლისზე",
      type: "camp",
      subject: "საზაფხულო სკოლა",
      age: "5-12 წლამდე",
      deadline: "30 ივლისი, 2025",
      date: "ზაფხული 2025",
      location: "თბილისი, საქართველო",
      price: "130-515 ევრო",
      description: `☀️ ლოგოსის საზაფხულო სკოლა – I-VI კლასის მოსწავლეებისთვის და სკოლამდელთა ჯგუფისთვის
📍 ლისის ეკოლოგიურად სუფთა გარემოში

🔹 თუ გსურთ, რომ თქვენი შვილის ზაფხული იყოს:
✅ შემეცნებითი
✅ მხიარული
✅ უსაფრთხო და აქტიური
შემოგივერთდით ლოგოსის საზაფხულო სკოლაში. 🧡

📅 ხანგრძლივობა და დრო:
🕙 ყოველდღე 10:00 – 18:00
🍽 ორჯერადი კვება


📌 შეგიძლიათ აირჩიოთ:

სრული – 1 თვიანი პროგრამა ან სასურველი კვირების რაოდენობა.

 

🔵 ერთი კვირის საფასური -145 ევრო

💸 რამდენიმე კვირის არჩევის შემთხვევაში მოქმედებს ფასდაკლება.

2 კვირის შემთხვევაში – 275 ევრო

3 კვირის შემთხვევაში – 395 ევრო

4 კვირის შემთხვევაში – 515 ევრო

საფასური ლოგოსელებისთვის:

🟠 ერთი კვირის საფასური -130 ევრო

💸  რამდენიმე კვირის არჩევის შემთხვევაში მოქმედებს ფასდაკლება:

2 კვირის შემთხვევაში – 250 ევრო

3 კვირის შემთხვევაში – 360 ევრო

4 კვირის შემთხვევაში – 470 ევრო

 

👦👧 ასაკი:

პროგრამა განკუთვნილია 5 – 12 წლამდე ასაკის ბავშვებისთვის
📚 მოსწავლეები გადანაწილდებიან ასაკობრივი ჯგუფების მიხედვით

🎨 აქტივობები საზაფხულო სკოლაში:

📖 ლიტერატურა

🗣 ინგლისური ენა

🧠 სახალისო მათემატიკა

🎨 არტ-თერაპია

⚽️ სპორტული აქტივობები

🔬 მხიარული მეცნიერება

🧱 პროგრამირება

🌱 მებაღეობა

👩‍🍳 კულინარია

☎️კითხვების შემთხვევაში დაგვიკავშირდით: თამარ მიქაბერიძე 577123292`,
      image: ["./images/gardening.png"],
      badge: "ახალი",
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
        address: "ლეო კვაჭაძის I ჩიხი, 6, Tbilisi, Georgia",
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
      title: "პროგრამირება სკოლის პარალელურად",
      type: "course",
      subject: "პროგრამირების",
      age: "14-17 წლამდე",
      deadline: "",
      date: "კვირაში 2-ჯერ",
      location: "თბილისი, საქართველო",
      price: "",
      description: `დეტალების სანახავად გადადით სარეგისტრაციო ბმულზე: https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning`,
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
          "საერთაშორისო ტრანსფორმაციული განათლების უდიდესი ცენტრი, IT - ინფორმაციული ტექნოლოგიების დარგში. განვითარდი, სანამ დროა",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 7,
      title: "Junior IT აკადემია",
      type: "course",
      subject: "პროგრამირება",
      age: "9-13 წელი",
      deadline: "",
      date: "კვირაში 1 დღე, 2 საათი",
      location: "თბილისი, საქართველო",
      price: "",
      description: `დეტალების სანახავად გადადით სარეგისტრაციო ბმულზე: https://ge.itstep.org/junior-step-computer-academy-ge`,
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
          "საერთაშორისო ტრანსფორმაციული განათლების უდიდესი ცენტრი, IT - ინფორმაციული ტექნოლოგიების დარგში. განვითარდი, სანამ დროა",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 8,
      title: "გრაფიკული დიზაინი სკოლის პარალელურად",
      type: "course",
      subject: "გრაფიკული დიზაინი",
      age: "14-17 წლამდე",
      deadline: "",
      date: "კვირაში 2-ჯერ",
      location: "თბილისი, საქართველო",
      price: "",
      description: `დეტალების სანახავად გადადით სარეგისტრაციო ბმულზე: https://ge.itstep.org/p-ropesia-sk-olis-p-aralelurad#program_learning`,
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
          "საერთაშორისო ტრანსფორმაციული განათლების უდიდესი ცენტრი, IT - ინფორმაციული ტექნოლოგიების დარგში. განვითარდი, სანამ დროა",
        logo: "./images/it-step.png",
        website: "https://ge.itstep.org/",
      },
    },
    {
      id: 9,
      title: "სამთო სათხილამურო კლუბი იქსტრიმი",
      type: "camp",
      subject: "ბანაკი",
      age: "6-14 წლის",
      deadline: "",
      date: "10 დღიანი შეკრება",
      location: "ბაკურიანი, საქართველო",
      price: "",
      description: `სამთო სათხილამურო კლუბი იქსტრიმი  2009 წლიდან აწყობს 6-14 წლის ბავშვებისთვის ზამთრის და ზაფხულის 10 დღიან შეკრებებს დაბა ბაკურიანში.
ბავშვები უზრუნველყოფილნი იქნებიან
✅ ტრანსპორტირება თბილისი-ბაკურიანი-თბილისი (კომფორტული ავტობუსით)
✅ საცხოვრებელი
✅ სამჯერადი კვება+ სეზონური ხილი
✅ 6 გამოცდილი სერთიფიცირებული ინსტრუქტორი
✅ პირველადი დახმარება( მედიკამენტები- მშობელთან შეთანხმებით
✅ სპორტული და შემეცნებითი თამაშები
✅ ლაშქრობა ღამისთევით🏕
✅ ზამთარში სათხილამურო აღჭურვილობა
✅ საბაგიროს აბონიმენტი
🟢 ზაფხულის შეკრებების გრაფიკი:

✅ 1-10ივლისი ⛱
✅ 10-19 ივლისი ⛱
✅ 19-28 ივლისი⛱
✅  28 ივლისი 6 აგვისტო ⛱
✅  6-15  აგვისტო⛱
✅ 15-24 აგვისტო ⛱

❤ დაგეგმეთ ზაფხული ჩვენთან ერთად,     შეარჩიეთ თქვენთვის სასურველი პერიოდი, შეავსეთ აპლიკაცია და მოხვდით მარტივად იქსტრიმის დაუვიწყარ შეკრებაზე.

➡ზაფხულის შეკრებაზე რეგისტრაციის ფორმა:
🌐 https://forms.gle/Xnrae5GYvUVmptsU9

🟢 ზამთრის შეკრებების გრაფიკი:

🎿 20 დეკემბერი-29 დეკემბერი.⛷
🎿 2 იანვარი-11 იანვარი. ⛷
🎿 11 იანვარი- 20 იანვარი. ⛷
🎿 20 იანვარი- 29 იანვარი. ⛷
🎿 29 იანვარი-7 თებერვალი. ⛷
🎿 7 თებერვალი-16 თებერვალი. ⛷
🎿 16 თებერვალი-25 თებერვალი. ⛷
🎿 25 თებერვალი-6 მარტი. ⛷
🎿 6 მარტი-15 მარტი. ⛷
🎿 15 მარტი-24 მარტი. ⛷

➡ზამთრის რეგისტრაციის ფორმა;
🌐  https://forms.gle/L9zWA6tBdT7AuAw2A
დამატებითი ინფორმაციისათვის დაგვიკავდირდით შემდეგ ნომრებზე:

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
        address: "ბაკურიანი, საქართველო",
        maps: "https://maps.app.goo.gl/adPrbB8Ug52LRx389",
        social: {
          facebook: "https://www.facebook.com/BAKURIANISKISCHOOl",
          instagram: "xtreme_skischool"
        },
      },
      organizer: {
        name: 'სამთო-სათხილამურო კლუბი "იქსტრიმი" Xtreme ski-school ',
        description:
          "თხილამურზე სრიალის შემსწავლელი ჯგუფი",
        logo: "./images/Xtreme.jpg",
        website: "https://www.facebook.com/BAKURIANISKISCHOOl",
      },
    },
    {
      id: 10,
      title: "International Education Fair LEAF Tbilisi / Batumi",
      type: "galley",
      subject: "გამოფენა",
      age: "15-16+",
      deadline: "",
      date: "11/12 ოქტომბერი",
      location: "თბილისი / ბათუმი",
      price: "უფასო",
      description: `
🎓 საზღვარგარეთ სწავლა გინდა და არ იცი საიდან დაიწყო, როგორ შეარჩიო უნივერსიტეტი ან როგორ მოიპოვო დაფინანსება?

LEAF-ის განათლების საერთაშორისო გამოფენა შენი გზამკვლევი იქნება

✔️შენ შეძლებ ერთ სივრცეში შეხვდე უნივერსიტეტებს მთელი მსოფლიოდან,
✔️მიიღო საჭირო ინფორმაცია და დაგეგმო შემდეგი ნაბიჯები,
✔️შეიტყო დაფინანსების გზების შესახებ ყველაფერი,
✔️LEAF-ის განათლების კონსულტანტებისგან მიიღო საზღვარგარეთ სწავლასთან დაკავშირებულ ნებისმიერ კითხვაზე პასუხი.

🔴დასწრება სრულიად უფასოა და საჭიროებს მხოლოდ რეგისტრაციას:  https://leaf.ge/leaf-fair-registration-2025/

მოინიშნე თარიღი:
📆11 ოქტომბერი
🕛12:00 -17:00 სთ
📍თბილისი, The Biltmore Tbilisi Hotel


📆12 ოქტომბერი
🕛13:00 -18:00 სთ
📍ბათუმი,  Radisson Blu Hotel Batumi

შენ გეძლევა შესაძლებლობა პირადად შეხვდე საერთაშორისო უნივერსიტეტების წარმომადგენლებს და  მიიღო ამომწურავი ინფორმაცია საზღვარგარეთ სწავლის შესახებ.

🟢 LEAF-ის განათლების საერთაშორისო გამოფენაზე შეგიძლია აღმოაჩინო შენთვის სასურველი პროგრამა:

✔️ბაკალავრიატი
✔️მაგისტრატურა
✔️დოქტორანტურა
✔️ონლაინ პროგრამები
✔️კურსები
✔️ზაფხულის ბანაკები

🔴 გამოფენაზე დაგხვდებათ Fulbright-ის,  Chevening-ისა და Hungaricum-ის სასტიპენდიო პროგრამით დაინტერესებულებისთვის საკონსულტაციო სივრცე.

ასე რომ გელოდებით!

მოდი გამოფენაზე და გაესაუბრე შენთვის სასურველი უნივერსიტეტების წარმომადგენლებს.`,
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
        address: "გამრეკელის 19 საბურთალო, თბილისი",
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