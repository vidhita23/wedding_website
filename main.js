const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");


let index = 0;
display(index);

function display(index)
{
    slides.forEach((slide) => {
        slide.style.display="none";
    });
    slides[index].style.display="flex"
}


function nextSlide(){
    index++;
    if(index > slides.length-1)
    {
        index=0;
    }
   display(index);
}

function prevSlide(){
    index--;
    if(index < 0)
    {
        index = slides.length-1;
    }
    display(index);
}

next.addEventListener("click" , nextSlide);
prev.addEventListener("click" , prevSlide);



// -------countdown

let count = new Date("Jan 1,2021,00:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
        var d = count-now;

    let days = Math.floor(d/(1000*60*60*24));
    let hours = Math.floor((d % (1000*60*60*24)) / (1000*60*60));
    let minutes =Math.floor((d % (1000*60*60)) / (1000*60));
    let seconds =Math.floor((d % (1000*60)) / (1000));

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;
},1000);

//--------------------------- memory

// Open the Modal
function openModal() {
  document.getElementById("mymem-Modal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("mymem-Modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demons");
  var captionText = document.getElementById("mem-caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
