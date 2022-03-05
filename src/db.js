export const getCategories = () => data;
export const getAlgs = (categoryName) => data.find((category) => category.name === categoryName)?.algs;

const data = [
  {
    name: 'OLL',
    cube: { main: '-YY YYY -Y-', sides: '... ..Y ..Y ..Y' },
    links: [
      {
        name: 'CubeSkills (pdf)',
        link: 'https://www.cubeskills.com/uploads/pdf/tutorials/oll-algorithms.pdf',
      },
      {
        name: 'AlgDb (website)',
        link: 'http://algdb.net/puzzle/333/oll',
      },
      {
        name: 'J Perm (video)',
        link: 'https://www.youtube.com/watch?v=vU6HsK3hvQs',
      },
    ],
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
      { name: 'Aa', cube: { main: 'Y', sides: 'RGR BRO GBB OOG' }, algs: ["x R' U R' D2 R U' R' D2 R2"] },
      { name: 'Ab', cube: { main: 'Y', sides: 'RRO GBR BOB OGG' }, algs: ["x' R U' R D2 R' U R D2 R2"] },
      { name: 'E', cube: { main: 'Y', sides: 'BOG RGO GRB OBR' }, algs: ["x' R U' R' D R U R' D' R U R' D R U' R' D'"] },
      { name: 'F', cube: { main: 'Y', sides: 'GBR BRG RGB OOO' }, algs: ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"] },
      { name: 'Ga', cube: { main: 'Y', sides: 'GBR BOG RRB OGO' }, algs: [] },
      { name: 'Gb', cube: { main: 'Y', sides: 'GOR BBG RGB ORO' }, algs: [] },
      { name: 'Gc', cube: { main: 'Y', sides: 'GRR BOG RGB OBO' }, algs: [] },
      { name: 'Gd', cube: { main: 'Y', sides: 'GBR BGG ROB ORO' }, algs: [] },
      { name: 'H', cube: { main: 'Y', sides: 'GBG ROR BGB ORO' }, algs: [] },
      { name: 'Ja', cube: { main: 'Y', sides: 'OGG RRR BOO GBB' }, algs: [] },
      { name: 'Jb', cube: { main: 'Y', sides: 'GGR BBG RRB OOO' }, algs: [] },
      { name: 'Na', cube: { main: 'Y', sides: 'RRO GGB OOR BBG' }, algs: [] },
      { name: 'Nb', cube: { main: 'Y', sides: 'ROO GBB ORR BGG' }, algs: [] },
      { name: 'Ra', cube: { main: 'Y', sides: 'GOB OGG RBR BRO' }, algs: [] },
      { name: 'Rb', cube: { main: 'Y', sides: 'BRG ROB OBO GGR' }, algs: [] },
      { name: 'T', cube: { main: 'Y', sides: 'GGR BOG RBB ORO' }, algs: [] },
      { name: 'Ua', cube: { main: 'Y', sides: 'GOG RGR BBB ORO' }, algs: [] },
      { name: 'Ub', cube: { main: 'Y', sides: 'GRG ROR BBB OGO' }, algs: [] },
      { name: 'V', cube: { main: 'Y', sides: 'OBR BRG ROO GGB' }, algs: [] },
      { name: 'Y', cube: { main: 'Y', sides: 'BOG RRO GBB OGR' }, algs: [] },
      { name: 'Z', cube: { main: 'Y', sides: 'BRB OGO GOG RBR' }, algs: [] },
    ],
  },
];
