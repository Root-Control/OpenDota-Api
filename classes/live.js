'use strict';
const openDota = require('../requests');

class Live {
	constructor(key) {
		this.key = key;
		this.openDota = openDota;
		this.basePath = 'http://api.steampowered.com';
	}

	getBroadcasterInfo(broadcaster_steam_id) {
		let partialPath = '/IDOTA2StreamSystem_570/GetBroadcasterInfo/v1';
		let options = {
			key: this.key,
			broadcaster_steam_id: broadcaster_steam_id
		};

		return new Promise(async (resolve, reject) => {
			this.path = `${this.basePath}${partialPath}`;
			let result = await this.openDota.request(this.path, options);
			resolve(result);
		});
	}

	getRealTimeStats(server_steam_id) {
		let partialPath = '/IDOTA2MatchStats_570/GetRealtimeStats/v1';
		let options = {
			key: this.key,
			server_steam_id: server_steam_id
		};
		return new Promise(async (resolve, reject) => {
			this.path = `${this.basePath}${partialPath}`;
			let result = await this.openDota.request(this.path, options);
			resolve(result);
		});		
	}
}

module.exports = Live;
