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

//partners logo slide carousel
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

//Testmonial slide
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".testimonial-slide");
  const slides = document.querySelectorAll(".slide-content");
  const totalSlides = slides.length;
  let currentSlide = 0;
  let startX;

  function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function startTouch(e) {
    startX = e.touches[0].clientX;
  }

  function moveTouch(e) {
    if (startX === undefined) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      startX = undefined;
    }
  }

  // Automatic swipe every 3 seconds
  setInterval(function () {
    nextSlide();
  }, 5000);
});