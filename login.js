document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin_view.html';
    } else if (username === 'employee' && password === 'employee123') {
        window.location.href = 'user_view.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
});
