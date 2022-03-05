<script>
  import { getCategories } from '../db';
</script>

<nav>
  <a href="/">Home</a>
  {#each getCategories() as category}
    <a href="/{category.name}">{category.name}</a>
  {/each}
</nav>

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
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
  }

  :global(a) {
    text-decoration: none;
    color: #60a5fa;
  }

  :global(h1) {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 4rem;
    margin: 0;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem;
    font-size: 1.25rem;
  }

  main {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  footer {
    margin: 1rem;
    max-width: 100%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
