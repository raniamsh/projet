const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // You can now perform further actions with the form data, such as sending it to a server via AJAX
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    document.getElementById('contactForm').reset();
  });
  