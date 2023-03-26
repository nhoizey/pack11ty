const pkg = require('../../package.json');
const imageSize = require('image-size');
const markdownIt = require('markdown-it');
const md = new markdownIt();

const runBeforeHook = (image, document, documentUrl) => {
	let imageSrc = image.getAttribute('src');

	let imageUrl = '';

	// TODO: do this automatically in eleventy-plugin-images-responsiver
	if (!imageSrc.match(/^(https?:)?\/\//)) {
		if (imageSrc[0] === '/') {
			// TODO: deal with this in markdown-it-image-size
			let imageDimensions = imageSize('src' + imageSrc);
			image.setAttribute('width', imageDimensions.width);
			image.setAttribute('height', imageDimensions.height);
			imageUrl = pkg.homepage.replace(/\/$/, '') + imageSrc;
		} else {
			// This is a relative URL
			imageUrl = pkg.homepage.replace(/\/$/, '') + documentUrl + imageSrc;
		}
		image.setAttribute('src', imageUrl);
	}

	image.dataset.responsiver = image.className;
};

const runAfterHook = (image, document, documentUrl) => {
	let imageUrl =
		image.getAttribute('data-pristine') || image.getAttribute('src');
	let caption = image.getAttribute('title');

	if (caption !== null) {
		caption = md.render(caption.trim());
	}

	let zoom = [...image.classList].indexOf('zoom') !== -1;

	if (caption || zoom) {
		const figure = document.createElement('figure');
		figure.classList.add(...image.classList);
		// TODO: decide weither classes should be removed from the image or not
		image.classList.remove(...image.classList);
		let figCaption = document.createElement('figcaption');
		figCaption.innerHTML =
			(caption ? caption : '') +
			(zoom
				? `<p class="zoom">&#128269; See <a href="${imageUrl}">full size</a></p>`
				: '');
		figure.appendChild(image.cloneNode(true));
		figure.appendChild(figCaption);

		image.replaceWith(figure);
	}
};

module.exports = {
	default: {
		selector: ':not(picture) img[src]:not([srcset]):not([src*=".svg"])',
		resizedImageUrl: (src, width) =>
			`https://res.cloudinary.com/nho/image/fetch/q_auto,f_auto,w_${width},c_limit/${src}`,
		runBefore: runBeforeHook,
		runAfter: runAfterHook,
		fallbackWidth: 800,
		minWidth: 360,
		maxWidth: 1600,
		sizes: '(max-width: 67rem) 90vw, 60rem',
		attributes: {
			loading: 'lazy',
		},
	},
	logo: {
		fallbackWidth: 200,
		minWidth: 100,
		maxWidth: 400,
		sizes:
			'(max-width: 20rem) 45vw, (max-width: 30rem) 30vw, (max-width: 67rem) 22.5vw, 15rem',
		figure: 'never',
		classes: ['logo'],
	},
};
