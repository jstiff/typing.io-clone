const btnGitHub = document.getElementById("btn2");
const code = document.getElementById("mainContainer");
btnGitHub.addEventListener("click", gitHubFetch);

async function gitHubFetch(poop) {
  console.log(poop.type + poop.screenY);
  const url =
    "https://api.github.com/repos/substack/node-falafel/contents/index.js";
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  const anchor = document.createElement("a");
  anchor.href = result.download_url;
  anchor.textContent = result.name;
  code.appendChild(anchor);

  code.appendChild(document.createElement("br"));
}

const spanChar = document.querySelector("span");
const characters = document.querySelectorAll("span");

console.log(
  characters.forEach((elem) => {
    console.log(elem);
  })
);
let keyIndex = 0;
function keyHandler(eventData) {
  //eventData.shiftKey = false;

  const currentChar = characters[keyIndex];
  const nextChar = characters[keyIndex + 1];

  if (currentChar.innerText === eventData.key) {
    keyIndex += 1;
    nextChar.setAttribute("class", "correct");
    currentChar.setAttribute("class", "remove");
    //setAttribute just overides the current class
    //currentChar.classList.add("correct");
    //currentChar.classList.remove("wrong");
  } else if (eventData.shiftKey) {
    currentChar.setAttribute("class", "shiftKey");
  } else {
    console.log("falied!!!");
    currentChar.setAttribute("class", "wrong");
    //currentChar.classList.add("wrong");
    //currentChar.classList.remove("correct");
  }
}
window.addEventListener("load", () => {
  characters[0].setAttribute("class", "correct");
});
document.addEventListener("keydown", keyHandler);

document.addEventListener("keypress", function () {
  code.style.backgroundColor = "#C0C0C0";
});
