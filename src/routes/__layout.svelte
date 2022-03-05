<main>
  <slot />
</main>

<footer>
  <small>
    &copy; {new Date().getFullYear()} Vojta | Colors mostly from <a href="https://vercel.com/">Vercel</a> and
    <a href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference">Tailwind</a> | Inspired by
    <a href="https://www.cubeskills.com/">CubeSkills</a>, <a href="https://jperm.net/">J Perm</a> and <a href="http://algdb.net/">AlgDb</a>
  </small>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  :global(body) {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: #111;
    color: white;
    height: 100vh;
  }

  :global(a) {
    text-decoration: none;
  }

  main {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  footer {
    margin: 1rem;
    max-width: 100%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  footer a {
    color: #60a5fa;
  }
</style>
