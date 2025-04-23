
  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar-nav");
    const links = nav.querySelectorAll(".nav-link");
    const underline = document.createElement("div");

    underline.classList.add("underline");
    underline.style.position = "absolute";
    underline.style.height = "2px";
    underline.style.backgroundColor = "#9747FF";
    underline.style.transition = "all 0.3s ease";
    underline.style.bottom = "0";
    nav.appendChild(underline);

    function moveUnderline(el) {
      const rect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      underline.style.left = `${rect.left - navRect.left}px`;
      underline.style.width = `${rect.width}px`;
    }

    const activeLink = nav.querySelector(".nav-link.active");
    if (activeLink) moveUnderline(activeLink);

    links.forEach(link => {
      link.addEventListener("mouseenter", () => moveUnderline(link));
      link.addEventListener("mouseleave", () => {
        const active = nav.querySelector(".nav-link.active");
        if (active) moveUnderline(active);
      });
    });
  });

  export function addHoverEffect() {

  }

