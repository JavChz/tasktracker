import { create } from 'zustand';

type Theme = 'dark' | 'light' | 'cold' | 'warm';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('tasktracker-theme') as Theme;
    if (saved && ['dark', 'light', 'cold', 'warm'].includes(saved)) {
      return saved;
    }
  }
  return 'dark';
};

const initialTheme = getInitialTheme();
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', initialTheme);
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: initialTheme,
  setTheme: (theme) => {
    localStorage.setItem('tasktracker-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    set({ theme });
  },
}));
