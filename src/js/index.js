// MUSIC BACKSOUND

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
// smoothScroll(".bd");
ScrollTrigger.normalizeScroll(true);

// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
// });

smoothScroll({ duration: 700 });

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
videojs.getPlayer("myPlayerID").ready(function () {
  // +++ Initialize variables and check for mobile device +++
  var player = this,
    playerContainer = document.getElementById("videoContainer"),
    isMobile =
      /Android|webOS|iPhone|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      )
        ? true
        : false;

  if (isMobile) {
    // +++ Define a modal close button +++
    var CloseModal = videojs.getComponent("button");
    var CloseModal_ = videojs.extend(CloseModal, {
      constructor: function () {
        CloseModal.apply(this, arguments);
        this.addClass("vjs-close-modal");
        this.controlText("Close video");
      },
      handleClick: function () {
        playerContainer.style.maxWidth = "286px";
      },
    });

    videojs.registerComponent("CloseModal", CloseModal_);
    player.addChild("CloseModal", {});

    // +++ When playback begins, enter full width mode +++
    player.on("play", function () {
      playerContainer.style.width = "100%";
      playerContainer.style.maxWidth = "";
    });
  }

  // +++ When playback ends, exit full width mode +++
  player.on("ended", function () {
    playerContainer.style.maxWidth = "286px";
    player.currentTime(0);
  });
});
rellax.refresh();
