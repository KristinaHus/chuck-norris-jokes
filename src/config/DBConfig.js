export const DBConfig = {
	name: 'ChuckNorrisDB',
	version: 1,
	objectStoresMeta: [
		{
			store: 'favorite',
			storeConfig: { keyPath: 'id', autoIncrement: true },
			storeSchema: [
				{ name: '_id', keypath: '_id', options: { unique: true } },
				{ name: 'value', keypath: 'value' }
			]
		}
	]
};
