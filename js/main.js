// ================ Counter 
let valueDisplays = document.querySelectorAll('.num');
let interval = 1000; // Faster animation duration

function startCounting(entry) {
  let valueDisplay = entry.target;
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let step = Math.ceil(endValue / 100);
  let duration = Math.floor(interval / (endValue / step));

  let counter = setInterval(() => {
    startValue += step;
    if (startValue >= endValue) {
      valueDisplay.textContent = endValue;
      clearInterval(counter);
    } else {
      valueDisplay.textContent = startValue;
    }
  }, duration);
}

// counter scroll
// Intersection Observer to trigger on scroll
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry);
      observer.unobserve(entry.target); // Run once
    }
  });
}, {
  threshold: 0.5 // Start when 50% visible
});

// Observe each counter
valueDisplays.forEach(el => observer.observe(el));


// ============ Roadmap section
  const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let index = 0;

    // Clone first 3 slides to end for infinite effect
    for (let i = 0; i < 3; i++) {
      const clone = slides[i].cloneNode(true);
      track.appendChild(clone);
    }

    function move(dir) {
      const slideWidth = slides[0].offsetWidth + 16; // gap
      index += dir;
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${index * slideWidth}px)`;

      if (index >= totalSlides) {
        setTimeout(() => {
          track.style.transition = 'none';
          index = 0;
          track.style.transform = `translateX(-${index * slideWidth}px)`;
        }, 500);
      } else if (index < 0) {
        index = totalSlides - 1;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${index * slideWidth}px)`;
      }
    }

  


// ========== FAQ SEction
 const questions = document.querySelectorAll('.faq-question');

    questions.forEach(q => {
      q.addEventListener('click', () => {
        const open = document.querySelector('.faq-question.active');
        if (open && open !== q) {
          open.classList.remove('active');
          open.nextElementSibling.classList.remove('show');
          const oldIcon = open.querySelector('.faq-icon');
          oldIcon.classList.remove('fa-angle-up');
          oldIcon.classList.add('fa-angle-down');
        }

        q.classList.toggle('active');
        q.nextElementSibling.classList.toggle('show');

        const icon = q.querySelector('.faq-icon');
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
      });
    });



    // ================== menu
    const menu = document.getElementById('menu');
    document.getElementById('openBtn').addEventListener('click', ()=>{
      menu.style.display = 'block';
    })
    document.getElementById('closeBtn').addEventListener('click', ()=>{
      menu.style.display = 'none';
    })

// =================== page scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150; // কত দূর থাকলে animate হবে

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll); // initial load check



    

