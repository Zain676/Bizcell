  (function(){
    const slider = document.querySelector(".testimonial-slider");
    const slides = document.querySelectorAll(".slide");
    let index = 0, interval = 4000;

    function goTo(i){
      slider.style.transform = `translateX(-${i * 100}%)`;
    }

    function next(){
      index = (index + 1) % slides.length;
      goTo(index);
    }

    let timer = setInterval(next, interval);

    // optional: pause on hover
    slider.addEventListener('mouseenter', ()=> clearInterval(timer));
    slider.addEventListener('mouseleave', ()=> timer = setInterval(next, interval));
  })();