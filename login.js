document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform login validation and logic here
    
    // For demonstration purposes, we will simply log the username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    console.log('Username:', username);
    console.log('Password:', password);
  });
  