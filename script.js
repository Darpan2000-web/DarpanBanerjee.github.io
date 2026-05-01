const texts = ["Hi, I'm Darpan Banerjee", "Data Analyst", "Python Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      current = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = texts[i].substring(0, j--);
    }

    document.getElementById("typing").textContent = current;

    if (j === texts[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, isDeleting ? 30 : 50);
}

type();
