import gsap from 'gsap';

let tl = gsap.timeline();

const openMenu = (width) => {
  tl.to('body', { duration: 0.01, overflow: 'hidden' })
    .to('.main', {
      duration: 0.8,
      y: '50vh',
      ease: 'expo.inOut'
    })
    .to('.hamburger-menu span', {
      duration: '0.6',
      delay: -1,
      scaleX: 0,
      ease: 'expo.inOut'
    })
    .to('.bar-one', 0.3, {
      delay: -0.6,
      top: 3.5,
      rotate: '45degree',
      ease: 'expo.inOut'
    })
    .to('.bar-two', 0.3, {
      delay: -0.6,
      top: -4.5,
      rotate: '-45degree',
      ease: 'expo.inOut'
    })
    .to('.bar-one', 0.4, {
      scaleX: 1
    })
    .to('.bar-two', 0.4, {
      delay: -0.4,
      scaleX: 1
    });
};

const closeMenu = () => {
  tl.to('.main', {
    duration: 1,
    y: 0,
    ease: 'expo.inOut'
  })
    .to('.hamburger-menu span', {
      duration: '0.6',
      scaleX: 0,
      ease: 'expo.inOut',
      delay: -1
    })
    .to('.bar-one', 0.3, {
      delay: -0.6,
      top: 0,
      rotate: 0,
      ease: 'expo.inOut'
    })
    .to('.bar-two', 0.3, {
      delay: -0.6,
      top: 0,
      rotate: 0,
      ease: 'expo.inOut'
    })
    .to('.bar-one', 0.4, {
      scaleX: 1
    })
    .to('.bar-two', 0.4, {
      delay: -0.4,
      scaleX: 1
    });
  gsap.to('body', { overflow: 'auto' });
};

export { openMenu, closeMenu };
