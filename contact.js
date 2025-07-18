document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Close other open items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                    q.nextElementSibling.style.padding = '0 20px';
                }
            });
            
            // Toggle current item
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 20px 20px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 20px';
            }
        });
    });
    
    // Google Maps iframe interaction
    const mapIframe = document.querySelector('.map-container iframe');
    
    if (mapIframe) {
        // Add loading indicator
        mapIframe.style.opacity = '0';
        mapIframe.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.5s ease';
        });
        
        // Add title for accessibility
        mapIframe.setAttribute('title', 'Google Maps - EduBridge Location');
    }
});