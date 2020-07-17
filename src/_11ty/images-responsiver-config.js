const site = require('../_data/site');
const imageSize = require('image-size');
const markdownIt = require('markdown-it');
const md = new markdownIt();
const config = require('../../pack11ty.config.js');

const runBeforeHook = (image, document) => {
  let documentBody = document.querySelector('body');
  let srcPath = documentBody.getAttribute('data-img-src');

  let distRegex = new RegExp(`^${config.dir.dist}`);

  let distPath = documentBody
    .getAttribute('data-img-dist')
    .replace(distRegex, '');

  let imageSrc = image.getAttribute('src');

  let imageUrl = '';

  if (imageSrc.match(/^(https?:)?\/\//)) {
    // TODO: find a way to get a remote image's dimensions
    // TODO: some images are local but have an absolute URL
    imageUrl = imageSrc;
  } else {
    let imageDimensions;
    if (imageSrc[0] === '/') {
      imageDimensions = imageSize(config.dir.src + imageSrc);
      imageUrl = site.url.replace(/\/$/, '') + imageSrc;
    } else {
      // This is a relative URL
      imageDimensions = imageSize(srcPath + imageSrc);
      imageUrl = site.url.replace(/\/$/, '') + distPath + imageSrc;
    }
    image.setAttribute('width', imageDimensions.width);
    image.setAttribute('height', imageDimensions.height);
    image.setAttribute('src', imageUrl);
  }

  image.dataset.responsiver = image.className;
};

const runAfterHook = (image, document) => {
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
