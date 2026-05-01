const texts = ["Hi, I'm Darpan", "Data Analyst", "Python Developer"];
let count = 0;
let index = 0;

function type() {
  let current = texts[count];
  let display = current.slice(0, index++);

  document.getElementById("typing").textContent = display;

  if (index > current.length) {
    index = 0;
    count = (count + 1) % texts.length;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 40);
  }
}

type();
