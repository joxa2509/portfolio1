document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("heroTyped");

  if (!target) return;

  const text = target.dataset.text || target.textContent.trim();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) {
    target.textContent = text;
    return;
  }

  target.textContent = "";

  let i = 0;
  let deleting = false;

  const typeSpeed = 250;
  const deleteSpeed = 120;
  const pauseAfterTyping = 1500;
  const pauseAfterDeleting = 500;

  function typeEffect() {
    if (!deleting) {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, typeSpeed);
      } else {
        deleting = true;
        setTimeout(typeEffect, pauseAfterTyping);
      }
    } else {
      if (i > 0) {
        i--;
        target.textContent = text.substring(0, i);
        setTimeout(typeEffect, deleteSpeed);
      } else {
        deleting = false;
        setTimeout(typeEffect, pauseAfterDeleting);
      }
    }
  }

  setTimeout(typeEffect, 500);
});
