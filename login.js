document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.querySelector('input[type=\"email\"]').value;
    const password = document.querySelector('input[type=\"password\"]').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Mock authentication
    if (email === 'admin@example.com' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = '/dashboard';
    } else {
        alert('Invalid credentials');
    }
});
