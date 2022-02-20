function myFunction() {
  let userName = prompt("Please enter a username: ");
  if (userName != null) {
    if (userName == "admin") {
      let pass = prompt("Enter admin password.");
      if (pass == null) {
        alert("Cancelled.");
      } else if (pass == "TheMaster") {
        alert("Welcome!");
      } else {
        alert("Wrong password!");
      }
    }  
    document.getElementById("promptButton").innerHTML = `Hello ${userName}! How are you?`;
    
  } else {
    alert("That is not a valid user name.");
  }
  

}
