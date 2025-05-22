function demo() {
    const email = document.getElementById("email").value;
    alert(email);
}




  let cards = document.querySelectorAll('.Electronic-Appliances,.contact-1, .contact-2');

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






     
let card = document.querySelectorAll('.Electronic-Appliances').forEach((card, index) => {
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
  
  



let userIcon = document.querySelector('.fa-user');
let Inputs = document.querySelectorAll('.user-input');

userIcon.addEventListener('click', () =>{
  Inputs.forEach(input2 =>{
    if (input2.style.display === 'block')
    {
      input2.style.display='none';

    }
    else{
       input2.style.display='block';

    }
  });
});


function save(){

  let email = document.getElementById("useremail").value;
  let password = document.getElementById("userpassword").value;

  localStorage.setItem("email key", email)
  localStorage.setItem("password key", password)

  alert("data insert")
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


const containers = document.querySelectorAll('.Air-Conditioner-Container');
const leftBtns = document.querySelectorAll('.left');
const rightBtns = document.querySelectorAll('.right');

const scrollAmount = 250;

leftBtns.forEach((btn, index) => {
  btn.onclick = () => {
    containers[index].scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };
});

rightBtns.forEach((btn, index) => {
  btn.onclick = () => {
    containers[index].scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
});

 function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
  }



