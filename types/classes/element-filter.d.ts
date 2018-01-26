import { ElementTarget } from '../methods/base';

declare interface FilterOptions {
  enableHTML?: boolean;
}

export default class ElementFilter {
  elms: NodeList;
  filter: string;
  hit: number;
  options: FilterOptions;

  constructor(selector: ElementTarget, filter?: string, options?: FilterOptions);

  getDefaultOptions(): FilterOptions;
  setOptions(options: FilterOptions);
  setFilter(filter: string): this;
  getHit(): number;
  execute(): this;
}
