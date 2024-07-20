gsap.from(".box", {
  x: 1000,
  duration: 1,
  // delay: 2,
  borderRadius: "50%",
  rotate: 360,
  backgroundColor: "red",
  scale: 0,
});
gsap.to(".box", {
  x: 1100,
  duration: 1,
  delay: 1,
  borderRadius: "50%",
  rotate: 360,
  backgroundColor: "red",
  scale: 2,
  y: 450,
});
gsap.from("h1", {
  y: 40,
  delay: 2,
  opacity: 0,
  stagger: 1,
});
gsap.from(".box1", {
  x: 800,
  scale: 0,
  duration: 1,
  rotate: 360,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".box1",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.from(".box2", {
  x: -800,
  scale: 0,
  rotate: 360,
  duration: 1,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".box2",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 70%",
    scrub: true,
  },
});
gsap.from(".box3", {
  x: 800,
  scale: 0,
  duration: 1,
  rotate: 360,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".box3",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.to(".nav3 h2", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: ".nav3",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -50%",
    pin: true,
    scrub: 1,
  },
});

var Path = `M 10 100 Q 250 100 1300 100`;
var finalPath = `M 10 100 Q 250 100 1300 100`;
let st = document.querySelector(".string");
st.addEventListener("mousemove", (e) => {
  Path = `M 10 100 Q ${e.x} ${e.y} 1300 100`;
  gsap.to("svg path", {
    attr: { d: Path },
  });
});
st.addEventListener("mouseleave", (e) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 3,
    ease: "elastic.out(1,0.1)",
  });
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to(".mar", {
      transform: "translateX(-300%)",
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".mar img",{
      rotate:180
    })
  } else {
    gsap.to(".mar", {
      transform: "translateX(10%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".mar img",{
      rotate:0
    })
  }
});
