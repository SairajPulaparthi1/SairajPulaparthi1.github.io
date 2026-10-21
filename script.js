// ==========================================================================
// SAIFLIX / STREAMING PORTFOLIO SCRIPT
// Implements Front Page Entry, Profile Switching, Detail Modals & Resume Viewer
// ==========================================================================

const modalData = {
  'about-me': {
    badge: 'ABOUT ME',
    title: 'Off the Clock',
    company: 'Sairaj Pulaparthi • Gainesville & Tampa, FL',
    tag: 'Personal',
    date: 'Hobbies & favorites',
    h1: "What I'm into",
    h2: 'Quick picks',
    bullets: [
      'On the court: I play pickleball and basketball every week.',
      'Fantasy football: I play, so fall weekends mean setting lineups and checking scores.',
      "Gators fan: you'll find me cheering on the Florida Gators. Go Gators! 🐊",
      'Favorite movies: The Social Network and Forrest Gump.'
    ],
    pills: ['Pickleball', 'Basketball', 'Fantasy Football', 'Florida Gators', 'The Social Network', 'Forrest Gump']
  },
  'opswat-pm2': {
    badge: 'OPSWAT',
    title: 'Product Manager Intern II',
    company: 'OPSWAT • Tampa, FL / Remote (Aug 2025 – Present)',
    tag: 'Hardware & Cybersecurity',
    date: 'Aug 2025 – Present',
    bullets: [
      'Own the end-to-end redesign of the MetaDefender Media Firewall, defining next-generation product requirements, feature specifications, and backlog tasks.',
      'Led zero-to-one development of a personal workstation scanner that sanitizes and securely delivers files through an inline OTG connection.',
      'Drive hardware architecture iterations from an initial Radxa Rock 5T prototype to the Media Firewall board, transitioning into an in-progress custom BCM-based revision.'
    ],
    pills: ['MetaDefender', 'Media Firewall', 'OTG Security', 'PRD', 'Hardware Prototyping', 'BCM Revision']
  },
  'opswat-pm1': {
    badge: 'OPSWAT',
    title: 'Product Manager Intern I',
    company: 'OPSWAT • Tampa, FL (May 2025 – Aug 2025)',
    tag: 'B2B & Operations',
    date: 'May 2025 – Aug 2025',
    bullets: [
      'Translated B2B customer requirements into actionable product specifications across core MetaDefender offerings (Kiosk, Endpoint, Firewall, Drive), aligning cross-functional teams on roadmap delivery.',
      'Partnered with hardware engineering on prototype bench testing and PCB assembly involved in evaluating component selection and resistor placement through manual soldering and crimping.',
      'Built an automated Jira tracking dashboard utilizing custom JQL filters to mitigate deal-critical blockers across 1,000+ tickets, partnering with international Power BI teams to streamline executive roadmap reporting.'
    ],
    pills: ['Jira / JQL', 'Power BI', 'PCB Assembly', 'B2B Requirements', 'Roadmap Automation']
  },
  'medlaunch': {
    badge: 'MEDLAUNCH CONCEPTS',
    title: 'Product Manager Intern',
    company: 'MedLaunch Concepts • Clearwater, FL (Aug 2025 – Jan 2026)',
    tag: 'Healthcare & QA',
    date: 'Aug 2025 – Jan 2026',
    bullets: [
      'Assisted the Product Manager in developing an accreditation portal serving 500+ users across multiple hospital departments.',
      'Led a Quality Assurance (QA) team of 4–6 members overseeing testing workflows, achieving 95% compliance with healthcare standards.',
      'Supported project milestone planning and coordinated with cybersecurity teams to ensure end-to-end security compliance for live client demos.'
    ],
    pills: ['QA Leadership', 'Healthcare Standards', 'User Portal', 'Cybersecurity Compliance']
  },
  'uf-it': {
    badge: 'UNIVERSITY OF FLORIDA',
    title: 'Information Technology Intern',
    company: 'University of Florida Research Information Services • Gainesville, FL (Aug 2023 – Present)',
    tag: 'Enterprise Support',
    date: 'Aug 2023 – Present',
    bullets: [
      'Provided technical support to 200+ faculty members by diagnosing and resolving hardware, software, and network issues.',
      'Utilized Salesforce to manage IT support tickets, serving as the primary liaison between end users and technical teams to resolve requests efficiently.',
      'Wiped, reimaged, and provisioned computers for faculty and staff, ensuring configurations complied with university data security standards.'
    ],
    pills: ['Salesforce', 'ITIL Support', 'Network Troubleshooting', 'Data Security Provisioning']
  },
  'proj-docket': {
    badge: 'TECHNICAL BUILD',
    title: 'Docket — Local-First Ticket Board',
    company: 'Technical Project (JavaScript, Node.js, Local JSON, CLI Tool)',
    tag: 'Jira Alternative / Local-First',
    date: 'JavaScript • Node.js • CLI',
    bullets: [
      'Designed and built Docket, a local-first personal ticket board combining Jira\'s structured tracking (Backlog → To Do → In Progress → Blocked → Done) with a simple, friction-free interface.',
      'Engineered tickets that hold the full story: Markdown descriptions, checklists, timestamped activity notes, and drag-and-drop file/screenshot attachments.',
      'Implemented full-text ⌘K search that reads inside attached logs, Markdown notes, code snippets, PDFs, and Word documents.',
      'Architected for privacy and local control: every ticket is stored as plain JSON on disk with zero cloud tracking, accompanied by a companion terminal CLI.'
    ],
    links: [
      { label: 'Try the live demo', url: 'https://sairajpulaparthi1.github.io/docket-demo/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/docket-demo' }
    ],
    pills: ['JavaScript', 'Node.js', 'Local-First', 'Kanban Board', '⌘K Search', 'Markdown', 'CLI']
  },
  'proj-kitchen': {
    badge: 'TECHNICAL BUILD',
    title: "McDonald's Kitchen Stock — Example Demo",
    company: 'Technical Project (JavaScript, HTML, CSS, Browser App)',
    tag: 'Restaurant Ops / Inventory',
    date: 'JavaScript • HTML • Zero Install',
    bullets: [
      'Built an example demo of a kitchen stock tracker for a McDonald\'s-style restaurant. It is a concept piece, not an official McDonald\'s tool.',
      'Replaced "ask a chatbot how many we have" with a direct view: every ingredient shows its count, a bar against its target level, and an In stock / Low / Out status, updated with one tap, a typed number, or a full-case delivery.',
      'Linked ingredients to recipes so each menu item shows how many can be made right now and which ingredient is the bottleneck. Running out of mayo instantly drops the McChicken and Quarter Pounder Deluxe to zero.',
      'Added planning ("80 Big Macs today" shows exactly what you would be short), sales that deduct ingredients, and a reorder list sized in whole cases.'
    ],
    links: [
      { label: 'Try the live demo', url: 'https://sairajpulaparthi1.github.io/kitchen-stock-demo/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/kitchen-stock-demo' }
    ],
    pills: ['JavaScript', 'Inventory Logic', 'Recipe Modeling', 'Operations UX', 'Product Design', 'Local Storage']
  },
  'proj-pmtoolbox': {
    badge: 'TECHNICAL BUILD',
    title: 'PM Toolbox',
    company: 'Technical Project (JavaScript, HTML, CSS, Browser App)',
    tag: 'Product Management / Tools',
    date: 'JavaScript • HTML • Zero Install',
    bullets: [
      'Built a free, no-sign-up toolbox with the eight tools a product manager reaches for most, all in one single-file web app.',
      'Prioritization and experiments: a RICE scorer that ranks ideas live and exports CSV or Markdown, plus an A/B test calculator for sample size and test length, and a results checker with lift, p-value, confidence interval and a plain-English verdict.',
      'Metrics: churn and retention, LTV, CAC payback and LTV:CAC with benchmark guidance, NPS, and a conversion funnel that flags the biggest drop-off.',
      'Added eight FAANG case studies (Google OKRs, HEART and launch checklist; Amazon PR/FAQ and one-way vs. two-way doors; Netflix A/B testing; Facebook\'s 7-friends activation metric; Apple Retail NPS), each sourced from public material and paired with a hands-on exercise in the matching tool.',
      'Specs and planning: user stories with Given/When/Then criteria (copy for Jira), a one-page PRD with live preview and quality checks, a drag-and-drop Now/Next/Later roadmap, OKRs with scoring, and a launch checklist. Work saves in the browser with backup and restore.'
    ],
    links: [
      { label: 'Open the toolbox', url: 'https://sairajpulaparthi1.github.io/pm-toolbox/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/pm-toolbox' }
    ],
    pills: ['JavaScript', 'RICE', 'A/B Test Statistics', 'Product Metrics', 'PRDs & User Stories', 'Roadmaps & OKRs']
  },
  'proj-blockwise': {
    badge: 'TECHNICAL BUILD',
    title: 'Blockwise — Priority-Based Scheduler',
    company: 'Technical Project (JavaScript, HTML, CSS, Browser App)',
    tag: 'Planning / Productivity',
    date: 'JavaScript • HTML • Zero Install',
    bullets: [
      'Built Blockwise, a personal scheduler for students that ranks work by priority and time needed (importance × hours left ÷ days left) instead of only by due date. The live demo runs on my own UF class schedule and routine.',
      'Designed a layered planning engine: classes and exams first, then protected routines (gym, meals, recurring activities, downtime), then work sessions fitted into what is left under a daily focus cap.',
      'Made every block explainable: each one carries a plain-language reason, and a daily briefing shows open time, the top priority, and what slips if today\'s block is skipped.',
      'Connected study to exams automatically: every exam gets a study plan starting ten days out, assignments feed into it, and it moves when the exam moves.',
      'Designed it for daily use: a Today screen with one "Up next" card and a focus timer, one-line task entry ("SQL homework 4210 due fri 2h" is parsed into course, date, time and type), quick check-ins, and a 7-day load meter.'
    ],
    links: [
      { label: 'Try the live demo', url: 'https://sairajpulaparthi1.github.io/blockwise-demo/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/blockwise-demo' }
    ],
    pills: ['JavaScript', 'Scheduling Algorithm', 'Natural-Language Input', 'Explainable UX', 'Product Design', 'Local Storage']
  },
  'proj-brightside': {
    badge: 'TECHNICAL BUILD',
    title: 'Brightside PM Sim — Interactive Game',
    company: 'Technical Project (JavaScript, HTML Canvas, Browser Game)',
    tag: 'PM Simulation / Education',
    date: 'JavaScript • HTML Canvas • Zero Install',
    bullets: [
      'Conceived and engineered Brightside PM Sim, a browser game that teaches product management by placing players in real-world PM dilemmas at a scheduling software company.',
      'Designed three playable weeks: diagnosing a churn crisis and writing the PRD (Week 1), running an A/B test, surviving a 2 a.m. outage and setting prices (Week 2), and setting OKRs, running discovery, writing user stories and negotiating an enterprise deal (Week 3).',
      'Engineered dynamic consequence loops where user trade-offs directly impact engineering capacity, customer retention, and business KPIs.',
      'Built a zero-install, no-account experience: a walkable office, a live game clock, autosave in the browser, and a home page to jump to any week.'
    ],
    links: [
      { label: 'Play the game', url: 'https://sairajpulaparthi1.github.io/brightside-pm-sim/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/brightside-pm-sim' }
    ],
    pills: ['JavaScript', 'HTML Canvas', 'Product Strategy', 'Discovery & PRDs', 'A/B Testing', 'Game Design']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const frontSplash = document.getElementById('frontSplash');
  const mainDashboard = document.getElementById('mainDashboard');
  const enterBtn = document.getElementById('enterBtn');
  const profileCards = document.querySelectorAll('.profile-card');
  const switchProfileBtn = document.getElementById('switchProfileBtn');
  const profileToggle = document.getElementById('profileToggle');
  const brandLogo = document.getElementById('brandLogo');
  const mainNav = document.getElementById('mainNav');

  // Detail Modal Elements
  const detailModal = document.getElementById('detailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalCompany = document.getElementById('modalCompany');
  const modalDate = document.getElementById('modalDate');
  const modalTag = document.getElementById('modalTag');
  const modalBullets = document.getElementById('modalBullets');
  const modalPills = document.getElementById('modalPills');
  const modalLinks = document.getElementById('modalLinks');

  // Resume Modal Elements
  const resumeModal = document.getElementById('resumeModal');
  const resumeCloseBtn = document.getElementById('resumeCloseBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const navResumeBtn = document.getElementById('navResumeBtn');
  const contactResumeBtn = document.getElementById('contactResumeBtn');

  // Make clickable cards reachable and usable from the keyboard
  document.querySelectorAll('.profile-card, .media-card[data-modal], #profileToggle, #brandLogo').forEach(el => {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });

  // 1. Profile selection interaction
  profileCards.forEach(card => {
    card.addEventListener('click', () => {
      profileCards.forEach(c => c.classList.remove('active-profile'));
      card.classList.add('active-profile');
      document.querySelector('.mini-profile-name').textContent = card.querySelector('.profile-name').textContent;
      triggerEnter(card.dataset.profile);
    });
  });

  // 2. Enter Portfolio Button
  function triggerEnter(profile) {
    if (typeof profile !== 'string') profile = (document.querySelector('.profile-card.active-profile') || {}).dataset?.profile || 'recruiter';
    frontSplash.classList.add('fade-out');
    window.location.hash = '#profile/' + profile;
    setTimeout(() => {
      frontSplash.classList.add('hidden');
      mainDashboard.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 450);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', triggerEnter);
  }

  // Check URL hash if user opens directly with #profile/recruiter
  if (window.location.hash.includes('profile')) {
    const fromHash = window.location.hash.split('/')[1];
    const card = document.querySelector(`.profile-card[data-profile="${fromHash}"]`);
    if (card) {
      profileCards.forEach(c => c.classList.remove('active-profile'));
      card.classList.add('active-profile');
      document.querySelector('.mini-profile-name').textContent = card.querySelector('.profile-name').textContent;
    }
    frontSplash.classList.add('hidden');
    mainDashboard.classList.remove('hidden');
  }

  // 3. Return to Splash Screen
  function returnToSplash() {
    frontSplash.classList.remove('hidden');
    frontSplash.classList.remove('fade-out');
    mainDashboard.classList.add('hidden');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  if (switchProfileBtn) switchProfileBtn.addEventListener('click', returnToSplash);
  if (profileToggle) profileToggle.addEventListener('click', returnToSplash);
  if (brandLogo) brandLogo.addEventListener('click', returnToSplash);

  // 4. Navbar scroll styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  // Highlight the nav link for the section in view
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function updateActiveNav() {
    let current = sections[0];
    for (const s of sections) if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = s;
    navLinks.forEach(a => a.classList.toggle('active', !!current && a.getAttribute('href') === '#' + current.id));
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // 5. Open Card Details Modal
  let lastFocus = null;
  function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    const mh1 = document.getElementById('modalH1'), mh2 = document.getElementById('modalH2');
    if (mh1) mh1.textContent = data.h1 || 'Key Responsibilities & Highlights';
    if (mh2) mh2.textContent = data.h2 || 'Technologies & Competencies';
    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalCompany.textContent = data.company;
    modalDate.textContent = data.date;
    modalTag.textContent = data.tag;

    modalBullets.innerHTML = '';
    data.bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      modalBullets.appendChild(li);
    });

    modalPills.innerHTML = '';
    data.pills.forEach(p => {
      const span = document.createElement('span');
      span.className = 'modal-pill';
      span.textContent = p;
      modalPills.appendChild(span);
    });

    if (modalLinks) {
      modalLinks.innerHTML = '';
      (data.links || []).forEach(l => {
        const a = document.createElement('a');
        a.href = l.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'btn ' + (l.primary ? 'btn-primary-play' : 'btn-secondary-info');
        a.textContent = l.label;
        modalLinks.appendChild(a);
      });
      modalLinks.hidden = !(data.links && data.links.length);
    }

    lastFocus = document.activeElement;
    detailModal.classList.remove('hidden');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    detailModal.classList.add('hidden');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = el.dataset.modal;
      openModal(key);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeModal();
    });
  }

  // 6. Resume Modal Handlers
  function openResumeModal() {
    lastFocus = document.activeElement;
    resumeModal.classList.remove('hidden');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (resumeCloseBtn) resumeCloseBtn.focus();
  }

  function closeResumeModal() {
    resumeModal.classList.add('hidden');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResumeModal);
  if (navResumeBtn) navResumeBtn.addEventListener('click', openResumeModal);
  if (contactResumeBtn) contactResumeBtn.addEventListener('click', openResumeModal);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResumeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  // Global Escape Key Listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!detailModal.classList.contains('hidden')) closeModal();
      if (!resumeModal.classList.contains('hidden')) closeResumeModal();
    }
  });
});
