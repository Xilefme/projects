document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (name && email && amount > 0) {
    // Simulate a successful donation (no real payment processing here)
    document.getElementById("donationForm").style.display = "none";
    document.getElementById("thankYouMessage").classList.remove("hidden");

    // In a real app, you'd now send the info to a server or payment gateway
  } else {
    alert("Please fill in all fields with valid data.");
  }
});
