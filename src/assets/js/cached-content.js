const cachedElement = document.querySelector("#cached");
const pagesList = [];

async function addPageToList(page) {
	const pathname = new URL(page.url).pathname;
	const hierarchy = pathname.replace(
		/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\//,
		"$1-$2-$3-",
	);

	if (pathname !== "/offline/" && pathname.endsWith("/")) {
		const pageHtml = await page.text();

		const pageDom = document.createElement("html");
		pageDom.innerHTML = pageHtml;

		const pageTitle = pageDom.querySelector("h1").innerText;

		const linkElement = document.createElement("a");
		linkElement.href = pathname;
		linkElement.textContent = pageTitle;

		const liElement = document.createElement("li");
		liElement.style.gridColumnStart = hierarchy.split("/").length - 1;
		liElement.appendChild(linkElement);

		pagesList.push({ pathname: pathname, element: liElement });
	}
}

async function loadPagesFromCache() {
	const cache = await window.caches.open("pages");
	const pages = await cache.matchAll();

	await Promise.all(
		pages.map(async (page) => {
			return addPageToList(page);
		}),
	);

	// Sort pages by pathname
	pagesList.sort((a, b) => {
		return a.pathname.localeCompare(b.pathname, "en", {
			ignorePunctuation: true,
		});
	});

	for (const page of pagesList) {
		cachedElement.appendChild(page.element);
	}
}

loadPagesFromCache();
