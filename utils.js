'use strict';

const queryString = require('query-string');
const _ = require('lodash');

module.exports.parseUrl = function(path, options) {
	let querystringdelimiter;
	if(options) querystringdelimiter = _.isEmpty(options) == true ? '' : '?';
	else querystringdelimiter = '';
	
	let query = queryString.stringify(options);
	let url = `${path}${querystringdelimiter}${query}`;
	return url;
};
