let currentPage = 0;
const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");

function startLove() {
  music.play();
  nextPage();
}

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  if(currentPage < pages.length){
    pages[currentPage].classList.add("active");
  }
}

// NO button escape (Desktop + Mobile)
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Extra safety (if clicked)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
