function validateForm() {
  let birthdateInput = document.getElementById("birthdate");
  let genderInput = document.getElementById("gender");

  let birthdate = new Date(birthdateInput.value);
  let gender = genderInput.value;

  let day = birthdate.getDate();
  let month = birthdate.getMonth() + 1; // Month is zero-based

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
