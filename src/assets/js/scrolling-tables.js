window.addEventListener('load', () => {
	// Add horizontal scroll to overflowing content tables
	document.querySelectorAll('main table').forEach((table) => {
		// create wrapper container
		let wrapper = document.createElement('div');
		wrapper.style.overflowX = 'scroll';

		// insert wrapper before el in the DOM tree
		table.parentNode.insertBefore(wrapper, table);

		// move table into wrapper
		wrapper.appendChild(table);
	});
});
