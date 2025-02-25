function checkIn() {
    var phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!phoneNumber) {
        alert("Please enter your phone number");
        return;
    }

    document.getElementById("loading").style.display = "flex"; // Tampilkan loading screen

    fetch("https://script.google.com/macros/s/AKfycbw9fLuV4jeAR9EjFZgWUtibw00RfDSe-Den5eGBw7wacnDld7CNfKqwJc2rfnqIdfTBGw/exec?phone=" + encodeURIComponent(phoneNumber), { cache: "no-store" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").style.display = "none"; // Sembunyikan loading screen

            if (data.success) {
                document.getElementById("message").innerHTML = `Shalom <span>${data.name}</span>`;
            } else {
                document.getElementById("message").innerText = "Phone number not found.";
            }            
            document.getElementById("popup").style.display = "flex";
        })
        .catch(error => {
            document.getElementById("loading").style.display = "none";
            alert("Error fetching data. Please try again.");
            console.error("Error:", error);
        });
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
