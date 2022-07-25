import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={reactLogo} alt="React Image" />
        <p>
          <span>R</span>eact<span>F</span>acts
        </p>
      </div>

      <h2>React Course - Project 1</h2>
    </nav>
  );
}
