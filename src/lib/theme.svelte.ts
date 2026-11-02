/**
 * Theme store — manages dark/light mode with localStorage persistence.
 *
 * Priority order:
 *   1. User's saved choice in localStorage
 *   2. System preference (prefers-color-scheme)
 *   3. Fallback: light
 *
 * The .dark class is toggled on <html> so Tailwind's `dark:` variants work.
 */

const STORAGE_KEY = 'theme';
type Theme = 'light' | 'dark';

function createTheme() {
	let current = $state<Theme>('light');

	function apply(theme: Theme) {
		current = theme;
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', theme === 'dark');
		}
	}

	function init() {
		if (typeof window === 'undefined') return;

		const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
		if (stored === 'dark' || stored === 'light') {
			apply(stored);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			apply(prefersDark ? 'dark' : 'light');
		}
	}

	function toggle() {
		const next: Theme = current === 'dark' ? 'light' : 'dark';
		apply(next);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, next);
		}
	}

	return {
		get current() {
			return current;
		},
		get isDark() {
			return current === 'dark';
		},
		init,
		toggle
	};
}

export const theme = createTheme();

