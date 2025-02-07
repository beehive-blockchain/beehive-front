import { useState, useEffect } from 'react';

export function useAutoTheme() {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const html = document.documentElement;
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		// Apply theme based on media query
		const applyTheme = (isDark: boolean) => {
			setIsDarkMode(isDark);
			if (isDark) {
				html.classList.add('dark');
			} else {
				html.classList.remove('dark');
			}
		};

		// Initial check
		applyTheme(mediaQuery.matches);

		// Listen for changes
		const handleChange = (event: MediaQueryListEvent) => {
			applyTheme(event.matches);
		};

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return isDarkMode;
}

export default useAutoTheme;
