<script>
  export let width = 144;

  //    ABC
  //   -----
  // L |123| D
  // K |456| E
  // J |789| F
  //   -----
  //    IHG
  export let main; // 123 456 789
  export let sides; // ABC DEF GHI JKL

  function getStyle(color) {
    const fillColor = {
      G: '#00d800',
      R: '#ee0000',
      B: '#1d4ed8',
      O: '#ffa100',
      W: 'white',
      Y: '#fefe00',
      '-': 'gray',
      '.': 'transparent',
    }[color];

    return `fill: ${fillColor}; stroke-width: 4; stroke: ${fillColor === 'transparent' ? 'transparent' : 'black'};`;
  }

  const offset = (num) => 27 + 30 * num;
  const negativeOffset = (num) => 87 - 30 * num;
</script>

<svg {width} height={width} viewBox="0 0 144 144">
  {#each main.split(' ') as row, i}
    {#each row.split('') as color, j}
      <rect x={offset(j)} y={offset(i)} width="30" height="30" style={getStyle(color)} />
    {/each}
  {/each}

  {#each sides.split(' ') as side, i}
    {#each side.split('') as color, j}
      <rect
        x={[offset(j), 117, negativeOffset(j), 17][i]}
        y={[17, offset(j), 117, negativeOffset(j)][i]}
        width={i % 2 === 0 ? 30 : 10}
        height={i % 2 === 0 ? 10 : 30}
        style={getStyle(color)}
      />
    {/each}
  {/each}
</svg>
