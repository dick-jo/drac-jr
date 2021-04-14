// Just run dracJr() to perform the initial check + set
const dracJr = () => {
    // Initial check for previously indicated dark/light preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    // ...if user has never indicated preference here before, checks OS/Browser for dark/light preference
    const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
        // Check for system preference and save for future
        // ...currently somewhat of a workaround to avoid flash of unstyled content on page load for dark users
        const setDataTheme = () => {
            if (prefersDark.matches) {
                document.documentElement.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light')
            }
        }
        window.onload = setDataTheme()
    }
}

// Handle toggle via click
const toggleDark = () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    }
}