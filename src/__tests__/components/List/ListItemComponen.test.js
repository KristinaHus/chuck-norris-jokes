import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { ListItemComponent } from '../../../components/List/ListItemComponent';
import { useUpdateFavorite } from '../../../hooks/useUpdateFavorite';

jest.mock('../../../hooks/useUpdateFavorite');

describe('Test ListComponent icon change', () => {
	it('List item is not marked as favorite', async () => {
		useUpdateFavorite.mockReturnValue({ isFavorite: false, updateFavorite: () => {}, err: '' });
		const Component = () => (
			<ListItemComponent
				item={{
					id: '1',
					value: 'Test value'
				}}
			/>
		);

		render(<Component />);

		// Test snapshots
		const component = renderer.create(<Component />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		expect(screen.findByTestId('favoriteButton')).toBeTruthy();
		expect(screen.queryByTestId('FavoriteBorderIcon')).toBeInTheDocument();
		expect(screen.queryByTestId('FavoriteIcon')).not.toBeInTheDocument();
	});

	it('List item is marked as favorite', async () => {
		useUpdateFavorite.mockReturnValue({ isFavorite: true, updateFavorite: () => {}, err: '' });

		const Component = () => (
			<ListItemComponent
				item={{
					id: '1',
					value: 'Test value'
				}}
			/>
		);

		render(<Component />);
		const component = renderer.create(<Component />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		expect(screen.queryByTestId('favoriteButton')).toBeInTheDocument();
		expect(screen.queryByTestId('FavoriteIcon')).toBeInTheDocument();
		expect(screen.queryByTestId('FavoriteBorderIcon')).not.toBeInTheDocument();
	});
});
