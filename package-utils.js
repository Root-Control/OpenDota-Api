'use strict';
const Heroes = require('./classes/heroes');
const Items = require('./classes/items');
let items = new Items();
let heroes = new Heroes();

module.exports.setNames = async data => {
	let resultHeroes = await heroes.getHeroes();
	let resultItems = await items.getItems();

	for(let i = 0; i < data.length; i ++) {
		data[i].item_0 = await setItemName(data[i].item_0, resultItems);
		data[i].item_1 = await setItemName(data[i].item_1, resultItems);
		data[i].item_2 = await setItemName(data[i].item_2, resultItems);
		data[i].item_3 = await setItemName(data[i].item_3, resultItems);
		data[i].item_4 = await setItemName(data[i].item_4, resultItems);
		data[i].item_5 = await setItemName(data[i].item_5, resultItems);
		data[i].hero_id = await setHeroName(data[i].hero_id, resultHeroes);
	}

	return { players: data };
};


module.exports.getIndividualUser = async (data, account_id) => {
	let individual;
	let returnData = { players: [] };
	for(let i = 0; i< data.length; i++) {
		if(data[i].account_id == account_id) {
			individual = data[i];
		}
	}
	returnData.players.push(individual);
	return returnData;
};


let setHeroName = async (id, heroes) => {
	let name;
	heroes.forEach((key) => {
		if(key.id == id) {
			name = key.localized_name;
		}
	});
	return name;
};


let setItemName = async (id, items) => {
	let name;
	items.forEach((key) => {
		if(key.id == id) {
			name = key.name;
		}
	});
	if(!name || name == 'empty') name = '';
	return name;
};
