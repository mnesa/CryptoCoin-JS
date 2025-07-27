
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





    //  if i want 1 JS page for all JS then Use below code


//     const track = document.getElementById('sliderTrack');
// const slides = document.querySelectorAll('.slide');

// if (track && slides.length >= 3) {
//   const totalSlides = slides.length;
//   let index = 0;

//   // Clone first 3 slides to end for infinite effect
//   for (let i = 0; i < 3; i++) {
//     const clone = slides[i].cloneNode(true);
//     track.appendChild(clone);
//   }

//   function move(dir) {
//     const slideWidth = slides[0].offsetWidth + 16; // gap
//     index += dir;
//     track.style.transition = 'transform 0.5s ease-in-out';
//     track.style.transform = `translateX(-${index * slideWidth}px)`;

//     if (index >= totalSlides) {
//       setTimeout(() => {
//         track.style.transition = 'none';
//         index = 0;
//         track.style.transform = `translateX(-${index * slideWidth}px)`;
//       }, 500);
//     } else if (index < 0) {
//       index = totalSlides - 1;
//       track.style.transition = 'none';
//       track.style.transform = `translateX(-${index * slideWidth}px)`;
//     }
//   }
// }


  




    

