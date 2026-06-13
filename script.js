/* ═══════════════════════════════════════════════════════
   TE TAHUA O FARIKI — script.js
   ═══════════════════════════════════════════════════════ */

/* ── Navigation entre sections ── */
function goTo(id, link) {
  // Masquer toutes les pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  // Afficher la cible
  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Mettre à jour la nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (link) {
    link.classList.add('active');
  } else {
    const match = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (match) match.classList.add('active');
  }

  // Fermer le menu mobile
  document.getElementById('mainNav').classList.remove('open');
}

/* ── Onglets (tabs) ── */
function showTab(id, btn) {
  const section = btn.closest('section') || btn.closest('.page');

  // Désactiver tous les onglets du groupe
  btn.closest('.tabs-bar').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Masquer tous les panes
  section.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('active');
  });

  // Afficher le bon
  const pane = document.getElementById(id);
  if (pane) {
    pane.classList.remove('hidden');
    pane.classList.add('active');
  }
}

/* ── Menu burger mobile ── */
function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
}

/* ── Initialisation ── */
document.addEventListener('DOMContentLoaded', () => {
  // Afficher seulement la page accueil
  document.querySelectorAll('.page').forEach(p => {
    if (p.id === 'accueil') {
      p.style.display = 'block';
      p.classList.add('active');
    } else {
      p.style.display = 'none';
    }
  });

  // Nav links avec preventDefault
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('data-section');
      goTo(id, link);
    });
  });
});

/* ── Formulaire de contact ── */
function sendContact() {
  const nom = document.getElementById('cNom').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  const btn = document.getElementById('btnContact');

  if (!nom || !email || !msg) {
    btn.textContent = '⚠ Merci de remplir tous les champs';
    btn.style.background = '#E05C2A';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.style.background = '';
    }, 2500);
    return;
  }

  btn.textContent = '✅ Message envoyé !';
  btn.style.background = '#2CB67D';
  btn.style.color = '#fff';
  document.getElementById('cNom').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMsg').value = '';
  setTimeout(() => {
    btn.textContent = 'Envoyer le message';
    btn.style.background = '';
    btn.style.color = '';
  }, 3500);
}

/* ── Responsive nav open style ── */
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 700px) {
    .burger { display: flex !important; }
    .main-nav {
      flex-direction: column;
      max-height: 0; overflow: hidden;
      transition: max-height .3s ease;
      padding: 0 24px;
    }
    .main-nav.open {
      max-height: 400px;
      padding: 8px 24px 12px;
    }
    .nav-item { padding: 10px 4px; border-bottom: 1px solid rgba(255,255,255,.08); }
  }
`;
document.head.appendChild(style);
