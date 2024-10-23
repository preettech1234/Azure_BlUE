// Simple signed-in check (for demo purposes)
let isSignedIn = false;  // Change this value to true if the user is logged in

document.getElementById('listen-btn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevents the default action

    if (!isSignedIn) {
        // Show the modal if user is not signed in
        document.getElementById('signin-modal').style.display = 'block';
    } else {
        // Allow access if user is signed in
        window.location.href = 'music-streaming-page.html';
    }
});

// Close modal functionality
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('signin-modal').style.display = 'none';
});

// Redirect to sign-in or register pages (replace URLs with actual links)
document.getElementById('signin-btn').addEventListener('click', function() {
    window.location.href = 'signin-page.html';
});

document.getElementById('register-btn').addEventListener('click', function() {
    window.location.href = 'register-page.html';
});
