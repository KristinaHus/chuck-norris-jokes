import { List } from '@mui/material';
import PropTypes from 'prop-types';

import { ListItemComponent } from './ListItemComponent';

export const ListComponent = ({ data, onPress }) => {
	const listData = data || [
		{ id: 'one', value: 'one' },
		{ id: 'two', value: 'two' },
		{ id: 'three', value: 'three' },
		{ id: 'four', value: 'four' },
		{ id: 'five', value: 'five' },
		{ id: 'six', value: 'six' },
		{ id: 'seven', value: 'seven' },
		{ id: 'eight', value: 'eight' },
		{ id: 'nine', value: 'nine' },
		{ id: 'ten', value: 'ten' },
		{ id: 'eleven', value: 'eleven' },
		{ id: 'twelve', value: 'twelve' }
	];

	return (
		<div>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
				{listData.map((item) => (
					<ListItemComponent item={item} key={item.id} onPress={onPress} />
				))}
			</List>
		</div>
	);
};

ListComponent.propTypes = {
	data: PropTypes.array,
	onPress: PropTypes.func
};
