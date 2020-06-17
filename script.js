/*  variables */
let pin = document.getElementById("myPin"),
    moveBy = 10;

// initial pin position
window.addEventListener("load", () => {
  pin.style.left = 0;
  pin.style.top = 0;
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    pin.style.left = parseInt(pin.style.left) - moveBy + "px";
    break;

    case "ArrowRight":
    pin.style.left = parseInt(pin.style.left) + moveBy + "px";
    break;

    case "ArrowUp":
    pin.style.top = parseInt(pin.style.top) - moveBy + "px";
    break;

    case "ArrowDown":
    pin.style.top = parseInt(pin.style.top) + moveBy + "px";
    break;

    case "q":
    pin.style.left = parseInt(pin.style.left) - moveBy + "px";
    pin.style.top = parseInt(pin.style.top) - moveBy + "px";
    break;

    case "z":
    pin.style.left = parseInt(pin.style.left) + moveBy + "px";
    pin.style.top = parseInt(pin.style.top) - moveBy + "px";
    break;

    case "d":
    pin.style.left = parseInt(pin.style.left) + moveBy + "px";
    pin.style.top = parseInt(pin.style.top) + moveBy + "px";
    break;

    case "s":
    pin.style.left = parseInt(pin.style.left) - moveBy + "px";
    pin.style.top = parseInt(pin.style.top) + moveBy + "px";
    break;
  }
});
