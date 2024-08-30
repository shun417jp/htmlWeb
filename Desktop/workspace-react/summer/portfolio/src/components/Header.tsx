import Logo from "./logo";
import Nav from "./nav";

// components/Header.tsx
const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center bg-lime-200">
      <div className="container flex flex-row justify-between items-center max-w-5xl">
        <Logo isBoxStyle />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
