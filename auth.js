// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWfULL7wgMBKEo0Ag0mkwsq2Gu3xPHdv8",
    authDomain: "edubridge-auth.firebaseapp.com",
    projectId: "edubridge-auth",
    storageBucket: "edubridge-auth.firebasestorage.app",
    messagingSenderId: "91675731956",
    appId: "1:91675731956:web:2a59f64a86ea5ee0f93ba1",
    measurementId: "G-G41T7RQLL7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const fullname = document.getElementById("fullname").value;

const submit = document.getElementById("submit");

// Password Strength Checker (keep your existing)
function checkPasswordStrength(password) {
    const strengthBars = document.querySelectorAll('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    strengthBars.forEach(bar => bar.style.backgroundColor = '#eee');
    strengthText.textContent = '';
    
    if (!password) return;
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;
    
    if (strength <= 1) {
        strengthBars[0].style.backgroundColor = '#ff6b6b';
        strengthText.textContent = 'სუსტი';
    } else if (strength <= 3) {
        strengthBars[0].style.backgroundColor = '#ffb347';
        strengthBars[1].style.backgroundColor = '#ffb347';
        strengthText.textContent = 'საშუალო';
    } else {
        strengthBars.forEach(bar => bar.style.backgroundColor = '#4CAF50');
        strengthText.textContent = 'ძლიერი';
    }
}

// Password Match Checker (keep your existing)
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-match');
    
    if (!confirmPassword) {
        message.textContent = '';
        return;
    }
    
    if (password === confirmPassword) {
        message.textContent = 'პაროლები ემთხვევა';
        message.style.color = '#4CAF50';
    } else {
        message.textContent = 'პაროლები არ ემთხვევა';
        message.style.color = '#ff6b6b';
    }
}

// Form Validation (keep your existing)
function validateSignupForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('პაროლები არ ემთხვევა');
        return false;
    }
    
    if (!document.getElementById('terms').checked) {
        alert('გთხოვთ დაეთანხმოთ გამოყენების პირობებს');
        return false;
    }
    
    if (!document.getElementById('school').value) {
        alert('გთხოვთ აირჩიოთ სკოლა');
        return false;
    }
    
    return true;
}

// Firebase Error Handler (updated)
function handleAuthError(error) {
    const errors = {
        'auth/email-already-in-use': 'ელ.ფოსტა უკვე გამოყენებულია',
        'auth/invalid-email': 'არასწორი ელ.ფოსტის ფორმატი',
        'auth/weak-password': 'პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს',
        'auth/user-not-found': 'მომხმარებელი არ მოიძებნა',
        'auth/wrong-password': 'არასწორი პაროლი',
        'auth/too-many-requests': 'ძალიან ბევრი მცდელობა, სცადეთ მოგვიანებით'
    };
    
    alert(errors[error.code] || 'დაფიქსირდა შეცდომა: ' + error.message);
}

// School Selection (keep your existing)
function setupSchoolSelection() {
    const regionSelect = document.getElementById('region');
    const schoolTypeRadios = document.querySelectorAll('input[name="school-type"]');
    const schoolSelect = document.getElementById('school');
    const schoolSelectionDiv = document.getElementById('school-selection');
    
    if (!regionSelect) return;
    
    const schoolsByRegion = {
        tbilisi: {
            public: ["1-ლი საჯარო სკოლა", "2-ლი საჯარო სკოლა", "3-ლი საჯარო სკოლა"],
            private: ["ახალი სკოლა", "განათლების აკადემია"]
        },
        adjara: {
            public: ["ბათუმის 1-ლი საჯარო სკოლა", "ბათუმის 2-ლი საჯარო სკოლა"],
            private: ["ბათუმის კერძო სკოლა"]
        }
    };
    
    function updateSchoolOptions() {
        const region = regionSelect.value;
        const schoolType = document.querySelector('input[name="school-type"]:checked')?.value;
        
        if (!region || !schoolType) {
            schoolSelectionDiv.style.display = 'none';
            schoolSelect.disabled = true;
            return;
        }
        
        const schools = schoolsByRegion[region]?.[schoolType] || [];
        schoolSelect.innerHTML = '';
        
        if (schools.length > 0) {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'აირჩიე სკოლა';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            schoolSelect.appendChild(defaultOption);
            
            schools.forEach(school => {
                const option = document.createElement('option');
                option.value = school;
                option.textContent = school;
                schoolSelect.appendChild(option);
            });
            
            schoolSelectionDiv.style.display = 'block';
            schoolSelect.disabled = false;
        }
    }
    
    regionSelect.addEventListener('change', updateSchoolOptions);
    schoolTypeRadios.forEach(radio => radio.addEventListener('change', updateSchoolOptions));
    updateSchoolOptions();
}

// Firebase Signup
function setupSignupForm() {
    const signupForm = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
    });
    
    document.getElementById('confirm-password').addEventListener('input', checkPasswordMatch);
    
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateSignupForm()) return;
        
        const userData = {
            email: document.getElementById('email').value,
            password: passwordInput.value,
            fullname: document.getElementById('fullname').value,
            region: document.getElementById('region').value,
            schoolType: document.querySelector('input[name="school-type"]:checked').value,
            school: document.getElementById('school').value
        };

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            
            await updateProfile(userCredential.user, {
                displayName: userData.fullname
            });

            await setDoc(doc(db, "users", userCredential.user.uid), {
                name: userData.fullname,
                email: userData.email,
                region: userData.region,
                schoolType: userData.schoolType,
                school: userData.school,
                createdAt: serverTimestamp()
            });

            window.location.href = './profile.html';
        } catch (error) {
            handleAuthError(error);
        }
    });
}

// Firebase Login
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = './profile.html';
        } catch (error) {
            handleAuthError(error);
        }
    });
}

// Auth State Monitor
function monitorAuthState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User logged in:", user.displayName);
        } else {
            console.log("User logged out");
        }
    });
}

// Initialize All
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('signup-form')) setupSignupForm();
    if (document.getElementById('login-form')) setupLoginForm();
    setupSchoolSelection();
    monitorAuthState();
});