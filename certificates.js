document.addEventListener('DOMContentLoaded', function() {
    // Sample Certificate Data
    const certificates = [
        {
            id: 1,
            title: "მათემატიკის რესპუბლიკური ოლიმპიადა",
            issuer: "განათლების სამინისტრო",
            date: "15 მაისი, 2025",
            award: "gold",
            type: "olympiad",
            year: "2025",
            image: "math_olympiad_certificate.jpg",
            description: "ქვეყნის მასშტაბის მათემატიკის ოლიმპიადაში I ადგილის დაკავება"
        },
        {
            id: 2,
            title: "გაეროს მოდელირება - საუკეთესო დელეგატი",
            issuer: "ახალგაზრდული პარლამენტი",
            date: "22 აპრილი, 2025",
            award: "silver",
            type: "tournament",
            year: "2025",
            image: "debate_certificate.jpg",
            description: "გაეროს უშიშროების საბჭოს მოდელირებაში საუკეთესო დელეგატის ჯილდო"
        },
        {
            id: 3,
            title: "პროგრამირების საზაფხულო ბანაკი",
            issuer: "საქართველოს ტექნოლოგიური პარკი",
            date: "10 აგვისტო, 2024",
            award: "participation",
            type: "camp",
            year: "2024",
            image: "coding_camp_certificate.png",
            description: "Python პროგრამირების 2 კვირიანი ინტენსიური კურსის დასრულება"
        },
        {
            id: 4,
            title: "ფიზიკის ოლიმპიადა",
            issuer: "თბილისის სახელმწიფო უნივერსიტეტი",
            date: "20 მარტი, 2024",
            award: "bronze",
            type: "olympiad",
            year: "2024",
            image: "physics_certificate.png",
            description: "რესპუბლიკური ფიზიკის ოლიმპიადის III ადგილი"
        },
        {
            id: 5,
            title: "დებატების ტურნირი",
            issuer: "ახალგაზრდული პარლამენტი",
            date: "5 დეკემბერი, 2023",
            award: "silver",
            type: "tournament",
            year: "2023",
            image: "debate_certificate2.webp",
            description: "წლიური დებატების ტურნირის ფინალისტი"
        },
        {
            id: 6,
            title: "რობოტექნიკის კურსი",
            issuer: "ლაბორატორია",
            date: "15 ნოემბერი, 2023",
            award: "participation",
            type: "course",
            year: "2023",
            image: "robotics_certificate.png",
            description: "Arduino-ს გამოყენებით რობოტების პროგრამირების კურსი"
        }
    ];

    // DOM Elements
    const certificatesGrid = document.getElementById('certificates-grid');
    const noResults = document.getElementById('no-results');
    const certSearch = document.getElementById('cert-search');
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const awardFilter = document.getElementById('award-filter');
    const viewOptions = document.querySelectorAll('.view-option');
    const totalCerts = document.getElementById('total-certs');
    const goldCerts = document.getElementById('gold-certs');
    const silverCerts = document.getElementById('silver-certs');
    const bronzeCerts = document.getElementById('bronze-certs');
    const certificateModal = document.getElementById('certificate-modal');
    const closeModal = document.getElementById('close-modal');
    const modalCertificate = document.getElementById('modal-certificate');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');

    // Initialize
    updateStats();
    renderCertificates(certificates);
    setupEventListeners();

    // Functions
    function updateStats() {
        totalCerts.textContent = certificates.length;
        goldCerts.textContent = certificates.filter(c => c.award === 'gold').length;
        silverCerts.textContent = certificates.filter(c => c.award === 'silver').length;
        bronzeCerts.textContent = certificates.filter(c => c.award === 'bronze').length;
    }

    function renderCertificates(certsToRender) {
        certificatesGrid.innerHTML = '';
        
        if (certsToRender.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        certsToRender.forEach(cert => {
            const card = document.createElement('article');
            card.className = 'certificate-card';
            card.dataset.id = cert.id;
            card.dataset.award = cert.award;
            card.dataset.type = cert.type;
            card.dataset.year = cert.year;
            
            // Award icon class
            let awardIcon = '';
            let awardClass = '';
            let awardText = '';
            
            switch(cert.award) {
                case 'gold':
                    awardIcon = '<i class="fas fa-medal"></i>';
                    awardClass = 'gold';
                    awardText = 'ოქროს მედალი';
                    break;
                case 'silver':
                    awardIcon = '<i class="fas fa-medal"></i>';
                    awardClass = 'silver';
                    awardText = 'ვერცხლის მედალი';
                    break;
                case 'bronze':
                    awardIcon = '<i class="fas fa-medal"></i>';
                    awardClass = 'bronze';
                    awardText = 'ბრინჯაოს მედალი';
                    break;
                default:
                    awardIcon = '<i class="fas fa-certificate"></i>';
                    awardClass = 'participation';
                    awardText = 'მონაწილეობის სერტიფიკატი';
            }
            
            card.innerHTML = `
                <div class="certificate-header">
                    <div class="certificate-award ${awardClass}" title="${awardText}">
                        ${awardIcon}
                    </div>
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">
                        <i class="fas fa-building"></i>
                        <span>${cert.issuer}</span>
                    </p>
                    <p class="certificate-date">
                        <i class="far fa-calendar-alt"></i>
                        <span>${cert.date}</span>
                    </p>
                </div>
                <div class="certificate-image">
                    <img src="./images/${cert.image}" alt="${cert.title}" loading="lazy">
                </div>
                <div class="certificate-footer">
                    <button class="certificate-btn view-btn">
                        <i class="fas fa-eye"></i> ნახვა
                    </button>
                    <button class="certificate-btn share-btn">
                        <i class="fas fa-share-alt"></i> გაზიარება
                    </button>
                </div>
            `;
            
            certificatesGrid.appendChild(card);
        });
        
        // Add click event to view buttons
        document.querySelectorAll('.certificate-btn.view-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.certificate-card');
                const certId = parseInt(card.dataset.id);
                openCertificateModal(certId);
            });
        });

        // Add click event to share buttons
        document.querySelectorAll('.certificate-btn.share-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.certificate-card');
                const certId = parseInt(card.dataset.id);
                const certificate = certificates.find(c => c.id === certId);
                
                if (navigator.share) {
                    navigator.share({
                        title: `ჩემი სერტიფიკატი: ${certificate.title}`,
                        text: `მე მივიღე ეს სერტიფიკატი ${certificate.issuer}-ისგან: ${certificate.description}`,
                        url: window.location.href
                    }).catch(err => {
                        console.error('Error sharing:', err);
                    });
                } else {
                    // Fallback for browsers that don't support Web Share API
                    alert('გაზიარების ფუნქცია არ არის მხარდაჭერილი თქვენს ბრაუზერში. გამოიყენეთ სხვა მეთოდი.');
                }
            });
        });
    }

    function filterCertificates() {
        const searchTerm = certSearch.value.toLowerCase();
        const yearValue = yearFilter.value;
        const typeValue = typeFilter.value;
        const awardValue = awardFilter.value;
        
        const filtered = certificates.filter(cert => {
            // Search filter
            if (searchTerm && !cert.title.toLowerCase().includes(searchTerm)) {
                return false;
            }
            
            // Year filter
            if (yearValue !== 'all' && cert.year !== yearValue) {
                return false;
            }
            
            // Type filter
            if (typeValue !== 'all' && cert.type !== typeValue) {
                return false;
            }
            
            // Award filter
            if (awardValue !== 'all' && cert.award !== awardValue) {
                return false;
            }
            
            return true;
        });
        
        renderCertificates(filtered);
    }

    function changeView(viewType) {
        certificatesGrid.className = 'certificates-grid';
        
        switch(viewType) {
            case 'list':
                certificatesGrid.classList.add('list-view');
                break;
            case 'timeline':
                certificatesGrid.classList.add('timeline-view');
                break;
            default:
                // Grid view is default
        }
    }

    function openCertificateModal(certId) {
        const certificate = certificates.find(c => c.id === certId);
        
        if (!certificate) return;
        
        modalCertificate.innerHTML = `
            <h3>${certificate.title}</h3>
            <p class="modal-issuer"><strong>გამცემი ორგანიზაცია:</strong> ${certificate.issuer}</p>
            <p class="modal-date"><strong>თარიღი:</strong> ${certificate.date}</p>
            <p class="modal-description"><strong>აღწერა:</strong> ${certificate.description}</p>
            <div class="modal-image">
                <img src="./images/${certificate.image}" alt="${certificate.title}">
            </div>
        `;
        
        // Set download button
        downloadBtn.onclick = function() {
            // In a real app, this would download the actual certificate file
            alert(`სერტიფიკატი "${certificate.title}" ჩამოიტვირთება`);
        };
        
        // Set share button
        shareBtn.onclick = function() {
            if (navigator.share) {
                navigator.share({
                    title: `ჩემი სერტიფიკატი: ${certificate.title}`,
                    text: `მე მივიღე ეს სერტიფიკატი ${certificate.issuer}-ისგან: ${certificate.description}`,
                    url: window.location.href
                }).catch(err => {
                    console.error('Error sharing:', err);
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                alert('გაზიარების ფუნქცია არ არის მხარდაჭერილი თქვენს ბრაუზერში. გამოიყენეთ სხვა მეთოდი.');
            }
        };
        
        certificateModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function setupEventListeners() {
        // Search and filter events
        certSearch.addEventListener('input', filterCertificates);
        yearFilter.addEventListener('change', filterCertificates);
        typeFilter.addEventListener('change', filterCertificates);
        awardFilter.addEventListener('change', filterCertificates);
        
        // View options
        viewOptions.forEach(option => {
            option.addEventListener('click', function() {
                viewOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                changeView(this.dataset.view);
            });
        });
        
        // Modal close button
        closeModal.addEventListener('click', function() {
            certificateModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        certificateModal.addEventListener('click', function(e) {
            if (e.target === certificateModal) {
                certificateModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && certificateModal.style.display === 'flex') {
                certificateModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});