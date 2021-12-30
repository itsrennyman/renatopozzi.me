import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "../lib/hooks/useTheme";

export function ToggleTheme() {
  const [theme, setTheme] = useTheme("dark");
  const next = theme === "light" ? "dark" : "light";
  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(next)}
      type="button"
      aria-label="Theme Toggle"
      className="p-3.5 rounded-full border-2 border-gray-300 hover:border-black dark:border-gray-700 dark:hover:border-white transition duration-200"
    >
      {isLight && <MoonIcon className="h-6 w-6 text-black" />}
      {isDark && <SunIcon className="h-6 w-6 text-white" />}
    </button>
  );
}
