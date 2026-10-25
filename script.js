// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

// Gallery filters
const filterBtns = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.gallery figure');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    const cat = btn.dataset.filter;
    items.forEach(f => {
      f.hidden = !(cat === 'all' || f.dataset.cat === cat);
    });
  });
});

// Gallery lightbox: click a photo to see it large
const box = document.getElementById('lightbox');
if (box) {
  const bigImg = box.querySelector('img');
  const bigCap = box.querySelector('figcaption');
  document.querySelectorAll('.gallery .thumb').forEach(t => {
    t.addEventListener('click', () => {
      const img = t.querySelector('img');
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      bigCap.textContent = img.alt;
      box.showModal();
    });
  });
  box.querySelector('.close').addEventListener('click', () => box.close());
  box.addEventListener('click', e => { if (e.target === box) box.close(); });
}

// Contact form: opens the visitor's email app with the message filled in.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent('Enquiry: ' + d.get('topic'));
    const body = encodeURIComponent(
      'Name: ' + d.get('name') + '\nPhone: ' + d.get('phone') + '\n\n' + d.get('message')
    );
    window.location.href = 'mailto:mpsdhemaji@gmail.com?subject=' + subject + '&body=' + body;
  });
}
