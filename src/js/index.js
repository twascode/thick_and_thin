// MUSIC BACKSOUND
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};
// MOTION AND PARALAX

var rellax = new Rellax(".rellax");
var controller = new ScrollMagic.Controller();

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  TextPlugin
  // ScrollSmoother
);
gsap.config({ trialWarn: false });

gsap.defaults({ ease: "none" });
// smoothScroll("#bd");
ScrollTrigger.normalizeScroll(true);

// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
// });
// var scroller = new SmoothScroll({// element container to scroll
//   scrollEase: 0.1, // scroll speed
//   maxOffset: 500
// });

smoothScroll({ duration: 99999999999 });

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
new ScrollMagic.Scene({
  triggerElement: "#topo-2",
  triggerHook: 0.3, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: -50, // move trigger to center of element
})
  .setClassToggle("#topo-2", "visible") // add class to reveal
  .addTo(controller);

// ScrollReveal().reveal("#desc", {
//   duration: 1000,
//   move: 0,
// });
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
var chapter2 = gsap
  .timeline({
    defaults: { duration: 10 },
    scrollTrigger: {
      trigger: "#topo-2",
      scrub: true,
      start: "-=300",
      end: "+=250",
    },
  })
  .from("#title_chapter2", { duration: 10, text: "" });
var end = gsap
  .timeline({
    defaults: { duration: 20 },
    scrollTrigger: {
      trigger: "#topo-3",
      scrub: true,
      start: "-=400",
      end: "+=250",
    },
  })
  .from("#title_end", { duration: 25, text: "" });
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
    defaults: { duration: 5 },
    scrollTrigger: {
      trigger: "#motion2",
      scrub: true,
      start: "-=800",
      end: "+=300",
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
ScrollTrigger.create({
  trigger: ".pict-2",
  start: "-=500",
  end: "+=850",
  toggleClass: { targets: "#pict-2lr", className: "swing-in-top-bck" },
});
ScrollTrigger.create({
  trigger: ".pict-1",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-1r",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-1",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-1l",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-3",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-3lr",
    className: "slide-in-bck-center",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4ar",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4cr",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4bl",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4cl",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4al",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-4",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-4br",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5ar",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5cr",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5bl",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5cl",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5al",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-5",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-5br",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6ar",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6cr",
    className: "rotate-in-2-tr-cw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6bl",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6cl",
    className: "rotate-in-2-tl-ccw",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6al",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-6",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-6br",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-8",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-8alr",
    className: "slide-in-top",
  },
});
ScrollTrigger.create({
  trigger: ".pict-8",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-8bl",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-8",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-8br",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-9",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-9alr",
    className: "slide-in-top",
  },
});
ScrollTrigger.create({
  trigger: ".pict-9",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-9bl",
    className: "slide-in-bl",
  },
});
ScrollTrigger.create({
  trigger: ".pict-9",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-9bm",
    className: "slide-in-bottom",
  },
});
ScrollTrigger.create({
  trigger: ".pict-9",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-9br",
    className: "slide-in-br",
  },
});
ScrollTrigger.create({
  trigger: ".pict-10",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-10alr",
    className: "slide-in-top",
  },
});
ScrollTrigger.create({
  trigger: ".pict-10",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-10bl",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-10",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-10br",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-11",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-11bl",
    className: "slide-in-left",
  },
});
ScrollTrigger.create({
  trigger: ".pict-11",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-11bm",
    className: "slide-in-top",
  },
});
ScrollTrigger.create({
  trigger: ".pict-11",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-11br",
    className: "slide-in-right",
  },
});
ScrollTrigger.create({
  trigger: ".pict-12",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-12alr",
    className: "slide-in-top",
  },
});
ScrollTrigger.create({
  trigger: ".pict-12",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-12bl",
    className: "slide-in-bl",
  },
});
ScrollTrigger.create({
  trigger: ".pict-12",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-12bm",
    className: "slide-in-bottom",
  },
});
ScrollTrigger.create({
  trigger: ".pict-12",
  start: "-=600",
  end: "+=1050",
  toggleClass: {
    targets: "#pict-12br",
    className: "slide-in-br",
  },
});
rellax.refresh();
