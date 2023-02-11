const rollNoInput = document.getElementById("roll-no");
const fullNameInput = document.getElementById("full-name");
const classInput = document.getElementById("class");
const birthDateInput = document.getElementById("birth-date");
const addressInput = document.getElementById("address");
const enrollmentDateInput = document.getElementById("enrollment-date");
const saveButton = document.getElementById("save-button");
const updateButton = document.getElementById("update-button");
const resetButton = document.getElementById("reset-button");


fullNameInput.disabled = true;
classInput.disabled = true;
birthDateInput.disabled = true;
addressInput.disabled = true;
enrollmentDateInput.disabled = true;
saveButton.disabled = true;
updateButton.disabled = true;
resetButton.disabled = true;

rollNoInput.addEventListener("input", function(event) {
  const rollNo = event.target.value;

  const student = findStudentInDatabase(rollNo);
  if (student) {

    fullNameInput.value = student.fullName;
    classInput.value = student.class;
    birthDateInput.value = student.birthDate;
    addressInput.value = student.address;
    enrollmentDateInput.value = student.enrollmentDate;
    fullNameInput.disabled = false;
    classInput.disabled = false;
    birthDateInput.disabled = false;
    addressInput.disabled = false;
    enrollmentDateInput.disabled = false;
    updateButton.disabled = false;
    resetButton.disabled = false;
  } else {

    fullNameInput.value = "";
    classInput.value = "";
    birthDateInput.value = "";
    addressInput.value = "";
    enrollmentDateInput.value = "";
    fullNameInput.disabled = false;
    classInput.disabled = false;
    birthDateInput.disabled = false;
    addressInput.disabled = false;
    enrollmentDateInput.disabled = false;
    saveButton.disabled = false;
    resetButton.disabled = false;
  }
});

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!rollNoInput.value || !fullNameInput.value || !classInput.value || !birthDateInput.value || !addressInput.value || !enrollmentDateInput.value) {
    alert("All fields are required");
    return;
  }

  const student = {
    rollNo: rollNoInput.value,
    fullName: fullNameInput.value,
    class: classInput.value,
    birthDate: birthDateInput.value,
    address: addressInput.value,
    enrollmentDate: enrollmentDateInput.value,
}
