function checkIn() {
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (!phoneNumber) {
        showPopup("Please enter a phone number", "red");
        return;
    }

    document.getElementById("loading").style.display = "flex"; // Show loading screen

    fetch(`https://script.google.com/macros/s/AKfycbyDJQgXYrfcbmsIbdbUZmBp2S8pbVf-qgOmG4YzkGUbhJx_YTGC-rIOPSWmggS1jIBNPA/exec?phone=${phoneNumber}`)
        .then(response => response.json())
        .then(data => {
            if (data.exists) {
                showPopup(`Welcome ${data.name}!`, "green");
            } else {
                showPopup("User not registered", "red");
            }
        })
        .catch(() => showPopup("Error retrieving data", "red"))
        .finally(() => {
            document.getElementById("loading").style.display = "none"; // Hide loading screen
        });
}

function showPopup(message, color) {
    document.getElementById("message").textContent = message;
    document.getElementById("message").style.color = color;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
