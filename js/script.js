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

// Theme toggle: persist preference and switch html class
(function () {
  const btn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      if (btn) btn.textContent = "dark_mode";
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      if (btn) btn.textContent = "light_mode";
    }
    // Swap profile images if present
    document.querySelectorAll(".profile-photo").forEach((img) => {
      const darkSrc = img.dataset.srcDark || img.getAttribute("src");
      const lightSrc = img.dataset.srcLight || img.getAttribute("src");
      img.src = theme === "light" ? lightSrc : darkSrc;
    });
  }

  const stored = localStorage.getItem("theme");
  const prefer =
    stored ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  applyTheme(prefer);

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.classList.contains("light") ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }
})();

const githubHoverWrapper = document.querySelector(".github-hover-wrapper");
if (githubHoverWrapper) {
  let tooltipTimer;
  githubHoverWrapper.addEventListener("mouseenter", () => {
    tooltipTimer = window.setTimeout(() => {
      githubHoverWrapper.classList.add("hover-active");
    }, 800);
  });
  githubHoverWrapper.addEventListener("mouseleave", () => {
    window.clearTimeout(tooltipTimer);
    githubHoverWrapper.classList.remove("hover-active");
  });
}
