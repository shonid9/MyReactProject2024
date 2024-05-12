import { useTheme } from "../../hooks/useTheme";

function Footer() {
  const { toggle } = useTheme();
  return (
    <footer className="bg-slate-700 md:bg-gray-700 p-3 text-white text-5xl font-extralight  text-center">
      <button onClick={() => toggle()}></button>
      
    </footer>
  );
}

export default Footer;