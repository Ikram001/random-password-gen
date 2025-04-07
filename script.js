let output = document.querySelector("#password");
let generate = document.querySelector("#btn");

function randomPassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = `!@#$%^&*()-_=+[]{}|;:'",.<>?/\\\``;

  const allChars = lowercase + uppercase + numbers + symbols;
  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}

generate.addEventListener("click", () => {
  output.innerHTML = randomPassword();
});
