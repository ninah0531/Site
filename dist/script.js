gsap.registerPlugin(ScrollTrigger);

// Banner Big Image
gsap.to(".bigimg", {
  duration: 2,
  // y: 1200,
  yPercent: 150,
  ease: "power2.inOut",
  yoyo: true,
  repeat: 1,
  repeatRefresh: true
});

// Banner Big Text
gsap.to(".initialcap", {
  duration: 1.5,
  scale: 2,
  delay: 0.5,
  transformOrigin: "top left",
  ease: "power2.inOut",
  yoyo: true,
  repeat: 1,
  repeatRefresh: true
});

// Banner Design Text
gsap.to(".name", {
  delay: 1,
  opacity: 0
});
gsap.to(".name", {
  delay: 1.5,
  left: "-100vw"
});
gsap.to(".name", {
  delay: 3,
  duration: 1.8,
  left: 0,
  opacity: 1
});

// About Section - Title
gsap.set(".About h2", {
  opacity: 0,
  y: -200
});
gsap.to(".About h2", {
  opacity: 0.15,
  y: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".About",
    start: "top center",
    end: "center",
    markers: false
  }
});

// About section - Image
gsap.set("#portrait", {
  opacity: 0,
  scale: 0
});
gsap.to("#portrait", {
  duration: 1.6,
  delay: 0.1,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".About",
    start: "top center",
    end: "center",
    markers: false
  }
});

// SheMade section - Title
gsap.set(".Shemade .sm .SMDescription", {
  y: -200,
  opacity: 0
});
gsap.to(".Shemade .sm .SMDescription", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Shemade",
    start: "top center",
    end: "center",
    markers: false
  }
});



// SheMade section - white border
gsap.set(".boxed", {
  opacity: 0,
  scale: 0.6,
  rotate: 15
});
gsap.to(".boxed", {
  duration: 1.5,
  opacity: 1,
  scale: 1,
  rotate: 0,
  ease: "power.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".SheMade",
    start: "top center",
    end: "center",
    markers: false
  }
});


// SheMade section - Images - left
gsap.set(".first, .bottom", {
  opacity: 0,
  rotate: 45,
  scale: 0.5
});
gsap.to(".first, .bottom", {
  duration: 1.6,
  delay: 0,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Shemade",
    start: "top center",
    end: "center",
    markers: false
  }
});
// right
gsap.set(".middle", {
  opacity: 0,
  rotate: -45,
  scale: 0.5
});
gsap.to(".middle", {
  duration: 1.6,
  delay: 0,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Shemade",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Portfolio section - Title
gsap.set(".Portfolio h2", {
  y: -200,
  opacity: 0
});
gsap.to(".Portfolio h2", {
  duration: 1.6,
  y: 0,
  opacity: 0.15,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Portfolio",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Portfolio section - Left
gsap.set(".pbox-left", {
  opacity: 0,
  x: -800
});
gsap.to(".pbox-left", {
  duration: 1.5,
  x: 0,
  opacity: 1,
  scale: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Portfolio",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Portfolio section - Right
gsap.set(".pbox-right", {
  x: 500
});
gsap.to(".pbox-right", {
  duration: 1.5,
  x: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Portfolio",
    start: "top center",
    end: "center",
    marker: false
  }
});


// Contact section - Box & Border
gsap.set(".CTA, .boxed", {
  opacity: 0,
  scale: 0
});
gsap.to(".CTA, .boxed", {
  duration: 1.5,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".Contact",
    start: "top center",
    end: "bottom",
    markers: false
  }
});