'use strict';
const openDota = require('../requests');
const utils = require('../package-utils');

class Matches {
	constructor() {
		this.openDota = openDota;
		this.basePath = 'https://api.opendota.com';
		this.path = '/api/matches';
	}

	getMatchById(match_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/matches%2Fpaths%2F~1matches~1%7Bmatch_id%7D%2Fget
		// 	Valid options { setnames: true , account_id: '396452909' }
		return new Promise(async (resolve, reject) => {
			let url = `${this.basePath}${this.path}/${match_id}`;
			let result = await this.openDota.request(url, options);

			if(options && options.setnames) result = await utils.setNames(result.players);
			if(options && options.account_id) result = await utils.getIndividualUser(result.players, options.account_id);
			resolve(result);
		});
	}
}

module.exports = Matches;

