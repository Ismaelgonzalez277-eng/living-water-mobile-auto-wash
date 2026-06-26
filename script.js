// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(40px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 800,
          fill: "forwards",
          easing: "ease-out"
        }
      );
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Change navbar background when scrolling
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,.92)";
  } else {
    nav.style.background = "rgba(0,0,0,.75)";
  }
});
