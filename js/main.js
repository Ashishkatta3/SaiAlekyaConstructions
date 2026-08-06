/* ============================================================
   Sai Alekya Constructions — site behaviour
   Sections:
     1. Footer year
     2. Sticky header state
     3. Mobile menu
     4. Scroll reveal
     5. Enquiry form → WhatsApp + Email
   ============================================================ */

/* --- 1. Footer year --- */
document.getElementById('year').textContent = new Date().getFullYear();

/* --- 2. Sticky header state --- */
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* --- 3. Mobile menu --- */
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  header.classList.add('scrolled');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', false);
}));

/* --- 4. Scroll reveal --- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* --- 5. Enquiry form → WhatsApp + Email --- */
/*  Set your inbox once, here:  */
const ENQUIRY_EMAIL = 'saialekyaconstructions@gmail.com';
/*  WhatsApp number (country code + number, no + or spaces):  */
const WHATSAPP_NUMBER = '919502721030';

const waBtn = document.getElementById('waSubmit');
const mailBtn = document.getElementById('mailSubmit');
const val = id => (document.getElementById(id).value || '').trim();

/* Keep the WhatsApp link updated live as the user types */
const buildWhatsApp = () => {
  const type = val('ftype');
  let t = `Hi Sai Alekya Constructions,%0A%0AI'm interested in: ${type}.%0A`;
  if (val('fname'))  t += `Name: ${val('fname')}%0A`;
  if (val('fphone')) t += `Phone: ${val('fphone')}%0A`;
  if (val('fmsg'))   t += `%0A${val('fmsg')}`;
  waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${t}`;
};
['fname', 'fphone', 'ftype', 'fmsg'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input', buildWhatsApp);
  el.addEventListener('change', buildWhatsApp);
});
buildWhatsApp();

/* Email via FormSubmit (free, no server needed).
   First real submission triggers a one-time confirmation email — click the
   link inside it once, and every enquiry after that lands in your inbox. */
if (mailBtn) {
  mailBtn.addEventListener('click', () => {
    const name = val('fname'), phone = val('fphone'), type = val('ftype'), msg = val('fmsg');
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }

    const data = new FormData();
    data.append('Name', name);
    data.append('Phone', phone);
    data.append('Interested in', type);
    data.append('Message', msg || '—');
    data.append('_subject', `New enquiry — ${type}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    const label = mailBtn.querySelector('.label') || mailBtn;
    mailBtn.disabled = true; label.textContent = 'Sending…';

    fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
      .then(r => r.json())
      .then(() => { label.textContent = '✓ Sent — we’ll be in touch'; })
      .catch(() => {
        /* Fallback: open the visitor's own mail app */
        const body = `Interested in: ${type}%0D%0AName: ${name}%0D%0APhone: ${phone}%0D%0A%0D%0A${msg || ''}`;
        window.location.href =
          `mailto:${ENQUIRY_EMAIL}?subject=New enquiry — ${type}&body=${body}`;
        mailBtn.disabled = false; label.textContent = 'Send by email';
      });
  });
}
