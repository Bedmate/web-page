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

// apply and form
const applyBtn = document.querySelector(".apply");
const applyModal = document.querySelector(".applyModal");
const applyForm = document.querySelector(".applyModal form");



// teams Image and position and slider
const allTeamsImage = document.querySelectorAll(".imageContainer")
const all_position = document.querySelectorAll(".all_position")
const prevBtn = document.querySelector(".prev_pos")
const nextBtn = document.querySelector(".next_pos")
const team_mobile = document.querySelectorAll(".mobile_team_members")

let position = 1

allTeamsImage.forEach((imgContainer, i) => {
    
  if(i === position){
    imgContainer.classList.add("currentSelectedTeam")
  }else{
    imgContainer.classList.remove("currentSelectedTeam")
  }

})

team_mobile.forEach((pos, i) => {
  pos.style.transform = `translateX(${i}00%)`
})



all_position.forEach((pos, i) => {
    
  if(i === position){
    pos.classList.add("curPos")
  }

})


function sliderFxn(){

  team_mobile.forEach((pos, i) => {
    pos.style.transform = `translateX(${100 * (i -position)}%)`
  })




allTeamsImage.forEach((imgContainer, i) => {

  if(i === position){
    imgContainer.classList.add("currentSelectedTeam")
  }else{
    imgContainer.classList.remove("currentSelectedTeam")
  }

})

all_position.forEach((pos, i) => {

if(i === position){
  pos.classList.add("curPos")
}else{
  pos.classList.remove("curPos")
}

})

}



prevBtn.addEventListener("click", function(){

   
    position--

    

    if(position < 0){
      position = allTeamsImage.length - 1
      position = team_mobile.length - 1

    } 

    sliderFxn()

  })



  nextBtn.addEventListener("click", function(){

    position++
    
 

    if(position > (allTeamsImage.length - 1)){
        position = 0
        

      } 
  
      sliderFxn()
  })

  // ====================







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
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm4").style.display = "none";
  document.getElementById("myForm5").style.display = "none";
}
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm4").style.display = "none";
  document.getElementById("myForm5").style.display = "none";
}
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm4").style.display = "none";
  document.getElementById("myForm5").style.display = "none";
}
function openForm4() {
  document.getElementById("myForm4").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm5").style.display = "none";
}
function openForm5() {
  document.getElementById("myForm5").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm4").style.display = "none";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}
function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}
function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
}


applyBtn.addEventListener("click", ()=>{
  applyModal.classList.remove("none")
})

applyForm.addEventListener("submit", (e)=>{
  e.preventDefault()
})
function closeForm(){

  applyModal.classList.add("none")
}