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


// form =============================

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    // Input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (!name || !email || !subject || !message) {
      alert('⚠️ Please fill in all fields.');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('❌ Please enter a valid email address.');
      return;
    }

    // If everything is valid
    alert('✅ Thank you! Your message has been sent.');
    
    // Optional: Clear form
    form.reset();
  });


    

