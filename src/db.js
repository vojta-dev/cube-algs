export const getCategories = () => data;
export const getAlgs = (categoryName) => data.find((category) => category.name === categoryName)?.algs;

const data = [
  {
    name: 'OLL',
    cube: { main: '-YY YYY -Y-', sides: '... ..Y ..Y ..Y' },
    algs: [],
  },
  {
    name: 'PLL',
    cube: { main: 'Y', sides: 'GBR BOG RRB OGO' },
    links: [
      {
        name: 'CubeSkills (pdf)',
        link: 'https://www.cubeskills.com/uploads/pdf/tutorials/pll-algorithms.pdf',
      },
      {
        name: 'AlgDb (website)',
        link: 'http://algdb.net/puzzle/333/pll',
      },
      {
        name: 'J Perm (video)',
        link: 'https://www.youtube.com/watch?v=9r_HqG4zSbk',
      },
    ],
    algs: [
      { name: 'Aa', cube: { main: 'Y', sides: 'RGR BRO GBB OOG' }, algs: ["x R' U R' D2 R U' R' D2 R2", "l' U R' D2 R U' R' D2 R2	"] },
      { name: 'Ab', cube: { main: 'Y', sides: 'RGR BRO GBB OOG' } },
    ],
  },
];
