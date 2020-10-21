const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 0.9, stagger: .21})
tl.to(".slider", {y: '-100%', duration: 1.5, delay: .5})
tl.to('.intro', {y: '-100%', duration: 1}, "-=1")
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1.7})
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1.7}, "-=1.5")
