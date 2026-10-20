// ==========================================================================
// SAIFLIX / STREAMING PORTFOLIO SCRIPT
// Implements Front Page Entry, Profile Switching, and Modal Details
// ==========================================================================

const modalData = {
  'opswat-pm2': {
    badge: 'FLAGSHIP SERIES • OPSWAT',
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
    badge: 'FOUNDATIONAL SEASON • OPSWAT',
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
    badge: 'HEALTHCARE TECH • ACCREDITATION',
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
    badge: 'CAMPUS SYSTEMS • INFRASTRUCTURE',
    title: 'Information Technology Intern',
    company: 'University of Florida Research Information Services • Gainesville, FL (Aug 2023 – Present)',
    tag: 'Enterprise Support',
    date: 'Aug 2023 – Present',
    bullets: [
      'Provided technical support to over 200+ faculty members by diagnosing and resolving hardware, software, and network issues.',
      'Utilized Salesforce to manage IT support tickets, serving as the primary liaison between end users and technical teams to resolve requests efficiently.',
      'Wiped, reimaged, and provisioned computers for faculty and staff, ensuring configurations complied with university data security standards.'
    ],
    pills: ['Salesforce', 'ITIL Support', 'Network Troubleshooting', 'Data Security Provisioning']
  },
  'proj-compliance': {
    badge: 'AI & PRODUCT PRD',
    title: 'Automated Security & Compliance Gap Analyzer',
    company: 'Independent Technical Build (Python, Streamlit, LLM API, GitHub)',
    tag: 'AI / Automation',
    date: 'Python • Streamlit • LLM API',
    bullets: [
      'Spearheaded an AI-driven workflow leveraging Python and LLM APIs to ingest operational policies and automatically flag missing compliance controls, reducing manual QA audits.',
      'Authored a comprehensive PRD and managed version control via GitHub, defining time-to-first-value metrics and strategic trade-offs for AI integrations.'
    ],
    pills: ['Python', 'Streamlit', 'LLM API', 'PRD Authoring', 'Trade-off Analysis', 'GitHub']
  },
  'proj-hardware': {
    badge: 'PERIPHERAL LOG DATA PIPELINE',
    title: 'Hardware Vulnerability Triage Dashboard',
    company: 'Independent Technical Build (Python, SQL, Pandas, Matplotlib, Seaborn)',
    tag: 'Data Engineering',
    date: 'Python • SQL • Pandas',
    bullets: [
      'Developed a simulated data pipeline leveraging SQL and Pandas to process 10,000+ peripheral connection logs and visualize endpoint threat vectors via Matplotlib and Seaborn.',
      'Engineered prototype logic in Python to define guardrail metrics and apply statistical models, balancing strict OTG hardware perimeter security with user productivity.'
    ],
    pills: ['Python', 'SQL', 'Pandas', 'Matplotlib / Seaborn', 'Perimeter Security', 'Statistical Guardrails']
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

  // Modal elements
  const detailModal = document.getElementById('detailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalCompany = document.getElementById('modalCompany');
  const modalDate = document.getElementById('modalDate');
  const modalTag = document.getElementById('modalTag');
  const modalBullets = document.getElementById('modalBullets');
  const modalPills = document.getElementById('modalPills');

  // 1. Profile selection card interaction
  profileCards.forEach(card => {
    card.addEventListener('click', () => {
      profileCards.forEach(c => c.classList.remove('active-profile'));
      card.classList.add('active-profile');
      const profile = card.dataset.profile;
      document.querySelector('.mini-profile-name').textContent = card.querySelector('.profile-name').textContent;
      
      // Auto-enter on double click or click directly
      triggerEnter();
    });
  });

  // 2. Enter Portfolio Button
  function triggerEnter() {
    frontSplash.classList.add('fade-out');
    window.location.hash = '#profile/recruiter';
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
    frontSplash.classList.add('hidden');
    mainDashboard.classList.remove('hidden');
  }

  // 3. Switch Profile / Return to Splash
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

  // 5. Open Modal on Card or Button Click
  function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalCompany.textContent = data.company;
    modalDate.textContent = data.date;
    modalTag.textContent = data.tag;

    // Populate bullets
    modalBullets.innerHTML = '';
    data.bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      modalBullets.appendChild(li);
    });

    // Populate pills
    modalPills.innerHTML = '';
    data.pills.forEach(p => {
      const span = document.createElement('span');
      span.className = 'modal-pill';
      span.textContent = p;
      modalPills.appendChild(span);
    });

    detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    detailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  // Attach modal trigger to cards and buttons
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = el.dataset.modal;
      openModal(key);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside container
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeModal();
    });
  }

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !detailModal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
