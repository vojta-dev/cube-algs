<script context="module">
  import { getAlgs } from '../db';

  export const load = ({ params }) => {
    const algs = getAlgs(params.category);

    return {
      status: algs === undefined ? 404 : 200,
      props: { algs: algs, category: params.category },
    };
  };
</script>

<script>
  import Cube from '$lib/CubeSVG.svelte';

  export let algs;
  export let category;
</script>

<h1>{category}</h1>
{#each algs as alg}
  <div class="alg">
    <div class="cube">
      <h2>{alg.name}</h2>
      <Cube {...alg.cube} />
    </div>
    <span>{alg.algs[0]}</span>
  </div>
{/each}

<style>
  .alg {
    display: flex;
    gap: 1rem;
  }

  .alg .cube {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .alg .cube h2 {
    margin: 0 0 2rem;
    letter-spacing: 1px;
  }

  .alg span {
    margin-top: 3rem;
    font-size: 2rem;
  }
</style>
