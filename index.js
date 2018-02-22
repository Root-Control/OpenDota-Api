'use strict';
const Live = require('./classes/live');
const Items = require('./classes/items');
const Heroes = require('./classes/heroes');
const Matches = require('./classes/matches');
const Players = require('./classes/players');

class openDota {
	constructor(data) {
		this.Items = new Items();		
		this.Heroes = new Heroes();
		this.Matches = new Matches();
		this.Players = new Players();
		this.Live = new Live(data.key);
	}

	listHeroes() {
		return this.Heroes.getHeroes();
	}

	listItems() {
		return this.Items.getItems();
	}

	async getMatchById(match_id, options) {
		return await this.Matches.getMatchById(match_id, options);
	}

	async getPlayerSummary(account_id, options) {
		return await this.Players.getPlayerSummary(account_id, options);
	}

	async getPlayerWinAndLoses(account_id, options) {
		return await this.Players.getPlayerWinAndLoses(account_id, options);
	}

	async getPlayerRecentMatches(account_id, options) {
		return await this.Players.getPlayerRecentMatches(account_id, options);
	}

	async getPlayerMatches(account_id, options) {
		return await this.Players.getPlayerMatches(account_id, options);
	}

	async getHeroesSummaryByPlayer(account_id, options) {
		return await this.Players.getHeroesSummaryByPlayer(account_id, options);
	}

	async getPeersSummaryByPlayer(account_id, options) {
		return await this.Players.getPeersSummaryByPlayer(account_id, options);
	}

	async getProsSummaryByPlayer(account_id, options) {
		return await this.Players.getProsSummaryByPlayer(account_id, options);
	}

	async getTotalsSummaryByPlayer(account_id, options) {
		return await this.Players.getTotalsSummaryByPlayer(account_id, options);
	}

	async getCountsByPlayer(account_id, options) {
		return await this.Players.getCountsByPlayer(account_id, options);
	}

	async getHistogramsByPlayer(account_id, options) {
		return await this.Players.getHistogramsByPlayer(account_id, options);
	}

	async getWardMapByPlayer(account_id, options) {
		return await this.Players.getWardMapByPlayer(account_id, options);
	}

	async getWordCloudByPlayer(account_id, options) {
		return await this.Players.getWordCloudByPlayer(account_id, options);
	}

	async getRatingsByPlayer(account_id, options) {
		return await this.Players.getRatingsByPlayer(account_id, options);
	}

	async getRankingsByPlayer(account_id, options) {
		return await this.Players.getRankingsByPlayer(account_id, options);
	}

	async getRealTimeStats(account_id) {
		let data = await this.Live.getBroadcasterInfo(account_id);
		if(data.live) return await this.Live.getRealTimeStats(data.server_steam_id);
		else return { available: false };
	};
}

module.exports = openDota;
