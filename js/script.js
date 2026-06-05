// Reveal on scroll animation
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-8");
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, .social-row").forEach((el) => {
  el.classList.add(
    "opacity-0",
    "translate-y-8",
    "transition-all",
    "duration-300",
    "ease-out",
  );
  observer.observe(el);
});
