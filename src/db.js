export const getCategories = () => data;
export const getAlgs = (categoryName) => data.find((category) => category.name === categoryName).algs;

const data = [
  {
    name: 'OLL',
    cube: { main: '-YY YYY -Y-', sides: '... ..Y ..Y ..Y' },
    algs: [],
  },
  {
    name: 'PLL',
    cube: { main: 'Y', sides: 'GBR BOG RRB OGO' },
    algs: [
      { name: 'Aa', cube: { main: 'Y', sides: 'RGR BRO GBB OOG' } },
      { name: 'Ab', cube: { main: 'Y', sides: 'RGR BRO GBB OOG' } },
    ],
  },
];
