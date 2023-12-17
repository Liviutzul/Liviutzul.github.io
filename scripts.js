function addScrollToSectionListener(buttonSelector, sectionSelector) {
  const btn = document.querySelector(buttonSelector);
  const section = document.querySelector(sectionSelector);

  if (btn && section) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// jump to...
addScrollToSectionListener('.btn--despreNoi', '.despre-noi-section');
addScrollToSectionListener('.btn-noutati', '.noutati-section');
addScrollToSectionListener('.btn-istoric', '.istoric-section');
addScrollToSectionListener('.btn-parteneri', '.parteneri-section');
addScrollToSectionListener('.btn-contact', '.contact-section');
