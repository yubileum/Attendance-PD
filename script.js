function checkIn() {
    var phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!phoneNumber) {
        alert("Please enter your phone number");
        return;
    }

    document.getElementById("loading").style.display = "flex"; // Tampilkan loading screen

    fetch("https://script.google.com/macros/s/AKfycbxbXW5WQUBvyo4YhyPuvpQLuLC30nVqRwUPbGTrdMNuW1t35wDFakJ04nhApvWCem8/exec?phone=" + encodeURIComponent(phoneNumber), { cache: "no-store" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").style.display = "none"; // Sembunyikan loading screen

            if (data.success) {
                document.getElementById("message").innerHTML = `Shalom <span>${data.name}</span> </br> We're happy to see you!`;
            } else {
                document.getElementById("message").innerHTML = `Nomor HP belum terdaftar </br> registrasi dulu di <a href="https://forms.gle/WJWFGg69V8WtSjqf7" target="_blank">https://forms.gle/WJWFGg69V8WtSjqf7</a>`;
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
