<!-- Not used, but kept just in case I want to switch back to canvas for some reason -->
<script>
  import { onMount } from 'svelte';

  export let colors;

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');

    colors.split('/').forEach((row, i) => {
      row.split('').forEach((color, j) => {
        const x = 30 * j + 27;
        const y = 30 * i + 27;

        ctx.fillStyle = { G: 'green', R: 'red', B: 'blue', O: 'orange', W: 'white', Y: 'yellow' }[color];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillRect(x, y, 30, 30);
        ctx.strokeRect(x, y, 30, 30);
      });
    });
  });
</script>

<canvas bind:this={canvas} width="144" height="144" />
