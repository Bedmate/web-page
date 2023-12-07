const pageWrap = document.querySelector(".page-wrap");
const containers = document.querySelectorAll(".cont");
const yearlyBtn = document.querySelector(".yearly-btn");
const navMobile = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".nav-toggle");
const planPeriods = document.querySelectorAll(".period");
const monthlyBtn = document.querySelector(".monthly-btn");
const closeNavMobile = document.querySelector(".close-btn");
const romaticLeft = document.querySelector(".romantic-left");
const romaticBlock = document.querySelector(".romantic-block");
const targetBlocks = document.querySelectorAll(".target-block");
// accodion
const accBtns = document.querySelectorAll(".accordian-btn");
console.log(accBtns);
const accBodys = document.querySelectorAll(".accordian-body");
console.log(accBodys);

navToggle.addEventListener("click", () => {
  navMobile.classList.remove("hidden");
  pageWrap.classList.add("hidden");
});
closeNavMobile.addEventListener("click", () => {
  navMobile.classList.add("hidden");
  pageWrap.classList.remove("hidden");
});

window.addEventListener("scroll", () => {
  targetBlocks.forEach((targetBlock, index) => {
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (blockPosition < screenHeight / 2) {
      containers[index].classList.add("animate");
    } else containers[index].classList.remove("animate");
  });
});

// active subscription switch
if (document.querySelector(".pricing")) {
  monthlyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    monthlyBtn.classList.add("btn-active");
    yearlyBtn.classList.remove("btn-active");
    planPeriods.forEach((planPeriod) => {
      planPeriod.textContent = "monthly";
    });
  });

  yearlyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    yearlyBtn.classList.add("btn-active");
    monthlyBtn.classList.remove("btn-active");
    planPeriods.forEach((planPeriod) => {
      planPeriod.textContent = "yearly";
    });
  });
}

if (document.querySelector(".goal")) {
  window.addEventListener("scroll", () => {
    const blockPosition = romaticBlock.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (blockPosition < screenHeight / 2) {
      romaticLeft.classList.add("romantic-animate");
    } else romaticLeft.classList.remove("romantic-animate");
  });
}

if (document.querySelector(".waitlist")) {
  accBtns.forEach((accBtn, index) => {
    accBtn.addEventListener("click", () => {
      accBodys[index].classList.toggle("hidden");
      accBtn.classList.toggle("rotate");
    });
  });
}

if (document.querySelector(".career-page")) {
  const stackCont = document.querySelectorAll(".state");
  console.log(stackCont);
}
