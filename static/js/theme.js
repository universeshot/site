(function() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const storageKey = 'universeshot-theme';
  const validChoices = new Set(['auto', 'light', 'dark', 'sunset']);

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(choice) {
    const selected = validChoices.has(choice) ? choice : 'auto';
    const theme = selected === 'auto' ? systemTheme() : selected;
    root.setAttribute('data-theme', theme);
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeChoice === selected);
    });
  }

  function save(choice) {
    try { localStorage.setItem(storageKey, choice); } catch (_) {}
  }

  function load() {
    try { return localStorage.getItem(storageKey); } catch (_) { return null; }
  }

  const stored = load();
  const initial = validChoices.has(stored) ? stored : 'auto';
  applyTheme(initial);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.themeChoice;
      if (!validChoices.has(choice)) return;
      save(choice);
      applyTheme(choice);
    });
  });
})();
