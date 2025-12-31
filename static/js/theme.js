(function() {
  const root = document.documentElement;
  const select = document.querySelector('[data-theme-select]');
  const storageKey = 'universeshot-theme';
  const validChoices = new Set(['auto', 'light', 'dark', 'sunset', 'space', 'vaporwave-grid', 'neon-arcade']);

  if (!select) return;

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(choice) {
    const selected = validChoices.has(choice) ? choice : 'auto';
    const theme = selected === 'auto' ? systemTheme() : selected;
    root.setAttribute('data-theme', theme);
    if (select.value !== selected) {
      select.value = selected;
    }
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

  select.addEventListener('change', event => {
    const choice = event.target.value;
    if (!validChoices.has(choice)) return;
    save(choice);
    applyTheme(choice);
  });
})();
