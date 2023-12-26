// Changing the logo pics when resolution hits 1014 width
function checkResolution(){
    const logo = document.querySelector('.logo img');

    const current_width = window.innerWidth;
    
    desired_width = 1014;

    if (current_width <= desired_width){
        console.log('Resolution chaged');
        logo.src = "../src/files/Logo-dark.png";
        console.log('image chagned');
    }

    //For the menu slide down and up
    const openMenu = document.querySelector('.openmenu');
    const closeMenu = document.querySelector('.closemenu');
    const menu = document.querySelector('.flex');

    openMenu.addEventListener('click', function() {
        function opener(){
            menu.style.top = '0';
        };

        opener();
    });

    closeMenu.addEventListener('click', function() {
        function opener(){
            
            menu.style.top = '-400px';
        };

        opener();
    });


}

window.addEventListener('resize', checkResolution);

checkResolution()


const gallery = document.querySelector(".gallery");
const immageGallery = document.querySelector(".image-gallery");
const galleryitems = document.querySelectorAll(".gallery-item");
const controlprevious = document.querySelector(".previous");
const controlnext = document.querySelector(".next");
