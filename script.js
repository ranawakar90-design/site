function login() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const code = document.getElementById("code").value;

  // CHANGE THESE TO YOUR OWN SECRET DETAILS
  if (name === "Tuvini" && password === "Methum" && code === "173") {
    showValentinePage(name);
  } else {
    document.getElementById("error").innerText =
      "Oops! That doesn't look right 💔";
  }
}

function showValentinePage(name) {
  document.body.innerHTML = `
    <div class="container">
      <h1>💖 Hi ${name}! 💖</h1>
      <p>You make my world brighter every day ✨</p>
      <h2>Will you be my Valentine? 💌</h2>

      <button onclick="yes()">YES 💕</button>
      <button onclick="no()">NO 😭</button>
    </div>
  `;
}

function yes() {
  document.body.innerHTML = `
    <div class="container">
      <h1>💞 YAY!!! 💞</h1>
      <p>You just made me the happiest person alive 😍</p>
      <p>Happy Valentine’s Day 💐</p>
    </div>
  `;
}

function no() {
  alert("That button is broken 😤 Try again!");
}
function showValentinePage(name) {
  document.body.innerHTML = `
    <div class="container">
      <h1>💖 Hi ${name}! 💖</h1>

      <img src="images/us1.jpg" class="photo">
      <img src="images/us2.jpg" class="photo">

      <p>You make my world brighter every day ✨</p>
      <h2>Will you be my Valentine? 💌</h2>

      <button onclick="yes()">YES 💕</button>
      <button onclick="no()">NO 😭</button>
    </div>
  `;
}
