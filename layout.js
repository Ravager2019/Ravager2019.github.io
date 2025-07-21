document.addEventListener("DOMContentLoaded", () => {
  const header = `\
    <header>
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="experience.html">Experience</a>
        <a href="skills.html">Skills</a>
        <a href="contact.html">Contact</a>
        <a href="projects.html">Projects</a>
        <a href="playlists.html">Playlists</a>
      </nav>
    </header>`;

  const footer = `\
    <footer>
      <p>&copy; 2024 Tanner Hardman</p>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});
