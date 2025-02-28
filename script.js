function checkIn() {
    var phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!phoneNumber) {
        alert("Please enter your phone number");
        return;
    }

    document.getElementById("loading").style.display = "flex";
    startLogoAnimation(); // Tampilkan loading screen

    fetch("https://script.google.com/macros/s/AKfycbxbXW5WQUBvyo4YhyPuvpQLuLC30nVqRwUPbGTrdMNuW1t35wDFakJ04nhApvWCem8/exec?phone=" + encodeURIComponent(phoneNumber), { cache: "no-store" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").style.display = "none";
    stopLogoAnimation(); // Sembunyikan loading screen

            if (data.success) {
                document.getElementById("message").innerHTML = `Shalom <span>${data.name}</span> </br> We're happy to see you!`;
            } else {
                document.getElementById("message").innerHTML = `Nomor HP belum terdaftar, registrasi dulu di <br> 
                <a href="https://bit.ly/umatbaruPDYakob" target="_blank">bit.ly/umatbaruPDYakob</a>`;
            }            
            document.getElementById("popup").style.display = "flex";
        })
        .catch(error => {
            document.getElementById("loading").style.display = "none";
    stopLogoAnimation();
            alert("Error fetching data. Please try again.");
            console.error("Error:", error);
        });
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// Function to start logo animation
function startLogoAnimation() {
    const logo = document.querySelector(".loading-logo");
    logo.style.animation = "glow 1.5s ease-in-out infinite, fadeIn 1.5s ease-in-out";
}

// Function to stop logo animation
function stopLogoAnimation() {
    const logo = document.querySelector(".loading-logo");
    logo.style.animation = "none"; // Stop animation when loading is done
}
