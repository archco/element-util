import { ElementTarget } from '../methods/base';

declare type ItemsSettable = string|NodeList|HTMLElement[];

declare interface DatasetNames {
  sortDirection: string;
  sortType: string;
  sortValue: string;
}

declare interface SorterOptions {
  items?: ItemsSettable;
  datasetName?: DatasetNames;
}

export default class ElementSorter {
  elm: HTMLElement;
  items: HTMLElement[];
  options: SorterOptions;

  constructor(elm: ElementTarget, options: SorterOptions);

  getDefaultOptions(): SorterOptions;
  setOptions(options: SorterOptions): this;
  setElement(elm: ElementTarget): this;
  getItems(): HTMLElement[];
  setItems(items: ItemsSettable): this;
  execute(): this;
}
