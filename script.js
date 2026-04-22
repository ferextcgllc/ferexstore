const formLink = "https://form.jotform.com/YOURFORM";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const revealEls = document.querySelectorAll(".reveal");
const checks = document.querySelectorAll(".ack-check");
const submitBtn = document.getElementById("submitBtn");
const chips = document.querySelectorAll(".chip");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => observer.observe(el));

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
  });
});

function updateSubmitState() {
  const allChecked = Array.from(checks).every((box) => box.checked);
  submitBtn.classList.toggle("disabled", !allChecked);
}

checks.forEach((box) => box.addEventListener("change", updateSubmitState));
updateSubmitState();

submitBtn?.addEventListener("click", () => {
  if (submitBtn.classList.contains("disabled")) return;
  window.open(formLink, "_blank");
});
