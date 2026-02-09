import '../styles/login.css';
import '../styles/styles.css';

// --- SIMULATED USER DATA STORE ---
let users = [
    { name: 'Admin User', email: 'admin@palace.com', password: 'password123' },
    { name: 'Test User', email: 'test@example.com', password: 'testpassword' }
];

try {
    const storedUsers = localStorage.getItem('palaceHotelUsers');
    if (storedUsers) {
        const parsedStoredUsers = JSON.parse(storedUsers);
        parsedStoredUsers.forEach(storedUser => {
            if (!users.some(u => u.email === storedUser.email)) {
                users.push(storedUser);
            }
        });
    }
} catch (e) {
    console.error("Error loading users from localStorage:", e);
}

function saveUsersToLocalStorage() {
    try {
        localStorage.setItem('palaceHotelUsers', JSON.stringify(users));
    } catch (e) {
        console.error("Error saving users to localStorage:", e);
    }
}

// --- DOM Elements ---
const loginFormEl = document.getElementById('loginForm');
const signupFormEl = document.getElementById('signupForm');
const forgotPasswordFormEl = document.getElementById('forgotPasswordForm');
const formTitleEl = document.getElementById('formTitle');
const generalFormMessageEl = document.getElementById('generalFormMessage');

const showSignupLinkEl = document.getElementById('showSignupLink');
const showLoginLinkFromSignupEl = document.getElementById('showLoginLinkFromSignup');
const showLoginLinkFromForgotEl = document.getElementById('showLoginLinkFromForgot');
const forgotPasswordLinkEl = document.getElementById('forgotPasswordLink');

// --- Utility Functions for UI ---
function displayFormMessage(message, type = 'error') {
    generalFormMessageEl.textContent = message;
    generalFormMessageEl.className = `form-message ${type}`;
    generalFormMessageEl.style.display = 'block';
}

function clearFormMessage() {
    generalFormMessageEl.style.display = 'none';
    generalFormMessageEl.textContent = '';
    generalFormMessageEl.className = 'form-message';
}

function clearInputError(inputEl) {
    inputEl.classList.remove('error');
    const errorMsgEl = document.getElementById(inputEl.id + 'Error');
    if (errorMsgEl) {
        errorMsgEl.textContent = '';
        errorMsgEl.style.display = 'none';
    }
}

function displayInputError(inputEl, message) {
    inputEl.classList.add('error');
    const errorMsgEl = document.getElementById(inputEl.id + 'Error');
    if (errorMsgEl) {
        errorMsgEl.textContent = message;
        errorMsgEl.style.display = 'block';
    }
}

function resetAndClearForm(formEl) {
    formEl.reset();
    formEl.querySelectorAll('input').forEach(clearInputError);
    clearFormMessage();
}

// --- Form Switching Logic ---
function showForm(formToShow) {
    [loginFormEl, signupFormEl, forgotPasswordFormEl].forEach(form => {
        form.style.display = (form === formToShow) ? 'block' : 'none';
        if (form === formToShow) {
            resetAndClearForm(form); 
        }
    });
    if (formToShow === loginFormEl) formTitleEl.textContent = 'Sign In';
    else if (formToShow === signupFormEl) formTitleEl.textContent = 'Create Your Account';
    else if (formToShow === forgotPasswordFormEl) formTitleEl.textContent = 'Reset Your Password';
}

showSignupLinkEl.addEventListener('click', (e) => { e.preventDefault(); showForm(signupFormEl); });
showLoginLinkFromSignupEl.addEventListener('click', (e) => { e.preventDefault(); showForm(loginFormEl); });
showLoginLinkFromForgotEl.addEventListener('click', (e) => { e.preventDefault(); showForm(loginFormEl); });
forgotPasswordLinkEl.addEventListener('click', (e) => { e.preventDefault(); showForm(forgotPasswordFormEl); });

// --- Form Submission Handlers ---
loginFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    clearFormMessage();
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    clearInputError(emailInput);
    clearInputError(passwordInput);

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    if (!email) {
        displayInputError(emailInput, 'Please enter your email.');
        isValid = false;
    }
    if (!password) {
        displayInputError(passwordInput, 'Please enter your password.');
        isValid = false;
    }
    if (!isValid) return;

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        // Store login state in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('loggedInUser', JSON.stringify({ name: foundUser.name, email: foundUser.email }));
        
        displayFormMessage(`Welcome back, ${foundUser.name}! Redirecting...`, 'success');
        
        // Determine redirect URL
        const urlParams = new URLSearchParams(window.location.search);
        let redirectUrl = urlParams.get('from');

        if (redirectUrl && (redirectUrl.includes('index.html') || redirectUrl.includes('palace.html'))) {
        } else if (document.referrer && (document.referrer.includes('index.html') || document.referrer.includes('palace.html'))) {
            redirectUrl = document.referrer;
        } else {
            // Default redirect if no valid 'from' or referrer
            redirectUrl = 'palace.html'; 
        }
        

        if (!redirectUrl.endsWith('index.html') && !redirectUrl.endsWith('palace.html')) {
                redirectUrl = 'palace.html'; 
        }


        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1500);
    } else {
        displayFormMessage('Invalid email or password. Please try again.', 'error');
        displayInputError(emailInput, ''); 
        displayInputError(passwordInput, '');
    }
});

signupFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    clearFormMessage();
    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(clearInputError);

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let isValid = true;

    if (!name) {
        displayInputError(nameInput, 'Please enter your full name.');
        isValid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        displayInputError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else if (users.some(user => user.email === email)) {
        displayInputError(emailInput, 'This email is already registered.');
        isValid = false;
    }
    if (!password || password.length < 6) {
        displayInputError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
    }
    if (password !== confirmPassword) {
        displayInputError(confirmPasswordInput, 'Passwords do not match.');
        isValid = false;
    }

    if (!isValid) return;

    users.push({ name, email, password });
    saveUsersToLocalStorage();
    
    console.log('New user signed up:', { name, email });
    displayFormMessage('Account created successfully! You can now sign in.', 'success');
    
    setTimeout(() => {
        showForm(loginFormEl);
        document.getElementById('loginEmail').value = email; 
    }, 2000);
});

forgotPasswordFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    clearFormMessage();
    const emailInput = document.getElementById('forgotEmail');
    clearInputError(emailInput);
    
    const email = emailInput.value.trim();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        displayInputError(emailInput, 'Please enter a valid email address.');
        return;
    }
    
    console.log('Forgot password request for:', email);
    displayFormMessage('If an account with that email exists, password reset instructions have been sent.', 'success');
    
    setTimeout(() => {
        showForm(loginFormEl);
    }, 3000);
});

// Initial setup: Show login form
showForm(loginFormEl);

