const showMenu = (event) => {
    const menu = document.querySelector('.menu');
    const i = document.querySelector('.menu-btn i')
    menu.classList.toggle('active');
    i.classList.toggle('active');
}

const makeMeActive = (event) => {
    const active = [...menuItems].filter(item => [...item.classList].includes('active'))[0];
    active.classList.remove('active');
    event.path[1].classList.add('active');
}

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', showMenu);

const menuItems = document.querySelectorAll('.navbar .menu a');
[...menuItems].map((item) => {
    item.addEventListener('click', makeMeActive);
});
