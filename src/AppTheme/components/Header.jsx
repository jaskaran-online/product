import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Header : {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

// 1. Create a context
// 2. Create a provider
// 3. Use the context in the component
