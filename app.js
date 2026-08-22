/**
 * Minimalist Monochrome Profile Card
 * Ambient Gradient Balls with Parallax Interactivity
 * Amudalapalli Venkateswara Rao (Venkatesh)
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientOrbsParallax();
});

function initAmbientOrbsParallax() {
  const orbs = document.querySelectorAll('.gradient-orb');
  if (!orbs.length) return;

  // Gentle mouse/gyro parallax on desktop & mobile
  window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 30;

    orbs.forEach((orb, index) => {
      const factor = (index + 1) * 0.4;
      orb.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
    });
  });

  // Reset smoothly if mouse leaves
  document.addEventListener('mouseleave', () => {
    orbs.forEach((orb) => {
      orb.style.transform = '';
    });
  });
}
