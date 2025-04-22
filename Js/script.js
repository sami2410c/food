function demo() {
    const email = document.getElementById("email").value;
    alert(email);
}




  let cards = document.querySelectorAll('.break-fast-inner,.contact-1, .contact-2');

  function animateCardsOnScroll() {
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



  