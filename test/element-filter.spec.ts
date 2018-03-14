import { filter } from '../src/classes/element-filter';
import { makeElement, makeTableRow } from './util/util';

// #filter-list
const ul = makeElement('ul', {id: 'filter-list'});
const items = [
  makeElement('li', {text: 'Aruba'}),
  makeElement('li', {text: 'Brazil'}),
  makeElement('li', {text: 'Brunei'}),
  makeElement('li', {text: 'China'}),
  makeElement('li', {text: 'Dominica'}),
  makeElement('li', {text: 'Palau'}),
];
items.forEach(el => ul.appendChild(el));
document.body.appendChild(ul);

// #filter-table
const table = makeElement('table', {id: 'filter-table'});
const thead = makeElement('thead');
const tbody = makeElement('tbody');
thead.appendChild(makeTableRow(
  makeElement('th', {text: 'ID'}),
  makeElement('th', {text: 'Name'}),
  makeElement('th', {text: 'Age'}),
));
const rows = [
  makeTableRow(
    makeElement('td', {text: '1'}),
    makeElement('td', {text: 'Nora'}),
    makeElement('td', {text: '15'}),
  ),
  makeTableRow(
    makeElement('td', {text: '2'}),
    makeElement('td', {text: 'Owen'}),
    makeElement('td', {text: '35'}),
  ),
  makeTableRow(
    makeElement('td', {text: '3'}),
    makeElement('td', {text: 'James'}),
    makeElement('td', {text: '25'}),
  ),
];
rows.forEach(r => tbody.appendChild(r));
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

describe('#ElementFilter', () => {
  describe('#filter', () => {
    it('filtering on list.', () => {
      const hit = filter('#filter-list li', 'br');
      expect(hit).toEqual(2); // brazil and brunei.
    });

    it('filtering on table element.', () => {
      const hit = filter('#filter-table', 'james');
      expect(hit).toEqual(1);
    });
  });
});
