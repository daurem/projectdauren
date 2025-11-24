const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// swiper.on("slideNextTransitionEnd", () => {
// });


document.querySelectorAll('.btns').forEach(block => {
  const minus = document.querySelector('.btn-minus');
  const plus = document.querySelector('.btn-plus');
  const countEl = document.querySelector('.btn-count');
  const btn = document.querySelector('#btn');

  let count = 0;

  plus.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
    btn.textContent = countEl;
  });

  minus.addEventListener('click', () => {
    if (count > 1) {
      count--;
      btn.textContent = count;
    }
  });
});

// document.querySelectorAll('.btns1 .btn').forEach(button => {
//     button.addEventListener('click', () => {
//         window.location.href = 'next.html';
//     });
// });





  
