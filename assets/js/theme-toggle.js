console.log('theme-toggle JS loaded');

(function () {
    const STORAGE_KEY = 'theme';
    const CLASS_DARK = 'theme-dark';
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        root.classList.toggle(CLASS_DARK, isDark);
        toggle.textContent = isDark ? '☀' : '☾';
        toggle.setAttribute(
            'aria-label',
            isDark ? 'Переключить на светлый стиль' : 'Переключить на тёмный стиль'
        );
    }

    function getInitialTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
        // если ничего не сохранено — по умолчанию тёмный
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        // можно оставить уважение к системным настройкам,
        // но с явным приоритетом тёмного, например:
        if (prefersDark) return 'dark';
        return 'dark';
    }

    const initial = getInitialTheme();
    applyTheme(initial);

    toggle.addEventListener('click', function () {
        console.log('theme-toggle clicked');
        const current = root.classList.contains(CLASS_DARK) ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });
})();
