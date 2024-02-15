const hamburger = () => {

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuBlock = menu.querySelector('.menu__block'),
        close = document.querySelector('.menu__close');
    let isOpen = false;

    const toggleMenu = () => {
        menu.classList.toggle('active');
        isOpen = !isOpen;
    };
    
    const closeMenu = () => {
        menu.classList.remove('active');
        isOpen = !isOpen;
    };
    
    document.addEventListener('click', (e) => {
        if (isOpen && !menuBlock.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    hamburger.addEventListener('click', () => {
        toggleMenu();
    });

    close.addEventListener('click', () => {
        closeMenu();
    });
};

export default hamburger;