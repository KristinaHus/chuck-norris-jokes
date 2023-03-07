import { removeLatest, sortByDate } from '../../helpers/filters';
import { LIMIT_BY_VIEW } from '../../config/constansts';
import mockToSort from '../__mocks__/jokes_to_sort_mock.json';
import mockSorted from '../__mocks__/jokes_sorted_mock.json';
import mockJoke from '../__mocks__/joke_mock.json';

describe('Test helper functions', () => {
	it('Should return sorted jokes', () => {
		expect(sortByDate(mockToSort)).toEqual(mockSorted);
	});

	it(`Should return ${LIMIT_BY_VIEW} jokes`, () => {
		const jokes = removeLatest([mockJoke, ...mockToSort]);
		expect(jokes).toHaveLength(LIMIT_BY_VIEW);
	});
});
