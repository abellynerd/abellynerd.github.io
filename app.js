// Bio image tooltip
const hovertexts = document.querySelectorAll(".hovertext");
// console.log(hovertexts.length);

function showImage(event, i) {
  let imi = document.getElementById("im" + i);
  console.log("im" + i);

  imi.style.display = "block";
  moveImage(event);
}

function moveImage(event, i) {
  let imi = document.getElementById("im" + i);
  let rect = imi.getBoundingClientRect();

  imi.style.left = event.clientX - 0.5 * rect.width + "px";
  imi.style.top = event.clientY - rect.height + "px";
}

function hideImage(event, i) {
  let imi = document.getElementById("im" + i);

  imi.style.display = "none";
}

if (hovertexts.length > 0) {
  for (let i = 1; i <= hovertexts.length; i++) {
    let txi = document.getElementById("tx" + i);

    if (!txi) continue;

    // console.log(txi.textContent);
    txi.addEventListener("mouseenter", (event) => {
      // im1.style.display = "block"
      // console.log("enter");
      // console.log(txi.textContent);

      showImage(event, i);
    });
    txi.addEventListener("mousemove", (event) => {
      // console.log("move");
      // console.log("moving trumpet");

      moveImage(event, i);
    });
    txi.addEventListener("mouseleave", (event) => {
      // console.log("leave");
      // console.log("quitting trumpet")
      hideImage(event, i);
    });
  }
}

// Work detail boxes
const details = document.querySelectorAll(".work-detail");
let sts = 0;
console.log(sts);

function openBox(event, i) {
  const dtb = document.getElementById("dtb" + i);
  const dtbox = document.getElementById("dtbox" + i);

  sts = sts + 10 ** (i - 1);

  // console.log("sts is " + sts);
  //   console.log(dtbox.textContent);

  dtb.classList.add("button-toggled");
  dtbox.style.display = "block";
}

function closeBox(event, i) {
  const dtb = document.getElementById("dtb" + i);
  const dtbox = document.getElementById("dtbox" + i);

  sts = sts - 10 ** (i - 1);

  // console.log("sts is " + sts);

  dtb.classList.remove("button-toggled");
  dtbox.style.display = "none";
}

if (details.length > 0) {
  for (let i = 1; i <= details.length; i++) {
    let dtli = document.getElementById("dtl" + i);

    if (!dtli) continue;

    dtli.addEventListener("click", (event) => {
      let digit = String(sts)[String(sts).length - i];
      if (digit > 0) {
        closeBox(event, i);
        // console.log("close")
        // console.log("digit " + i + " is " + digit);
      } else {
        openBox(event, i);
        // console.log("open")
        // console.log("digit " + i + " is " + digit);
      }
    });
  }
}

// CV Selection

const procv = document.getElementById("procv");
const acacv = document.getElementById("acacv");
const dprocv = document.getElementById("procv-display");
const dacacv = document.getElementById("acacv-display");
const probut = document.getElementById("probut");
const acabut = document.getElementById("acabut");

if (procv !== null) {
  procv.addEventListener("click", function (event) {
    dprocv.style.display = "block";
    dacacv.style.display = "none";
    procv.classList.add("cv-toggled");
    acacv.classList.remove("cv-toggled");

    probut.classList.add("button-toggled");
    acabut.classList.remove("button-toggled");
  });

  acacv.addEventListener("click", function (event) {
    dacacv.style.display = "block";
    dprocv.style.display = "none";
    acacv.classList.add("cv-toggled");
    procv.classList.remove("cv-toggled");

    acabut.classList.add("button-toggled");
    probut.classList.remove("button-toggled");
  });
}
