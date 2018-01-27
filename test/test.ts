import eu, { ElementFilter as ef, ElementSorter as es } from '../types/element-util.d';

const f = new ef('#app', 'h', { enableHTML: true });
const s = new es('ul', {
  items: 'auto',
  datasetName: {
    sortType: 'sortType',
  },
});
