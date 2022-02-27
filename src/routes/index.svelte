<script>
  import Cube from '../lib/CubeSVG.svelte';
  import { getCategories } from '../db';
</script>

<h1>Rubik's cube algorithms</h1>
<main>
  {#each getCategories() as category}
    <a href="./{category.name}">
      <button>
        <Cube width="200" {...category.cube} />
        {category.name}
      </button>
    </a>
  {/each}
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

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 4rem;
    margin: 1rem;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    height: 100%;
    width: 90vw;
    max-width: 1200px;
    margin: auto;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    user-select: none;
    background-color: black;
    border: 2px solid #333;
    border-radius: 16px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    transition: all 150ms;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    color: black;
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

  @media (max-width: 640px) {
    h1 {
      font-size: 3rem;
    }

    main {
      gap: 1rem;
    }

    button {
      padding: 0.5rem;
    }
  }
</style>
