const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");
const classSelect = document.querySelector("select#class");
const sectionSelect = document.querySelector("select#section");

function alphabetTillNth(n) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabets.slice(0, n);
}

const sectionMap = {
  VI: 10,
  VII: 10,
  VIII: 10,
  IX: 15,
  X: 15,
  XI: 24,
  XII: 24,
};

classSelect.addEventListener("change", (e) => {
  if (e.target.value) {
    sectionSelect.disabled = false;
    // e.target.value = "VI"
    sectionSelect.innerHTML =
      `<option value="" selected>Select a section</option>` +
      alphabetTillNth(sectionMap[e.target.value]).map(
        (s) => `<option value="${s}">${s.toUpperCase()}</option>`
      );
  } else {
    sectionSelect.disabled = true;
  }
});

const isNameValid = (name) => (name !== "" ? true : "Name can't be empty");

const isEmailValid = (email) =>
  email.includes("@dpsrkp.net") ? true : "Enter a valid @dpsrkp.net email";

const isClassValid = (c) =>
  Object.keys(sectionMap).includes(c) ? true : "Invalid class";

const isSectionValid = (c, s) =>
  alphabetTillNth(sectionMap[c]).includes(s.toLowerCase())
    ? true
    : "Invalid section";

function handleSubmit(e) {
  const validationRes = [
    isNameValid(nameInput.value),
    isEmailValid(emailInput.value),
    isClassValid(classSelect.value),
    isSectionValid(classSelect.value, sectionSelect.value),
  ];

  const fieldsValid = validationRes.every((v) => v === true);

  if (!fieldsValid) {
    alert(validationRes.find((m) => typeof m === "string"));
    e.preventDefault();

    return;
  }
}

document.querySelector("form").addEventListener("submit", handleSubmit);
