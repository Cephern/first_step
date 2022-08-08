import reactLogo from "../assets/react.svg";

export default function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={darkMode ? "dark" : ""}>
      <div className="logo">
        <img src={reactLogo} alt="React Image" />
        <p>
          <span>R</span>eact<span>F</span>acts
        </p>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
