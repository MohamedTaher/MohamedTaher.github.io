(() => {
  'use strict';

  const projects = {
    dabddob: {
      title: 'Dabdoob', category: 'Consumer app · iOS & Android',
      description: 'A consumer mobile app with more than one million downloads. Built around a seamless content browsing experience with real-time updates and intuitive navigation.',
      sections: [
        ['Engineering focus', 'Cross-device performance optimization, real-time content updates, and a consistent browsing and navigation experience across iOS and Android.'],
        ['Impact', '1M+ downloads, as recorded in my résumé.'],
      ],
    },
    vlens: {
      title: 'VLens SDKs', category: 'AI-powered identity verification',
      description: 'An identity verification SDK featuring document scanning and facial recognition. Delivered across four platforms to support both native and cross-platform applications.',
      sections: [
        ['Platforms', 'Android, iOS, React Native, and Flutter.'],
        ['Product capabilities', 'AI-powered document scanning and facial recognition for identity verification.'],
      ],
    },
    qahera: {
      title: 'Qahera Cash', category: 'Digital payments · iOS & Android',
      description: 'Mobile apps for Qahera Cash, a digital payment platform serving users across Egypt.',
      sections: [
        ['Product capabilities', 'Money transfers, bill payments, and everyday financial transactions.'],
        ['Platforms', 'iOS and Android.'],
      ],
    },
    tayary: {
      title: 'Tayary', category: 'Food delivery · Three-app ecosystem',
      description: 'A food delivery platform based in Alexandria, Egypt. The mobile ecosystem connects the people ordering food with the riders delivering it and the restaurants preparing it.',
      sections: [
        ['Customer app', 'Available across iOS and Android.'],
        ['Operations apps', 'Android apps for riders and restaurant management, covering the full service ecosystem.'],
      ],
    },
    taly: {
      title: 'Taly Corporate & Merchant', category: 'Business finance · iOS & Android',
      description: 'Two mobile products supporting the financial workflows of businesses and merchants.',
      sections: [
        ['Taly Corporate', 'Corporate spending management, real-time expense tracking, and financial transactions for businesses.'],
        ['Taly Merchant', 'Transaction management, sales monitoring, and access to real-time financial data for merchants.'],
      ],
    },
    iscore: {
      title: 'iScore', category: 'Credit services · In development',
      description: 'A React Native app being developed to give users access to credit-related services, including credit score insights, reports, and financial data.',
      sections: [
        ['Engineering focus', 'A secure, user-friendly mobile experience that helps people make informed financial decisions.'],
        ['Status', 'In development, as described in my résumé.'],
      ],
    },
  };

  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.project-card')];
  const filterStatus = document.getElementById('filter-status');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      cards.forEach(card => {
        card.hidden = selected !== 'all' && card.dataset.category !== selected;
        if (!card.hidden) visible++;
      });
      filterStatus.textContent = `Showing ${visible} ${selected === 'all' ? 'featured' : button.textContent.trim()} project${visible === 1 ? '' : 's'}.`;
    });
  });

  const dialog = document.querySelector('.project-dialog');
  let dialogTrigger;
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      if (!project) return;
      dialogTrigger = button;
      document.getElementById('dialog-title').textContent = project.title;
      document.getElementById('dialog-category').textContent = project.category;
      document.getElementById('dialog-description').textContent = project.description;
      const details = document.getElementById('dialog-details');
      details.replaceChildren();
      project.sections.forEach(([title, description]) => {
        const section = document.createElement('div');
        section.className = 'dialog-section';
        const heading = document.createElement('h3');
        heading.textContent = title;
        const paragraph = document.createElement('p');
        paragraph.textContent = description;
        section.append(heading, paragraph);
        details.append(section);
      });
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
    });
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    dialogTrigger?.focus({ preventScroll: true });
  });

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('mtaherhassan95@gmail.com');
      copyStatus.textContent = 'Email copied';
    } catch {
      copyStatus.textContent = 'Select the email address to copy it.';
    }
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
  const navLinks = [...document.querySelectorAll('#main-nav a')];
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-nav');
  const closeMenu = () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = navLinks.find(item => item.hash === `#${entry.target.id}`);
        if (link) {
          if (entry.isIntersecting) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
