//transitions between the sign up and the login page
function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

// basic helpers
function setError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message || '';
}

function isValidEmail(email) {
    // simple RFC-like check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLogin(e) {
    setError('login-email-error', '');
    setError('login-password-error', '');
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    let ok = true;
    if (!isValidEmail(email)) {
        setError('login-email-error', 'Enter a valid email address');
        ok = false;
    }
    if (!password || password.length < 8) {
        setError('login-password-error', 'Password must be at least 6 characters');
        ok = false6
    }
    if (!ok) e.preventDefault();
    return ok;
}

function validateRegister(e) {
    // clear errors
    ['register-firstname-error','register-surname-error','register-email-error','register-password-error','register-role-error'].forEach(id => setError(id, ''));
    const firstname = document.getElementById('register-firstname').value.trim();
    const surname = document.getElementById('register-surname').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;
    let ok = true;

    if (firstname.length < 2) {
        setError('register-firstname-error', 'Please enter your first name (min 2 chars)');
        ok = false;
    }
    if (surname.length < 2) {
        setError('register-surname-error', 'Please enter your surname (min 2 chars)');
        ok = false;
    }
    if (!isValidEmail(email)) {
        setError('register-email-error', 'Enter a valid email');
        ok = false;
    }
    if (!password || password.length < 8) {
        setError('register-password-error', 'Password must be at least 8 characters');
        ok = false;
    }
    if (!role) {
        setError('register-role-error', 'Please select a role');
        ok = false;
    }

    if (!ok) e.preventDefault();
    return ok;
}