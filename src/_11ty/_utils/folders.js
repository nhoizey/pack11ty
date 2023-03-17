const fs = require('fs');

const folders = [];

const getFolders = () => {
	fs.readdirSync('src/collections', {
		encoding: 'utf8',
		withFileTypes: true,
	}).forEach((item) => {
		if (item.isDirectory()) {
			folders.push(item.name);
		}
	});
};

if (folders.length === 0) {
	getFolders();
}

module.exports = folders;
