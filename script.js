window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  var header = document.getElementById("myheader");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  var link = document.getElementById("link");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    link.classList.add("scroll");
  } else {
    link.classList.remove("scroll");
  }
  var bar = document.getElementById("bar");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    bar.classList.add("scroll");
  } else {
    bar.classList.remove("scroll");
  }
  var bar1 = document.getElementById("bar1");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    bar1.classList.add("scroll");
  } else {
    bar1.classList.remove("scroll");
  }
  var bar2 = document.getElementById("bar2");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    bar2.classList.add("scroll");
  } else {
    bar2.classList.remove("scroll");
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
  anchor.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
    }
  });
});

var myAudio = document.getElementById("myAudio")
var icon = document.getElementById("icon")

icon.onclick = function(){
  if(myAudio.paused){
    myAudio.play();
    icon.src = "img/play.png";
  }else{
    myAudio.pause();
    icon.src = "img/pause.png";
  }
}