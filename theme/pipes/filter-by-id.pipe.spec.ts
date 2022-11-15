import { FilterByIdPipe } from './filter-by-id.pipe';

describe('FilterByIdPipe', () => {
  let filterByIdPipe: FilterByIdPipe;

  beforeEach(() => {
filterByIdPipe = new FilterByIdPipe();
    });

// mock items is array of object
  const items = [
  {id: 1, name: 'Arun'},
  {id: 2, name: 'Kumar'},
  {id: 3, name: 'Math'},
];
  it('should be instanciated', () => {
  expect(filterByIdPipe).toBeDefined();
});

// positive test case
  it('should filter above items correctly', () => {
  const filterItem = filterByIdPipe.transform(items, 2);
  console.log('item', [filterItem].length);
  expect([filterItem].length).toBe(1);
});

// nagative test case
  it('should items if wrong value is given', () => {
  const filterItem = filterByIdPipe.transform(items, 4);
  expect(filterItem).toBeUndefined();
});

  });

