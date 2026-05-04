const texts = ["Hi, I'm Darpan", "Data Analyst", "Python Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500); // pause without deleting (smooth)
  } else {
    setTimeout(type, 40); // faster typing = smoother
  }
}

type();


/* ADD THIS BELOW 👇 */
function calculateDuration() {
  const elements = document.querySelectorAll(".exp-duration");

  elements.forEach(el => {
    const start = el.getAttribute("data-start");
    const [year, month] = start.split("-").map(Number);

    const startDate = new Date(year, month - 1);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = `Mar 2025 – Present`;

    if (years > 0) {
      result += ` (${years} yr${years > 1 ? "s" : ""}`;
      if (months > 0) result += ` ${months} mo`;
      result += ")";
    } else {
      result += ` (${months} mo)`;
    }

    el.textContent = result;
  });
}

calculateDuration();


async function updateVisitorCount() {
  const namespace = "darpan-portfolio-2026"; // change once and keep it
  const key = "visits";

  try {
    const res = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
    const data = await res.json();

    // DIRECT UPDATE (no animation)
    document.getElementById("visitor-count").textContent = data.value;

  } catch (err) {
    console.error(err);
    document.getElementById("visitor-count").textContent = "0";
  }
}

updateVisitorCount();

// Smooth animation effect
function animateCounter(target) {
  let count = 0;
  const speed = 20;

  const update = () => {
    if (count < target) {
      count += Math.ceil(target / 50);
      document.getElementById("visitor-count").textContent = count;
      setTimeout(update, speed);
    } else {
      document.getElementById("visitor-count").textContent = target;
    }
  };

  update();
}

updateVisitorCount();
