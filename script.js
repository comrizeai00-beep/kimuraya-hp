const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const opened = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
    mobileNav.setAttribute('aria-hidden', String(!opened));
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }));
}
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible'); obs.unobserve(e.target);}})
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
