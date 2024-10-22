document.getElementById("startJourney").addEventListener("click", function() {
    window.location.href = "signup.html"; // Redirect to the signup page
});
// Logout Functionality
function logout() {
    if (confirm("Are you sure you want to logout?")) {
        // Clear user session data
        localStorage.removeItem('userSession');
        alert("You have successfully logged out.");
        window.location.href = "index.html"; // Redirect to homepage
    }
}

// Mood Tracking Functionality
document.querySelectorAll('.mood-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.textContent;
        alert(`You selected: ${mood}`);
        // Optionally save mood state in local storage or send to server
        localStorage.setItem('currentMood', mood);
    });
});

// Start Journey Button Event
document.getElementById('startJourney').addEventListener('click', () => {
    window.location.href = "resources.html"; // Redirect to resources page
});
