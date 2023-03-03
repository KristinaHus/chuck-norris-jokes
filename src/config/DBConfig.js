export const DBConfig = {
	name: 'ChuckNorrisDB',
	version: 1,
	objectStoresMeta: [
		{
			store: 'favorite',
			storeConfig: { keyPath: '_id', autoIncrement: true },
			storeSchema: [
				{ name: 'id', keypath: 'id', options: { unique: true } },
				{ name: 'value', keypath: 'value' }
			]
		}
	]
};
