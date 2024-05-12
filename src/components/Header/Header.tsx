import { useTheme } from "../../hooks/useTheme";
import Navbar from "../NavBar/NavBar";
import "./Header.scss";

function Header() {
  const {theme} = useTheme(); 
  return (
    <header className="bg-blue-600 dark:bg-gray-700 p-5 text-white text-5xl font-extralight  text-center">
      <h2 className="text-5xl text-white-500"></h2>
      <Navbar />
    </header>
  );
}

export default Header;

// library - ספריה
// framework - ספריית על
