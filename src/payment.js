import '../styles/payment.css'

document.getElementById('showSignupLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('formTitle').textContent = 'Create Your Account';
});

document.getElementById('showLoginLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('formTitle').textContent = 'Sign In to Your Account';
});

document.getElementById('showLoginLink2').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('formTitle').textContent = 'Sign In to Your Account';
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Reset Your Password';
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;
    
    
    if (!email) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    
    if (!password || password.length < 6) {
        document.getElementById('password').classList.add('error');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    
    
    if (isValid) {
        
        console.log('Login submitted:', { email, password });
        
        
        const isSuccess = Math.random() > 0.3; // 70% chance of success
        
        if (isSuccess) {
            alert('Login successful! Redirecting to your account...');
            
        } else {
            
            const isNewUser = Math.random() > 0.5; // 50% chance of being a new user
            
            if (isNewUser) {
                
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('signupForm').style.display = 'block';
                document.getElementById('forgotPasswordForm').style.display = 'none';
                document.getElementById('formTitle').textContent = 'Create Your Account';
                
                
                if (email) {
                    document.getElementById('signupEmail').value = email;
                }
                
                alert('It looks like you don\'t have an account yet. Please create one to continue.');
            } else {
                
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.style.display = 'block';
                errorMsg.style.textAlign = 'center';
                errorMsg.style.marginTop = '15px';
                errorMsg.textContent = 'Invalid email/username or password. Please try again.';
                
                const form = document.getElementById('loginForm');
                const existingError = form.querySelector('.error-message:not(#emailError):not(#passwordError)');
                if (existingError) {
                    form.removeChild(existingError);
                }
                
                form.appendChild(errorMsg);
                
                
                document.getElementById('email').classList.add('error');
                document.getElementById('password').classList.add('error');
            }
        }
    }
});


document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    document.getElementById('signupName').classList.remove('error');
    document.getElementById('signupEmail').classList.remove('error');
    document.getElementById('signupPassword').classList.remove('error');
    document.getElementById('confirmPassword').classList.remove('error');
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('signupEmailError').style.display = 'none';
    document.getElementById('signupPasswordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';
    
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;
    
    
    if (!name) {
        document.getElementById('signupName').classList.add('error');
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('signupEmail').classList.add('error');
        document.getElementById('signupEmailError').style.display = 'block';
        isValid = false;
    }
    
    
    if (!password || password.length < 6) {
        document.getElementById('signupPassword').classList.add('error');
        document.getElementById('signupPasswordError').style.display = 'block';
        isValid = false;
    }
    
    
    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('error');
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }
    
    
    if (isValid) {
        console.log('Signup submitted:', { name, email, password });
        alert('Account created successfully! You can now sign in.');
        
        
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('formTitle').textContent = 'Sign In to Your Account';
        document.getElementById('email').value = email;
    }
});


document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    document.getElementById('forgotEmail').classList.remove('error');
    document.getElementById('forgotEmailError').style.display = 'none';
    
    
    const email = document.getElementById('forgotEmail').value.trim();
    let isValid = true;
    
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('forgotEmail').classList.add('error');
        document.getElementById('forgotEmailError').style.display = 'block';
        isValid = false;
    }
    
    
    if (isValid) {
        console.log('Forgot password submitted:', { email });
        alert('Password reset instructions have been sent to your email address.');
        
        
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('forgotPasswordForm').style.display = 'none';
        document.getElementById('formTitle').textContent = 'Sign In to Your Account';
    }
});


document.getElementById('email').addEventListener('blur', function() {
    if (!this.value.trim()) {
        this.classList.add('error');
        document.getElementById('emailError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('emailError').style.display = 'none';
    }
});

document.getElementById('password').addEventListener('blur', function() {
    if (!this.value.trim() || this.value.length < 6) {
        this.classList.add('error');
        document.getElementById('passwordError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('passwordError').style.display = 'none';
    }
});


document.getElementById('signupName').addEventListener('blur', function() {
    if (!this.value.trim()) {
        this.classList.add('error');
        document.getElementById('nameError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('nameError').style.display = 'none';
    }
});

document.getElementById('signupEmail').addEventListener('blur', function() {
    if (!this.value.trim() || !/^\S+@\S+\.\S+$/.test(this.value)) {
        this.classList.add('error');
        document.getElementById('signupEmailError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('signupEmailError').style.display = 'none';
    }
});

document.getElementById('signupPassword').addEventListener('blur', function() {
    if (!this.value.trim() || this.value.length < 6) {
        this.classList.add('error');
        document.getElementById('signupPasswordError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('signupPasswordError').style.display = 'none';
    }
});

document.getElementById('confirmPassword').addEventListener('blur', function() {
    const password = document.getElementById('signupPassword').value.trim();
    if (this.value.trim() !== password) {
        this.classList.add('error');
        document.getElementById('confirmPasswordError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
});


document.getElementById('forgotEmail').addEventListener('blur', function() {
    if (!this.value.trim() || !/^\S+@\S+\.\S+$/.test(this.value)) {
        this.classList.add('error');
        document.getElementById('forgotEmailError').style.display = 'block';
    } else {
        this.classList.remove('error');
        document.getElementById('forgotEmailError').style.display = 'none';
    }
});