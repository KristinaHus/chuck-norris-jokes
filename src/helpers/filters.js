export const sortByDate = (list) => {
	return list.sort((prev, next) => new Date(next.created_at) - new Date(prev.created_at));
};

export const removeLatest = (list) => {
	const sortedList = sortByDate(list);
	const latestItem = sortedList.pop();
	return list.filter((item) => item.id !== latestItem.id);
};
