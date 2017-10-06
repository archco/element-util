import baseMethods from '../methods/base';
import utilMethods from '../methods/util';

export default class Sort {
  constructor(elm, options = {}) {
    this.options = Object.assign(this.getDefaultOptions(), options);
    this._elm = baseMethods.getElement(elm);
    this.setItems(this.options.items);
  }

  // public

  getDefaultOptions() {
    return {
      items: 'auto', // 'auto' | selector | Nodlist | Array
      datasetName: {
        sortDirection: 'sortDirection', // data-sort-direction: 'asc' | 'desc'
        sortType: 'sortType', // data-sort-type: 'string' | 'number' | 'date'
        sortValue: 'sortValue', // data-sort-value
      },
    };
  }

  setElement(elm) {
    this._elm = baseMethods.getElement(elm);
    return this;
  }

  getItems() {
    return this._items;
  }

  setItems(items) {
    if (this._elmIsTable()) {
      this._items = baseMethods.getElements('tbody tr', this._elm);
    } else if (items === 'auto') {
      this._items = this._elm.children;
    } else {
      this._items = baseMethods.getElements(items, this._elm);
    }

    this._items = baseMethods.nodeListToArray(this._items);

    return this;
  }

  sorting() {
    if (this._elmIsTable()) {
      this._sortTable();
    } else {
      this._sortElements();
    }
  }

  // private

  _sortElements() {
    let compareMethod = (a, b) => {
      let aVal = this._getSortValue(a);
      let bVal = this._getSortValue(b);
      let type = this._getSortType(this._elm) || this._getSortType(a);
      let asc = (this._getSortDirection(this._elm) !== 'desc');

      return this._compare(aVal, bVal, type, asc);
    };

    this._toggleSortDirection(this._elm);
    this._sorting(this._items, compareMethod.bind(this));
  }

  _sortTable() {
    let heads = baseMethods.getElements('thead th', this._elm);

    for (let [i, head] of heads.entries()) {
      head.addEventListener('click', event => {
        event.preventDefault();
        let th = event.currentTarget;
        this._toggleSortDirection(th);
        this._sortingTable(
          this._items,
          i + 1,
          this._getSortType(th),
          this._getSortDirection(th)
        );
      });
    }
  }

  _elmIsTable() {
    return this._elm.tagName === 'TABLE';
  }

  _sorting(items, compareMethod) {
    items.sort(compareMethod);
    items.forEach(item => {
      let parent = item.parentNode;
      parent.removeChild(item);
      parent.appendChild(item);
    });
  }

  _sortingTable(rows, nth, type, direction) {
    let compareMethod = (a, b) => {
      a = baseMethods.getElement(`td:nth-child(${nth})`, a);
      b = baseMethods.getElement(`td:nth-child(${nth})`, b);
      let aVal = this._getSortValue(a);
      let bVal = this._getSortValue(b);
      let asc = (direction === 'asc');
      type = type || this._getSortType(a);

      return this._compare(aVal, bVal, type, asc);
    };

    this._sorting(rows, compareMethod.bind(this));
  }

  _getSortValue(elm) {
    let sortValue = elm.dataset[this.options.datasetName.sortValue];
    if (!sortValue) sortValue = elm.textContent;

    return sortValue.toUpperCase();
  }

  _getSortType(elm) {
    return elm.dataset[this.options.datasetName.sortType];
  }

  _getSortDirection(elm) {
    return elm.dataset[this.options.datasetName.sortDirection];
  }

  _toggleSortDirection(elm) {
    elm.dataset[this.options.datasetName.sortDirection]
      = elm.dataset[this.options.datasetName.sortDirection] === 'asc'
      ? 'desc'
      : 'asc';
  }

  _compare(a, b, type, asc = true) {
    if (type === 'number') {
      return this._compareNumber(a, b, asc);
    } else if (type === 'date') {
      return this._compareDate(a, b, asc);
    } else {
      // default: string
      return asc ? a.localeCompare(b) : b.localeCompare(a);
    }
  }

  _compareNumber(a, b, asc = true) {
    a = parseFloat(a);
    b = parseFloat(b);

    return asc ? a - b : b - a;
  }

  _compareDate(a, b, asc = true) {
    a = new Date(a);
    b = new Date(b);

    return asc ? a - b : b - a;
  }
};
