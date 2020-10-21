const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: .7, stagger: .2});
tl.to(".slider", {y: '-100%', duration: 1.5, delay: 1.});
tl.to('.intro', {y: '-100%', duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1.7});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1.7}, "-=1.5");

const button = document.querySelector('.button');
const overlay = document.querySelector('.overlay');
const exit = document.querySelector('.exit');

var tl_button = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}});

tl_button.paused(true);
tl_button.to(".overlay", {clipPath: 'circle(100%)'});
tl_button.to('.menu-container', {opacity:1, y:'30px', stagger: 0.1}, "-=1");

button.addEventListener('click', () => {
    tl_button.play()
})