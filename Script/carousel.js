function headerContentLoaded() {
    // Changing the logo pics when resolution hits 1014 width
    function checkResolution(){
        const logo = document.querySelector('.logo img');

        const current_width = window.innerWidth;
        
        desired_width = 1014;

        if (current_width <= desired_width){
            console.log('Resolution chaged');
            logo.src = "../files/Logo-dark.png";
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
};
const gallery = document.querySelector(".gallery");
const immageGallery = document.querySelector(".image-gallery");
const galleryitems = document.querySelectorAll(".gallery-item");
const controlprevious = document.querySelector(".previous");
const controlnext = document.querySelector(".next");



console.log('Swiper not  swiping')

document.addEventListener("DOMContentLoaded", function () {
    const clogo = document.querySelector(".collab-logo-item");
    const logos = document.querySelectorAll(".collab-logo");
    let currentIndex = 0;
    let startX;
  
    function showLogo(index) {
      const logoWidth = logos[0].offsetWidth;
      clogo.style.transform = `translateX(${-index * logoWidth}px)`;
    }
  
    function nextLogo() {
      currentIndex = (currentIndex + 1) % logos.length;
      showLogo(currentIndex);
    }
  
    function prevLogo() {
      currentIndex = (currentIndex - 1 + logos.length) % logos.length;
      showLogo(currentIndex);
    }
  
    function startSwipe(e) {
      startX = e.clientX || e.touches[0].clientX;
    }
  
    function endSwipe(e) {
      if (startX === undefined) return;
      const endX = e.clientX || e.changedTouches[0].clientX;
      const diffX = startX - endX;
  
      if (diffX > 30) {
        nextLogo();
      } else if (diffX < -30) {
        prevLogo();
      }
  
      startX = undefined;
    }
  
    clogo.addEventListener("mousedown", startSwipe);
    clogo.addEventListener("touchstart", startSwipe);
  
    clogo.addEventListener("mouseup", endSwipe);
    clogo.addEventListener("touchend", endSwipe);
});