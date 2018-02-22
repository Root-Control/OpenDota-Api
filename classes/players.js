'use strict';
const openDota = require('../requests');

class Players {
	constructor() {
		this.openDota = openDota;
		this.basePath = 'https://api.opendota.com';
		this.path = '/api/players';
	}

	getPlayerSummary(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D%2Fget
		options = {};
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getPlayerWinAndLoses(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wl%2Fget
		options = {};
		return new Promise(async(resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/wl`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getPlayerRecentMatches(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1recentMatches%2Fget
		options = {};
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/recentMatches`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getPlayerMatches(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1matches%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/matches`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getHeroesSummaryByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1heroes%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/heroes`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getPeersSummaryByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1peers%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/peers`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getProsSummaryByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1pros%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/pros`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getTotalsSummaryByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1totals%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/totals`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getCountsByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1counts%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/counts`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getHistogramsByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1histograms~1%7Bfield%7D%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/histograms`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getWardMapByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wardmap%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/wardmap`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getWordCloudByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wordcloud%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/wordcloud`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getRatingsByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1ratings%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/ratings`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}

	getRankingsByPlayer(account_id, options) {
		//	Docs
		//	https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1rankings%2Fget
		return new Promise(async (resolve, reject) => {
			let url =  `${this.basePath}${this.path}/${account_id}/rankings`;
			let result = await this.openDota.request(url, options);
			resolve(result);
		});
	}
}

module.exports = Players;
