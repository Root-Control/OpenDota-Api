'use strict';
const request = require('request');
const utils = require('./utils');
const validation = require('./jsondata/validation');

module.exports.request = async (path, options) => {
	let result = await validation.validate();
	return new Promise((resolve, reject) => {
		let url = utils.parseUrl(path, options);
		request.get({ url: url }, function (err, httpResponse, response) {
			if (err) return reject(err);
			else resolve(JSON.parse(response));
		});
	});
};
