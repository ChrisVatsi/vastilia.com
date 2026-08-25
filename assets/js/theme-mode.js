// Site Theme Color Mode
(function() {
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            if (document.body) {
                document.body.classList.add('dark');
                document.body.style.backgroundColor = '#18191a';
            }
            document.documentElement.style.backgroundColor = '#18191a';
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            if (document.body) {
                document.body.classList.remove('dark');
                document.body.style.backgroundColor = '#f2f5f8';
            }
            document.documentElement.style.backgroundColor = '#f2f5f8';
            localStorage.theme = 'light';
        }
    }

    // Initial check
    var savedTheme = localStorage.theme;
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme('dark');
    } else if (savedTheme === 'light') {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    function setDarkTheme() {
        applyTheme('dark');
    }

    function setLightTheme() {
        applyTheme('light');
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    // Attach click listener to all theme toggle buttons
    function initButtons() {
        var toggleButtons = document.querySelectorAll('.theme_toggle_btn');
        toggleButtons.forEach(function(btn) {
            btn.removeEventListener('click', handleToggleClick);
            btn.addEventListener('click', handleToggleClick);
        });
        // Re-apply to body once DOM is ready
        if (document.documentElement.classList.contains('dark')) {
            if (document.body) {
                document.body.classList.add('dark');
                document.body.style.backgroundColor = '#18191a';
            }
        } else {
            if (document.body) {
                document.body.classList.remove('dark');
                document.body.style.backgroundColor = '#f2f5f8';
            }
        }
    }

    function handleToggleClick(e) {
        e.preventDefault();
        toggleTheme();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initButtons);
    } else {
        initButtons();
    }

    window.toggleTheme = toggleTheme;
    window.setDarkTheme = setDarkTheme;
    window.setLightTheme = setLightTheme;
})();
