import { sort } from '../src/classes/element-sorter';
import { makeElement, makeTableRow } from './util/util';

// #sort-list
const ul = makeElement('ul', {id: 'sort-list'});
const items = [
  makeElement('li', {text: 'dog'}),
  makeElement('li', {text: 'zxy'}),
  makeElement('li', {text: 'hog'}),
  makeElement('li', {text: 'cat'}),
  makeElement('li', {text: 'ant'}),
  makeElement('li', {text: 'fox'}),
];
items.forEach(el => ul.appendChild(el));
document.body.appendChild(ul);

// #sort-list-2
const ul2 = makeElement('ul', {id: 'sort-list-2', dataset: {sortType: 'number'}});
const items2 = [
  makeElement('li', {text: '2'}),
  makeElement('li', {text: '100'}),
  makeElement('li', {text: '11'}),
  makeElement('li', {text: '1.5'}),
  makeElement('li', {text: '88.88'}),
];
items2.forEach(el => ul2.appendChild(el));
document.body.appendChild(ul2);

// #sort-table
const table = makeElement('table', {id: 'sort-table'});
const thead = makeElement('thead');
const tbody = makeElement('tbody');
thead.appendChild(makeTableRow(
  makeElement('th', {text: 'String'}),
  makeElement('th', {text: 'Number', dataset: {sortType: 'number'}}),
  makeElement('th', {text: 'Date', dataset: {sortType: 'date'}}),
));
const rows = [
  makeTableRow(
    makeElement('td', {text: 'Nora'}),
    makeElement('td', {text: 'Thirteen', dataset: {sortValue: '13'}}),
    makeElement('td', {text: '2017-10-06'}),
  ),
  makeTableRow(
    makeElement('td', {text: 'Owen'}),
    makeElement('td', {text: 'One hundred', dataset: {sortValue: '100'}}),
    makeElement('td', {text: '2003-10-27'}),
  ),
  makeTableRow(
    makeElement('td', {text: 'James'}),
    makeElement('td', {text: 'Zero', dataset: {sortValue: '0'}}),
    makeElement('td', {text: '1444-05-01'}),
  ),
];
rows.forEach(el => tbody.appendChild(el));
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

describe('#ElementSorter', () => {
  describe('#sort', () => {
    it('sort on list.', () => {
      const sortedItems = sort('#sort-list');
      expect(sortedItems[0].textContent).toEqual('ant');
    });

    it('specifying items option.', () => {
      const sortedItems = sort('#sort-list-2', {items: '#sort-list-2 li'});
      expect(sortedItems[0].textContent).toEqual('1.5');
    });

    it('cursor style of thead to be `pointer`.', () => {
      const th = document.querySelector('#sort-table thead th:first-child') as HTMLElement;
      expect(th.style.cursor).toEqual('pointer');
    });
  });

  describe('#sort on table', () => {
    sort('#sort-table');

    it('sortType: date', () => {
      const sel = '#sort-table tbody tr:first-child td:nth-child(3)'; // first row, third column.
      const dateHead =  document.querySelector('#sort-table thead th:nth-child(3)') as HTMLElement;
      dateHead.click(); // ascend.
      let elm = document.querySelector(sel);
      expect(elm.textContent).toEqual('1444-05-01');
      dateHead.click(); // descend.
      elm = document.querySelector(sel);
      expect(elm.textContent).toEqual('2017-10-06');
    });

    it('sortType: string (default)', () => {
      const sel = '#sort-table tbody tr:first-child td:nth-child(1)'; // first row, first column
      const firstHead = document.querySelector('#sort-table thead th:first-child') as HTMLElement;
      firstHead.click(); // ascend.
      expect(document.querySelector(sel).textContent).toEqual('James');
      firstHead.click(); // descend.
      expect(document.querySelector(sel).textContent).toEqual('Owen');
    });

    it('sortType: number', () => {
      const sel = '#sort-table tbody tr:first-child td:nth-child(2)'; // first row, first column
      const secondHead = document.querySelector('#sort-table thead th:nth-child(2)') as HTMLElement;
      secondHead.click(); // ascend.
      expect(document.querySelector(sel).textContent).toEqual('Zero');
      secondHead.click(); // descend.
      expect(document.querySelector(sel).textContent).toEqual('One hundred');
    });
  });
});
