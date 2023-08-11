const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  const userData = {};

  const formElements = event.currentTarget.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.tagName === "INPUT") {
      userData[element.name] = element.value;
    }
  }

  if (!userData.email || !userData.password) {
    alert("All fields must be filled out");
    return;
  }

  console.log(userData);
  loginForm.reset();
}
