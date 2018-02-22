'use strict';
const openDota = require('../requests');

class Heroes {
	constructor() {
		this.openDota = openDota;
		this.basePath = 'https://api.opendota.com';
		this.path = '/api/heroes';
	}

	getHeroes(options) {
		//	Docs
		//	https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
		options = {};
		return new Promise(async (resolve, reject) => {
			let url = `${this.basePath}${this.path}`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}
}

module.exports = Heroes;

