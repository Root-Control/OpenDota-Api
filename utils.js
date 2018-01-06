'use strict';

const queryString = require('query-string');
const _ = require('lodash');
const baseUrl = 'https://api.opendota.com';

module.exports.parseUrl = function(path, options) {
	let querystringdelimiter;
	if(options) querystringdelimiter = _.isEmpty(options) == true ? '' : '?';
	else querystringdelimiter = '';
	
	let query = queryString.stringify(options);
	let url = `${baseUrl}${path}${querystringdelimiter}${query}`;
	return url;
}
