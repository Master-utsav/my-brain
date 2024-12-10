import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  }

  return (
    <HoverBorderGradient onClick={changeTheme} isAnimation={false} className="p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white ">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </HoverBorderGradient>
  );
}
