const wrapper = document.querySelector('.wrapper');
const body = document.body;

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const navButton = document.querySelector('.nav-button');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

navButton.addEventListener('click', () => {
    wrapper.classList.add('active-navbutton');
});

navButton.addEventListener('click', () => {
    body.classList.add('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-navbutton'); // Removing .active from wrapper
    body.classList.remove('active');  // Removing .active from <body>
});


/*=============== SCROLL SECTIONS ACTIVE-LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach (current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
