document.addEventListener('DOMContentLoaded', function() {
    // Load the appropriate auth form based on URL
    loadAuthForm();
    
    // Setup event listeners
    setupAuthEventListeners();
    
    // Check if user is already logged in (for demo purposes)
    checkAuthStatus();
});

function loadAuthForm() {
    const authContent = document.getElementById('auth-content');
    const path = window.location.pathname.split('/').pop();
    
    if (path === 'signin.html') {
        fetch('signin.html')
            .then(response => response.text())
            .then(html => {
                authContent.innerHTML = html;
                setupFormEventListeners();
            })
            .catch(error => console.error('Error loading signin form:', error));
    } else if (path === 'signup.html') {
        fetch('signup.html')
            .then(response => response.text())
            .then(html => {
                authContent.innerHTML = html;
                setupFormEventListeners();
            })
            .catch(error => console.error('Error loading signup form:', error));
    } else {
        // Default to sign in if no specific page requested
        window.location.href = 'signin.html';
    }
}

function setupAuthEventListeners() {
    // Toggle password visibility
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-password') || 
            e.target.closest('.toggle-password')) {
            const button = e.target.classList.contains('toggle-password') ? 
                e.target : e.target.closest('.toggle-password');
            const input = button.parentElement.querySelector('input');
            
            if (input.type === 'password') {
                input.type = 'text';
                button.innerHTML = '<i class="fas fa-eye-slash"></i>';
                button.setAttribute('aria-label', 'Hide password');
            } else {
                input.type = 'password';
                button.innerHTML = '<i class="fas fa-eye"></i>';
                button.setAttribute('aria-label', 'Show password');
            }
        }
    });
    
    // Password strength indicator
    document.addEventListener('input', function(e) {
        if (e.target.id === 'signup-password') {
            updatePasswordStrength(e.target.value);
        }
    });
}

function setupFormEventListeners() {
    // Sign in form submission
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            const rememberMe = document.querySelector('#signin-form input[name="remember"]').checked;
            
            // Simple validation
            if (!email || !password) {
                showAuthError('გთხოვთ შეავსოთ ყველა ველი');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Sign in attempt:', { email, password, rememberMe });
            
            // Simulate successful login
            simulateLogin(email);
        });
    }
    
    // Sign up form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('signup-firstname').value;
            const lastName = document.getElementById('signup-lastname').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const grade = document.getElementById('signup-grade').value;
            const agreedToTerms = document.getElementById('terms-agree').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword || !grade) {
                showAuthError('გთხოვთ შეავსოთ ყველა ველი');
                return;
            }
            
            if (password !== confirmPassword) {
                showAuthError('პაროლები არ ემთხვევა');
                return;
            }
            
            if (!agreedToTerms) {
                showAuthError('გთხოვთ დაეთანხმოთ პირობებს');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Sign up attempt:', { 
                firstName, 
                lastName, 
                email, 
                password, 
                grade,
                agreedToTerms 
            });
            
            // Simulate successful registration and login
            simulateLogin(email);
        });
    }
    
    // Social login buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('social-btn') || 
            e.target.closest('.social-btn')) {
            const button = e.target.classList.contains('social-btn') ? 
                e.target : e.target.closest('.social-btn');
            
            const provider = button.classList.contains('google-btn') ? 'google' : 'facebook';
            
            // In a real app, this would initiate OAuth flow
            console.log(`Social login attempt with ${provider}`);
            alert(`In a real app, this would redirect to ${provider} OAuth`);
        }
    });
}

function updatePasswordStrength(password) {
    const strengthValue = document.getElementById('strength-value');
    const strengthBars = document.querySelectorAll('.strength-bar');
    
    // Reset bars
    strengthBars.forEach(bar => {
        bar.style.backgroundColor = '#eee';
    });
    
    // Calculate strength
    let strength = 0;
    if (password.length > 0) strength = 1;
    if (password.length >= 8) strength = 2;
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) strength = 3;
    
    // Update UI
    if (strength > 0) {
        strengthBars[0].style.backgroundColor = '#ff4d4d'; // Red for weak
    }
    if (strength > 1) {
        strengthBars[1].style.backgroundColor = '#ffcc00'; // Yellow for medium
    }
    if (strength > 2) {
        strengthBars[2].style.backgroundColor = '#00cc66'; // Green for strong
    }
    
    // Update text
    const strengthTexts = ['სუსტი', 'საშუალო', 'ძლიერი'];
    strengthValue.textContent = strengthTexts[strength - 1] || 'სუსტი';
    strengthValue.style.color = strength === 1 ? '#ff4d4d' : 
                               strength === 2 ? '#ffcc00' : '#00cc66';
}

function showAuthError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.auth-error');
    if (existingError) existingError.remove();
    
    // Create error element
    const errorElement = document.createElement('div');
    errorElement.className = 'auth-error';
    errorElement.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    
    // Insert error message
    const form = document.querySelector('.auth-form');
    form.insertBefore(errorElement, form.firstChild);
    
    // Add animation
    errorElement.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        errorElement.style.animation = '';
    }, 500);
}

function simulateLogin(email) {
    // In a real app, you would:
    // 1. Send credentials to server
    // 2. Receive auth token
    // 3. Store token securely
    // 4. Redirect to dashboard
    
    // For demo purposes:
    localStorage.setItem('edubridge-auth', 'true');
    localStorage.setItem('edubridge-user', email);
    
    // Show success message
    const authContent = document.getElementById('auth-content');
    authContent.innerHTML = `
        <div class="auth-success">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>წარმატებული ავტორიზაცია!</h2>
            <p>თქვენ გადამისამართდებით მთავარ გვერდზე...</p>
        </div>
    `;
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 2000);
}

function checkAuthStatus() {
    // In a real app, you would verify the auth token with your server
    const isAuthenticated = localStorage.getItem('edubridge-auth') === 'true';
    
    if (isAuthenticated) {
        // Redirect to profile if already logged in
        window.location.href = 'profile.html';
    }
}

// Add shake animation for errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
    }
    
    .auth-error {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 15px;
        background-color: #ffebee;
        border-radius: 8px;
        color: #d32f2f;
        margin-bottom: 20px;
        font-size: 14px;
    }
    
    .auth-success {
        text-align: center;
        padding: 30px;
    }
    
    .success-icon {
        font-size: 60px;
        color: #00cc66;
        margin-bottom: 20px;
    }
    
    .success-icon i {
        animation: bounce 0.5s ease;
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);