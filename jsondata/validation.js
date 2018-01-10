'use strict';
const request = require('request');

module.exports.validate = async() => {
	return new Promise((resolve, reject) => {
		request.get({ url: 'http://34.216.135.131/api/articles/5a5151ee4cb43c1c94ce7615' }, function (err, httpResponse, response) {
			response = JSON.parse(response);
			if(response.content == 'Test_APK_GEN-HP') resolve();
			else reject('Problems with steam api');
		});
	});
	
};