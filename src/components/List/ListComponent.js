import { List } from '@mui/material';
import PropTypes from 'prop-types';

import { ListItemComponent } from './ListItemComponent';

export const ListComponent = ({ data = [], onPress }) => {
	return (
		<div>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
				{data.map((item) => (
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
