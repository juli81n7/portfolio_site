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



