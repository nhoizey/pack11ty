const cachedElement = document.querySelector('#cached');
const pagesList = [];

async function addPageToList(page) {
	const pathname = new URL(page.url).pathname;
	const pageHtml = await page.text();

	let pageDom = document.createElement('html');
	pageDom.innerHTML = pageHtml;

	let pageTitle = pageDom.querySelector('h1').innerText;

	let linkElement = document.createElement('a');
	linkElement.href = pathname;
	linkElement.className = 'u-url';
	linkElement.textContent = pageTitle;

	let pElement = document.createElement('p');
	pElement.className = 'card__title p-name';
	pElement.appendChild(linkElement);

	let liElement = document.createElement('li');
	liElement.className = 'list__item list__item--large';
	liElement.appendChild(pElement);

	if (pageDom.querySelector('.main footer')) {
		let pageMeta = document.createElement('footer');
		pageMeta.innerHTML = pageDom.querySelector('.main footer').innerHTML;
		liElement.appendChild(pageMeta);
	}

	pagesList.push({ pathname: pathname, element: liElement });
}

async function loadPagesFromCache() {
	const cache = await window.caches.open('pages');
	const pages = await cache.matchAll();

	await Promise.all(
		pages.map(async (page) => {
			return addPageToList(page);
		})
	);

	// Sort pages by pathname
	pagesList.sort((a, b) => {
		return a.pathname.localeCompare(b.pathname, 'en', {
			ignorePunctuation: true,
		});
	});

	pagesList.forEach((page) => {
		if (page.pathname !== '/offline/') {
			cachedElement.appendChild(page.element);
		}
	});
}

loadPagesFromCache();
