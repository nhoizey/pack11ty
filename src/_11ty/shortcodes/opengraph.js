const getShareImage = require('@jlengstorf/get-share-image').default;

module.exports = {
	ogImage: (title) => {
		return title
			? getShareImage({
					imageWidth: 1200,
					imageHeight: 630,
					cloudName: 'nho',
					imagePublicID: 'resources/opengraph-background',
					titleFont: 'Noto Serif',
					textAreaWidth: 1100,
					textLeftOffset: 50,
					titleBottomOffset: 330,
					titleFontSize: 50 + Math.max(0, 30 - title.length),
					title: title,
			  })
			: '';
	},
};
