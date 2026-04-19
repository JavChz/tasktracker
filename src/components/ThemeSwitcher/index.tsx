import { Sun, Moon, Snowflake, Flame } from "lucide-react";
import { useThemeStore } from "../../store/useThemeStore";

export function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const themes = [
    { id: 'dark', icon: <Moon size={18} />, label: 'Dark' },
    { id: 'light', icon: <Sun size={18} />, label: 'Light' },
    { id: 'cold', icon: <Snowflake size={18} />, label: 'Cold' },
    { id: 'warm', icon: <Flame size={18} />, label: 'Warm' },
  ] as const;

  return (
    <div className="absolute top-4 right-4 flex gap-2 bg-surface/40 backdrop-blur-md rounded-full p-2 border border-border/50 shadow-lg z-50">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.label}
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === t.id
              ? 'bg-primary text-white shadow-md scale-110'
              : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary hover:scale-105'
          }`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
