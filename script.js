const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );


const arrow1 = document.querySelector(".arrow_down_1")
const dropdown = document.querySelector(".dropdown_content_1")

arrow1.addEventListener("click", () => {
    dropdown.classList.toggle("hide");
    arrow1.classList.toggle("active_arrow");
});


const arrow2 = document.querySelector(".arrow_down_2")
const dropdown2 = document.querySelector(".dropdown_content_2")



arrow2.addEventListener("click", () => {
    dropdown2.classList.toggle("hide");
    arrow2.classList.toggle("active_arrow")
});



const btn = document.querySelector(".btn_link")
const link_arrow = document.querySelector(".link_arrow") 


btn.addEventListener("mouseover", () => {
    console.log("djhkfjdsfk")
link_arrow.classList.toggle("hide_1");


});





  

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}


const slider = document.querySelector('.gallery'); //Indsæt 'parent' class i selectoren
let mouseDown = false; //vigtigt at have en 'boolean' der holder styr på om der bliver 'dragget'.
let startX, scrollLeft; //Et par variabler der skal bruges af flere af nedenstående funktioner

let startDragging = function (e) { //Starter drag, sætter en startposition for scrolling og trækker offset (nuværende postion) fra
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft; //sætter startpostionen for scroll til musens postionen - eventuelle forhenværende scrollposition
    scrollLeft = slider.scrollLeft; //'scrollLeft' er den endelige variabel vi skal bruge til at definere positionen når vi er færdige med at 'dragge', her bliver den sat til vores globale variabel
};

let stopDragging = function (event) { //funktion til at stoppe drag
    mouseDown = false;
};

slider.addEventListener('mousemove', (e) => { //faktiske scroll funktion
    e.preventDefault();
    if(!mouseDown) { //checker at musen er nede og stopper hvis ikke 
        return;
    }
    const x = e.pageX - slider.offsetLeft; //opdatere x position baseret på musen
    const scroll = x - startX; //definere evenetuelle start x
    slider.scrollLeft = scrollLeft - scroll; //opdatere vores scroll position baseret på drag
});

slider.addEventListener('mousedown', startDragging, false); //lytter efter alle de fornødne muse-events
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



