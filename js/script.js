// Background slideshow
const images = [
    'images/imgs4.jpg',
    'images/imgs2.jpg',
    'images/imgs1.jpg'
  ]; // Replace with your actual image paths
  
  let index = 0;
  const hero = document.querySelector('.hero');
  
  function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }
  
  setInterval(changeBackground, 5000);
  changeBackground(); // Initial call
  
  // Typed text
  document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typed-text", {
      strings: ["Welcome to DBS", "Service with calibre", "Smart Business Solutions"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  });
  

  const searchToggle = document.getElementById('searchToggle');
  const searchRibbon = document.getElementById('searchRibbon');
  const closeSearch = document.getElementById('closeSearch');

  searchToggle.addEventListener('click', () => {
    searchRibbon.classList.remove('d-none');
  });

  closeSearch.addEventListener('click', () => {
    searchRibbon.classList.add('d-none');
  });

  /* whatsapp float */
  document.getElementById("chat-toggle").addEventListener("click", function () {
    document.getElementById("whatsapp-chat").style.display = "block";
    this.style.display = "none";
  });

  document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("whatsapp-chat").style.display = "none";
    document.getElementById("chat-toggle").style.display = "flex";
  })