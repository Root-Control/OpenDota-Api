'use strict';
const openDota = require('../requests');

class Heroes {
	constructor() {
		this.openDota = openDota;
		this.basePath = '/api/heroes';
		this.path = '';
	}

	getHeroes(options) {
		//	Docs
		//	https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
		options = {};
		return new Promise(async (resolve, reject) => {
			this.path = `${this.basePath}`;
			let result = await this.openDota.request(this.path, options);
			console.log(result);
			resolve(result);
		});
	}
}

module.exports = Heroes;

