<script context="module">
  import { getAlgs } from '../db';

  export const load = ({ params }) => ({ props: { algs: getAlgs(params.category) } });
</script>

<script>
  export let algs;
</script>

<h1>{JSON.stringify(algs)}</h1>
