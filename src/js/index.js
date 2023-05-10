// MUSIC BACKSOUND

// MOTION AND PARALAX

var rellax = new Rellax(".rellax");
var controller = new ScrollMagic.Controller();

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);
gsap.config({ trialWarn: false });

gsap.defaults({ ease: "none" });
// smoothScroll(".bd");

ScrollReveal({ reset: true });

new ScrollMagic.Scene({
  triggerElement: "#spark1",
  triggerHook: 15, // show, when scrolled 10% into view
  duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50, // move trigger to center of element
})
  .setClassToggle("#spark1", "visible") // add class to reveal
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#topo",
  triggerHook: 0.3, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: -50, // move trigger to center of element
})
  .setClassToggle("#topo", "visible") // add class to reveal
  .addTo(controller);

ScrollReveal().reveal("#desc", {
  duration: 1000,
  move: 0,
});
var chapter = gsap
  .timeline({
    defaults: { duration: 10 },
    scrollTrigger: {
      trigger: "#topo",
      scrub: true,
      start: "-=300",
      end: "+=250",
    },
  })
  .from("#title_chapter", { duration: 10, text: "" });
var ded = gsap
  .timeline({
    defaults: { duration: 5 },
    scrollTrigger: {
      trigger: "#motion",
      scrub: true,
      start: "-=800",
      end: "+=500",
    },
  })
  .to(".obj1", { duration: 5, autoAlpha: 1, ease: "circ.in" })
  .to(
    ".obj1",
    {
      duration: 10,
      motionPath: {
        path: ".motionpath",
        align: ".motionpath",
        offsetX: -120,
        offsetY: -65,
        // autoRotate: true,
      },
      ease: "circ.in",
    },
    0
  );
var ded2 = gsap
  .timeline({
    defaults: { duration: 5 },
    scrollTrigger: {
      trigger: "#motion",
      scrub: true,
      start: "-=800",
      end: "+=500",
    },
  })
  .to(".obj2", { duration: 5, autoAlpha: 1, ease: "circ.in" })
  .to(
    ".obj2",
    {
      duration: 10,
      motionPath: {
        path: ".motionpath2",
        align: ".motionpath2",
        offsetX: -50,
        offsetY: -20,
        // autoRotate: true,
      },
      ease: "circ.in",
    },
    0
  );
var ded3 = gsap
  .timeline({
    defaults: { duration: 3 },
    scrollTrigger: {
      trigger: "#motion2",
      scrub: true,
      start: "-=1200",
      end: "+=500",
    },
  })
  .to(".obj3", { duration: 3, autoAlpha: 1, ease: "circ.in" })
  .to(
    ".obj3",
    {
      duration: 10,
      motionPath: {
        path: ".motionpath3",
        align: ".motionpath3",
        offsetX: -70,
        offsetY: -50,
        // autoRotate: true,
      },
      ease: "circ.in",
    },
    0
  );

rellax.refresh();
