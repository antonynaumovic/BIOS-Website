const menuBtn = document.querySelector('.menu-btn');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!showMenu)
    {
        menuBtn.classList.add('close');
        openNav()
        showMenu = true;
    }

    else
    {
        menuBtn.classList.remove('close');
        closeNav()
        showMenu = false;
    }
}