// ==========================================================================
// SAIFLIX / STREAMING PORTFOLIO SCRIPT
// Implements Front Page Entry, Profile Switching, Detail Modals & Resume Viewer
// ==========================================================================

const modalData = {
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
  'proj-compliance': {
    badge: 'TECHNICAL BUILD',
    title: 'Automated Security & Compliance Gap Analyzer',
    company: 'Technical Project (Python, Streamlit, LLM API, GitHub)',
    tag: 'AI / Automation',
    date: 'Python • Streamlit • LLM API',
    bullets: [
      'Spearheaded an AI-driven workflow leveraging Python and LLM APIs to ingest operational policies and automatically flag missing compliance controls, reducing manual QA audits.',
      'Authored a comprehensive PRD and managed version control via GitHub, defining time-to-first-value metrics and strategic trade-offs for AI integrations.'
    ],
    pills: ['Python', 'Streamlit', 'LLM API', 'PRD Authoring', 'Trade-off Analysis', 'GitHub']
  },
  'proj-hardware': {
    badge: 'TECHNICAL BUILD',
    title: 'Hardware Vulnerability Triage Dashboard',
    company: 'Technical Project (Python, SQL, Pandas, Matplotlib, Seaborn)',
    tag: 'Data Engineering',
    date: 'Python • SQL • Pandas',
    bullets: [
      'Developed a simulated data pipeline leveraging SQL and Pandas to process 10,000+ peripheral connection logs and visualize endpoint threat vectors via Matplotlib and Seaborn.',
      'Engineered prototype logic in Python to define guardrail metrics and apply statistical models, balancing strict OTG hardware perimeter security with user productivity.'
    ],
    pills: ['Python', 'SQL', 'Pandas', 'Matplotlib / Seaborn', 'Perimeter Security', 'Statistical Guardrails']
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
  'proj-blockwise': {
    badge: 'TECHNICAL BUILD',
    title: 'Blockwise — Priority-Based Scheduler',
    company: 'Technical Project (JavaScript, HTML, CSS, Browser App)',
    tag: 'Planning / Productivity',
    date: 'JavaScript • HTML • Zero Install',
    bullets: [
      'Built Blockwise, a personal scheduler for students that ranks work by priority and time needed (importance × hours left ÷ days left) instead of only by due date.',
      'Designed a layered planning engine: classes, exams and interviews first, then protected routines (gym, meals, a weekly club, downtime after 8pm), then work sessions fitted into what is left under a daily focus cap.',
      'Made every block explainable: each one carries a plain-language reason, and a daily briefing shows open time, the top priority, and what slips if today\'s block is skipped.',
      'Connected prep to events automatically: an interview creates a tailored prep plan and an exam creates a study plan ten days out, and both move when the event moves.',
      'Added a 7-day pressure meter, at-risk warnings, multi-stage tasks with group-meeting gates, a recruiting pipeline, and check-ins that track estimate vs. actual time.'
    ],
    links: [
      { label: 'Try the live demo', url: 'https://sairajpulaparthi1.github.io/blockwise-demo/', primary: true },
      { label: 'View on GitHub', url: 'https://github.com/SairajPulaparthi1/blockwise-demo' }
    ],
    pills: ['JavaScript', 'Scheduling Algorithm', 'Explainable UX', 'Prioritization', 'Product Design', 'Local Storage']
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
