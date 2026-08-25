// Site Theme Color Mode
(function() {
    // Check saved theme or default to dark if not set, or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else if (localStorage.theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        // default to dark
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }

    function setDarkTheme() {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }

    function setLightTheme() {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    // Attach click listener to all theme toggle buttons
    document.addEventListener('DOMContentLoaded', function() {
        var toggleButtons = document.querySelectorAll('.theme_toggle_btn');
        toggleButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleTheme();
            });
        });
    });

    window.toggleTheme = toggleTheme;
    window.setDarkTheme = setDarkTheme;
    window.setLightTheme = setLightTheme;
})();
