gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero-animated",
    pin: true,
    start: "top 0%",
    end: "300% ",
    scrub: true,
  },
});

t1.to(".esfera", { delay: 0.5, duration: 1, scale: 1.5, opacity: 0 }, "start")
  .to(".primera ", { delay: 0.5, duration: 1, scale: 1, opacity: 0 }, "start")
  .to("#hero-animated", { delay: 1.5, duration: 1, backgroundColor: "#E4DED5" }, "start")
  .to(".Segunda", { delay: 1.5, duration: 1, scale: 1, opacity: 1 }, "start")
  .to(".Segunda", { delay: 4.8, duration: 1, scale: 1.5, opacity: 0 }, "start")
  .to("#hero-animated", { delay: 5, duration: 2, backgroundImage: "linear-gradient(90deg, rgba(255,247,173,1) 0%, rgba(255,169,249,1) 100%)" }, "start")
  .to(".Tercera", { delay: 5, duration: 2, scale: 1, opacity: 1 }, "start")
  .to(".Tercera", { delay: 7.4, duration: 0.5, scale: 1.5, opacity: 0 }, "start")
  .to("#hero-animated", { delay: 7.5, duration: 2, backgroundImage: "linear-gradient(90deg, rgba(205,255,216,1) 0%, rgba(148,185,255,1) 100%)" }, "start")
  .to(".Cuarta", { delay: 7.5, duration: 1, scale: 1, opacity: 1 }, "start")
  .to("#hero-animated", { delay: 9.5, duration: 1, backgroundImage: "linear-gradient(90deg, rgba(230, 230, 230,1) 0%, rgba(230, 230, 230,1) 0%)" }, "start");
