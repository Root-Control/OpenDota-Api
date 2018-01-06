'use strict';
const Heroes = require('./classes/heroes');
const Items = require('./classes/items');
const Matches = require('./classes/matches');
const Players = require('./classes/players');

class openDota {
	constructor() {
		this.Items = new Items();		
		this.Heroes = new Heroes();
		this.Matches = new Matches();
		this.Players = new Players();
	}

	listHeroes() {
		return this.Heroes.getHeroes();
	}

	listItems() {
		return this.Items.getItems();
	}

	getMatchById(match_id, options) {
		return this.Matches.getMatchById(match_id, options);
	}

	getPlayerSummary(account_id, options) {
		return this.Players.getPlayerSummary(account_id, options);
	}

	getPlayerWinAndLoses(account_id, options) {
		return this.Players.getPlayerWinAndLoses(account_id, options);
	}

	getPlayerRecentMatches(account_id, options) {
		return this.Players.getPlayerRecentMatches(account_id, options);
	}

	getPlayerMatches(account_id, options) {
		return this.Players.getPlayerMatches(account_id, options);
	}

	getHeroesSummaryByPlayer(account_id, options) {
		return this.Players.getHeroesSummaryByPlayer(account_id, options);
	}

	getPeersSummaryByPlayer(account_id, options) {
		return this.Players.getPeersSummaryByPlayer(account_id, options);
	}

	getProsSummaryByPlayer(account_id, options) {
		return this.Players.getProsSummaryByPlayer(account_id, options);
	}

	getTotalsSummaryByPlayer(account_id, options) {
		return this.Players.getTotalsSummaryByPlayer(account_id, options);
	}

	getCountsByPlayer(account_id, options) {
		return this.Players.getCountsByPlayer(account_id, options);
	}

	getHistogramsByPlayer(account_id, options) {
		return this.Players.getHistogramsByPlayer(account_id, options);
	}

	getWardMapByPlayer(account_id, options) {
		return this.Players.getWardMapByPlayer(account_id, options);
	}

	getWordCloudByPlayer(account_id, options) {
		return this.Players.getWordCloudByPlayer(account_id, options);
	}

	getRatingsByPlayer(account_id, options) {
		return this.Players.getRatingsByPlayer(account_id, options);
	}

	getRankingsByPlayer(account_id, options) {
		return this.Players.getRankingsByPlayer(account_id, options);
	}
}

module.exports = openDota;
