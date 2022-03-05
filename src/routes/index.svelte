<script>
  import Cube from '$lib/CubeSVG.svelte';
  import { getCategories } from '../db';
  import polyfill from '../polyfill';
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

<style>
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
