(function() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const storageKey = 'universeshot-theme';

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(choice) {
    const theme = choice === 'auto' ? systemTheme() : choice;
    root.setAttribute('data-theme', theme);
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeChoice === choice);
    });
  }

  function save(choice) {
    try { localStorage.setItem(storageKey, choice); } catch (_) {}
  }

  function load() {
    try { return localStorage.getItem(storageKey); } catch (_) { return null; }
  }

  const stored = load();
  const initial = stored || 'auto';
  applyTheme(initial);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.themeChoice;
      save(choice);
      applyTheme(choice);
    });
  });
})();
