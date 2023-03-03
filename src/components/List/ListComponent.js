import { List } from '@mui/material';
import { ListItemComponent } from './ListItemComponent';

export const ListComponent = () => {
	const data = [
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
			<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				aria-label="contacts">
				{data.map((item) => (
					<ListItemComponent item={item} key={item.id} />
				))}
			</List>
		</div>
	);
};
