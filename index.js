const akan_names = {
  Male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  Female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

function validateForm() {
  let birthdateInput = document.getElementById("birthdate");
  let genderInput = document.getElementById("gender");

  let birthdate = new Date(birthdateInput.value);
  let gender = genderInput.value;

  let day = birthdate.getDate();
  let month = birthdate.getMonth() + 1; // Month is zero-based
  let year = birthdate.getFullYear();

  if (isNaN(birthdate.getTime())) {
    alert("Please enter a valid date.");
    return false;
  }

  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    alert("Invalid day or month. Please check your input.");
    return false;
  }

  let CC = Number(year.toString().substring(0, 2));
  let YY = Number(year.toString().substring(2));
  let day_of_week =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7;

  alert("Day of the week " + Math.floor(day_of_week));
}
