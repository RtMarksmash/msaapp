const sidebar = document.getElementById('sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');


menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});


/* function toggleMenu() {
          document.getElementById("sidebar").classList.toggle("active");
      } */