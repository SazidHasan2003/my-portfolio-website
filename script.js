// SELECTORS

const hamburger = document.querySelector(".hamburger");
const offcanvas = document.querySelector(".offcanvas");
const closeBtn = document.querySelector(".offcanvas-close");
const offcanvasLinks = document.querySelectorAll(".offcanvas-nav a");

// OPEN OFFCANVAS

hamburger.addEventListener("click", () => {
  offcanvas.classList.add("open");
});

// CLOSE OFFCANVAS

closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("open");
});

// CLOSE WHEN CLICKING A LINK

offcanvasLinks.forEach((link) => {
  link.addEventListener("click", () => {
    offcanvas.classList.remove("open");
  });
});

// CLOSE WHEN CLICKING OUTSIDE

document.addEventListener("click", (e) => {
  if (
    offcanvas.classList.contains("open") &&
    !offcanvas.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    offcanvas.classList.remove("open");
  }
});

// CLOSE WITH ESC KEY

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    offcanvas.classList.remove("open");
  }
});

// SMOOTH SCROLL FIX (OFFSET HEADER)

const headerHeight = document.querySelector(".site-header").offsetHeight;

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);

      const offsetTop = target.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// CONTACT FORM — EMAILJS INTEGRATION
// Handles sending email from contact form
// ===============================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_846obmg", //  service ID
      "template_qbffibt", // template ID
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
});
