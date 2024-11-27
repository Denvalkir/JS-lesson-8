const buttonBlackTheme = document.querySelector("#btnBlackTheme");
const buttonWhiteTheme = document.querySelector("#btnWhiteTheme");
const root = document.querySelector(":root");

const themes = {
  black: {
    "--bg-color": "black",
    "--h2-color": "white",
    "--p-color": "white",
  },
  white: {
    "--bg-color": "white",
    "--h2-color": "black",
    "--p-color": "purple",
  },
};

let blackTheme = JSON.parse(localStorage.getItem("blackTheme"));
let whiteTheme = JSON.parse(localStorage.getItem("whiteTheme"));

buttonBlackTheme.addEventListener("click", btnChangeBlack);
buttonWhiteTheme.addEventListener("click", btnChangeWhite);

function btnChangeBlack() {
  blackTheme = true;
  whiteTheme = false;
  localStorage.setItem("blackTheme", blackTheme);
  localStorage.setItem("whiteTheme", whiteTheme);
  changeTheme(blackTheme);
}

function btnChangeWhite() {
  whiteTheme = true;
  blackTheme = false;
  localStorage.setItem("whiteTheme", whiteTheme);
  localStorage.setItem("blackTheme", blackTheme);
  changeTheme(whiteTheme);
}

function changeTheme(value) {
  let theme = "";
  if ((value = blackTheme)) {
    theme = "black";
  } else {
    theme = "white";
  }

  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
