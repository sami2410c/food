function demo() {
    const email = document.getElementById("email").value;
    alert(email);
}




  let cards = document.querySelectorAll('.break-fast-inner,.contact-1, .contact-2');

  function animateCardsOnScroll () {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 50) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateCardsOnScroll);
  window.addEventListener('load', animateCardsOnScroll);





//  let card = document.querySelectorAll('.break-fast-inner').forEach((card, index) => {
//     card.addEventListener('click', () => {
//       const popup = document.querySelectorAll('.popup')[index];
//       popup.style.display = 'flex';  // Popup ko show karo
//     });
//   });
  

let card = document.querySelectorAll('.break-fast-inner').forEach((card, index) => {
card.addEventListener('click',() =>{
  let popups =document.querySelectorAll('.popup')[index];
  popups.style.display='flex';
});
});







  document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const popup = closeBtn.closest('.popup');
      popup.style.display = 'none'; // Popup ko hide karo
    });
  });
  
  

