import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return <div>Footer : {theme}</div>;
}
