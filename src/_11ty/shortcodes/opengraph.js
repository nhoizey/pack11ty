import getShareImage from "@jlengstorf/get-share-image";

export const ogImage = (title) => {
	return title
		? getShareImage({
				imageWidth: 1200,
				imageHeight: 630,
				cloudName: "nho",
				imagePublicID: "resources/pack11ty-opengraph-background",
				titleFont: "Noto Serif",
				textAreaWidth: 1100,
				textLeftOffset: 50,
				titleBottomOffset: 330,
				titleFontSize: 50 + Math.max(0, 30 - title.length),
				title: title,
			})
		: "";
};
