const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const { email, password } = Object.fromEntries(formData.entries());
  if (!email || !password) {
    alert("All fields must be filled out");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);
  loginForm.reset();
}
