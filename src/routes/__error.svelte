<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
      },
    };
  }
</script>

<script>
  export let status;
</script>

<h1>ERROR {status}</h1>
<p>
  If you think this is an error, please
  <a href="https://github.com/vojta-dev/cube-algs/issues/new?labels=bug&template=bug_report.md">report it on GitHub</a>
</p>
<button on:click={() => history.back()}>Go back to previous page</button>
<a href="https://cube-algs.vercel.app"><button on:click={() => history.back()}>Go to homepage</button></a>

<style>
  * {
    text-align: center;
  }

  h1 {
    color: red;
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    font-size: 1rem;
    padding: 1rem 2rem;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;
    background-color: black;
    color: white;
    border: 2px solid #333;
    border-radius: 16px;
    transition: all 150ms;
    margin-top: 2rem;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
