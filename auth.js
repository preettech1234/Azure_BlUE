// Simulated authentication for demo purposes
const users = [
    { email: 'test@example.com', password: 'password123' }
];

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email and password match any registered user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        // Here you would set up session, token, or redirect to the home page
        window.location.href = 'index.html';  // Redirect to homepage after login
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
