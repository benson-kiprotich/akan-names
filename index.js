function validateForm() {
  var birthdateInput = document.getElementById("birthdate");
  var birthdate = new Date(birthdateInput.value);

  var day = birthdate.getDate();
  var month = birthdate.getMonth() + 1; // Month is zero-based

  if (isNaN(birthdate.getTime())) {
    alert("Please enter a valid date.");
    return false;
  }

  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    alert("Invalid day or month. Please check your input.");
    return false;
  }

  return true;
}
