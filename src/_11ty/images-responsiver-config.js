import pkg from "../../package.json" with { type: "json" };

import imageSize from "image-size";
import markdownIt from "markdown-it";
const md = new markdownIt();

const runBeforeHook = (image, document, documentUrl) => {
	const imageSrc = image.getAttribute("src");
	let imageUrl = "";

	if (!imageSrc.match(/^(https?:)?\/\//)) {
		// TODO: do this automatically in eleventy-plugin-images-responsiver
		if (imageSrc[0] === "/") {
			// TODO: deal with this in markdown-it-image-size
			const imageDimensions = imageSize(`src${imageSrc}`);
			image.setAttribute("width", imageDimensions.width);
			image.setAttribute("height", imageDimensions.height);
			imageUrl = pkg.homepage.replace(/\/$/, "") + imageSrc;
		} else {
			// This is a relative URL
			imageUrl = pkg.homepage.replace(/\/$/, "") + documentUrl + imageSrc;
		}
		image.setAttribute("src", imageUrl);
	}

	image.dataset.responsiver = image.className;
};

const runAfterHook = (image, document, documentUrl) => {
	let caption = undefined;

	// Extract `title` attribute of the image
	const title = image.getAttribute("title");

	// If there's a title value,
	//   parse it for Markdown content
	if (title !== null) {
		caption = md.render(title.trim());
	}

	// If there's a caption,
	//   add a `<figure>` around the image,
	//   with the caption in a `<figcaption>`
	if (caption) {
		const figure = document.createElement("figure");
		figure.classList.add(...image.classList);
		image.classList.remove(...image.classList);
		const figCaption = document.createElement("figcaption");
		figCaption.innerHTML = caption;
		figure.appendChild(image.cloneNode(true));
		figure.appendChild(figCaption);

		image.replaceWith(figure);
	}
};

export const responsiverConfig = {
	default: {
		selector: ':not(picture) img[src]:not([srcset]):not([src*=".svg"])',
		resizedImageUrl: (src, width) =>
			`https://res.cloudinary.com/nho/image/fetch/q_auto,f_auto,w_${width},c_limit/${src}`,
		runBefore: runBeforeHook,
		runAfter: runAfterHook,
		fallbackWidth: 800,
		minWidth: 360,
		maxWidth: 1600,
		sizes: "(max-width: 67rem) 90vw, 60rem",
		attributes: {
			loading: "lazy",
		},
	},
	logo: {
		fallbackWidth: 200,
		minWidth: 100,
		maxWidth: 400,
		sizes:
			"(max-width: 20rem) 45vw, (max-width: 30rem) 30vw, (max-width: 67rem) 22.5vw, 15rem",
		figure: "never",
		classes: ["logo"],
	},
};
