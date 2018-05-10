import { filter } from '../src/classes/element-filter';
import { makeElement, makeTableRow } from './util/util';

// #country-list
const ul = makeElement('ul', {id: 'country-list'});
const items = [
  makeElement('li', {html: '<span class="south-america">Aruba</span>'}),
  makeElement('li', {html: '<span class="south-america">Brazil</span>'}),
  makeElement('li', {html: '<span class="asia">Brunei</span>'}),
  makeElement('li', {html: '<span class="asia">China</span>'}),
  makeElement('li', {html: '<span class="north-america">Dominica</span>'}),
  makeElement('li', {html: '<span class="oceania">Palau</span>'}),
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
      const { filtered } = filter('#country-list li', 'br');
      expect(filtered.length).toEqual(2); // brazil and brunei.
      expect(filtered[0].textContent).toEqual('Brazil');
    });

    it('filtering on table element.', () => {
      const { filtered } = filter('#filter-table', 'james');
      expect(filtered.length).toEqual(1);
    });
  });

  describe('#FilterOptions:enableHTML', () => {
    it('works.', () => {
      const { filtered } = filter('#country-list li', 'asia', { enableHTML: true });
      expect(filtered.length).toEqual(2);
      expect(filtered[0].textContent).toEqual('Brunei');
    });
  });

  describe('#FilterOptions:action', () => {
    it('hideOthers.', () => {
      const list = document.querySelectorAll('#country-list li');
      const aruba = list[0] as HTMLElement;
      const brazil = list[1] as HTMLElement;

      filter('#country-list li', 'aruba', { action: 'hideOthers' });
      expect(aruba.style.display).toEqual('');
      expect(brazil.style.display).toEqual('none');
      filter('#country-list li', 'brazil', { action: 'hideOthers' });
      expect(aruba.style.display).toEqual('none');
      expect(brazil.style.display).toEqual('');
    });

    it('addClass.', () => {
      const list = document.querySelectorAll('#country-list li');
      const aruba = list[0] as HTMLElement;
      const brazil = list[1] as HTMLElement;

      filter('#country-list li', 'aruba', { action: 'addClass:boom' });
      expect(aruba.classList.contains('boom')).toBeTruthy();
      expect(brazil.classList.contains('boom')).toBeFalsy();
      filter('#country-list li', 'brazil', { action: 'addClass: boom' });
      expect(aruba.classList.contains('boom')).toBeFalsy();
      expect(brazil.classList.contains('boom')).toBeTruthy();
    });

    it('specify custom action.', () => {
      const list = document.querySelectorAll('#country-list li');
      const aruba = list[0] as HTMLElement;
      const customAction = (elm: HTMLElement, isFiltered: boolean): void => {
        elm.dataset.selected = isFiltered ? 'true' : 'false';
      };

      filter('#country-list li', 'aruba', { action: customAction });
      expect(aruba.dataset.selected).toEqual('true');
      filter('#country-list li', 'brazil', { action: customAction });
      expect(aruba.dataset.selected).toEqual('false');
    });
  });
});
