'use strict';
const openDota = require('../requests');
const items = require('../jsondata/items');

class Items {
	constructor() {}

	getItems() {
		return new Promise(async (resolve, reject) => {
			resolve(items);
		});
	}
}

module.exports = Items;

