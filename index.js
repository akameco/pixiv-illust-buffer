'use strict';
const got = require('got');
const cheerio = require('cheerio');

function fetchPixivImagePath(url) {
	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return $('.img-container img').attr('src');
	});
}

function fetchImageBuffer(url) {
	return got(url, {
		encoding: null,
		headers: {
			Referer: 'http://www.pixiv.net/'
		}
	}).then(res => res.body);
}

module.exports = url => {
	return fetchPixivImagePath(url).then(fetchImageBuffer);
};
