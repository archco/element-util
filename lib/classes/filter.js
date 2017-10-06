import baseMethods from '../methods/base';
import utilMethods from '../methods/util';

export default class Filter {
  /**
   * constructor
   *
   * @param  {String|Nodelist} selector
   * @param  {String} filter
   * @param  {Object} [options={}]
   * @return {void}
   */
  constructor(selector, filter, options = {}) {
    this._elms = baseMethods.getElements(selector);
    this._filter = filter;
    this._hit = 0;
    this.options = Object.assign(this.getDefaultOptions(), options);
  }

  // public

  /**
   * Returns default options.
   *
   * @return {Object}
   */
  getDefaultOptions() {
    return {
      htmlMode: false,
    };
  }

  /**
   * set filter string.
   *
   * @param {String} filter
   */
  setFilter(filter) {
    this._filter = filter;
    return this;
  }

  /**
   * Returns number of filtered elements count.
   *
   * @return {Number}
   */
  getHit() {
    return this._hit;
  }

  /**
   * Excute filtering.
   *
   * @return {void}
   */
  filtering() {
    if (this._elmsIsTable()) {
      this._filteringTable();
    } else {
      this._filteringNodes(this._elms);
    }
  }

  // private

  _filteringTable() {
    let table = this._elms[0];
    let tableRows = baseMethods.getElements('tbody tr', table);

    this._filteringNodes(tableRows);
  }

  _filteringNodes(nodes) {
    this._hit = 0;
    let filter = this._filter.toUpperCase();

    for (let node of nodes) {
      let content = this.options.htmlMode
        ? node.innerHTML
        : node.textContent;

      if (content.toUpperCase().indexOf(filter) === -1) {
        utilMethods.hide(node);
      } else {
        utilMethods.show(node);
        this._hit++;
      }
    }
  }

  _elmsIsTable() {
    return this._elms.length === 1 && this._elms[0].tagName === 'TABLE';
  }
};
