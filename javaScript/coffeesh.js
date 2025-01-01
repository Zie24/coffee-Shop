let toggelBtn = document.querySelector('.toggle-menu');
let navbar = document.querySelector('.navbar');

toggelBtn.onclick = function(){
    this.classList.toggle('active');
    navbar.classList.toggle('open');
};