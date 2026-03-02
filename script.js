document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');  
  const navLinks = document.querySelector('.nav-items'); 
  hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle('active');  
    navLinks.classList.toggle('open');  
})});
