let hrElement;
let counter = 50;

for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  hrElement.classList.add("r-hr")
  hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  hrElement.style.animationDuration = 0.3 + Math.random() * 0.5 + "s";
  hrElement.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(hrElement);
}
