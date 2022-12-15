var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
   
  });
  // 
  var swiper = new Swiper(".sw", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // sticky navigation
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset
  if(currentScroll <= 0)
  {
    body.classList.remove('scroll-up')
  }
  if(currentScroll > lastScroll && !body.classList.contains('scroll-down'))
  {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }
  if(currentScroll < lastScroll && body.classList.contains('scroll-down'))
  {
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }

  lastScroll = currentScroll;
})