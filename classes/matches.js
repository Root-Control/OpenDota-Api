'use strict';
const openDota = require('../requests');

class Matches {
	constructor() {
		this.openDota = openDota;
		this.basePath = '/api/matches';
		this.path = '';
	}

	getMatchById(match_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/matches%2Fpaths%2F~1matches~1%7Bmatch_id%7D%2Fget
		options = {};
		return new Promise(async (resolve, reject) => {
			this.path = `${this.basePath}/${match_id}`;
			let result = await this.openDota.request(this.path, options);
			resolve(result);
		});
	}
}

module.exports = Matches;

