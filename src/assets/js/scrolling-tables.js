window.addEventListener("load", () => {
	// Add horizontal scroll to overflowing content tables
	for (const table of document.querySelectorAll("main table")) {
		// create wrapper container
		const wrapper = document.createElement("div");
		wrapper.style.overflowX = "scroll";

		// insert wrapper before el in the DOM tree
		table.parentNode.insertBefore(wrapper, table);

		// move table into wrapper
		wrapper.appendChild(table);
	}
});
