import { Sun, Moon } from 'lucide-react';
import * as React from 'react';
const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const isDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
        setIsDarkMode(isDark);
    }, []);
    const toggleDarkMode = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };
    return (React.createElement("button", { onClick: toggleDarkMode }, isDarkMode ? React.createElement(Moon, null) : React.createElement(Sun, null)));
};
export default ToggleDarkMode;