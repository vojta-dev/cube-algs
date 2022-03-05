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
  <h2>{alg.name}</h2>
  <Cube {...alg.cube} />
{/each}
