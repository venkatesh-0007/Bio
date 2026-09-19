/**
 * Minimalist Monochrome Profile Card
 * Ambient Gradient Balls with Parallax Interactivity
 * Amudalapalli Venkateswara Rao (Venkatesh)
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientOrbsParallax();
});

function initAmbientOrbsParallax() {
  const orbsWrapper = document.querySelector('.gradient-orbs-wrapper');
  if (!orbsWrapper) return;

  // Only enable mouse parallax on devices with a fine pointer (mouse/trackpad).
  // Touch screens rely exclusively on hardware-accelerated CSS keyframe animations
  // to avoid conflicting transform calculations or sticky cursor shifts.
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 24;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 24;

        orbsWrapper.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  // Reset smoothly when mouse leaves window
  document.addEventListener('mouseleave', () => {
    orbsWrapper.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    orbsWrapper.style.transform = 'translate3d(0, 0, 0)';
    setTimeout(() => {
      orbsWrapper.style.transition = '';
    }, 600);
  });
}
