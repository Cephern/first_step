export default function Main({ darkMode }) {
  return (
    <main className={darkMode ? "dark" : ""}>
      <h1>Facts about React</h1>

      <ul>
        <li>Was First released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Fb</li>
        <li>Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </main>
  );
}
