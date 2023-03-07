import { render, screen, waitFor } from '@testing-library/react';

import { ListComponent } from '../../../components/List/ListComponent';
import { LIMIT_BY_VIEW } from '../../../config/constansts';
import jokesToSort from '../../__mocks__/jokes_to_sort_mock.json';
import { mockIndexedDB } from '../../__mocks__/functions';

jest.mock('react-indexed-db', () => {
	const original = jest.requireActual('react-indexed-db'); // Step 2.
	return {
		...original,
		initDB: jest.fn(),
		useIndexedDB: jest.fn()
	};
});

describe('Test list component', () => {
	beforeAll(async () => {
		mockIndexedDB();
	});
	it(`Should render ${LIMIT_BY_VIEW} list items with one favorite`, async () => {
		render(<ListComponent data={jokesToSort} />);
		await waitFor(async () => {
			const listItems = await screen.findAllByTestId('ListItem');
			expect(listItems).toHaveLength(LIMIT_BY_VIEW);

			expect(screen.queryAllByTestId('FavoriteIcon')).toHaveLength(1);
			expect(screen.queryAllByTestId('FavoriteBorderIcon')).toHaveLength(LIMIT_BY_VIEW - 1);
		});
	});
});
