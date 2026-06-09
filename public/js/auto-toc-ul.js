initTableOfContents();

function initTableOfContents() {
	const container = document.querySelector("#toc");
	if (!container) return;

	const allHeadings = document.querySelectorAll("h3");
	if (allHeadings.length < 2) return;
	let output = "<h2 class='h2top'>Page navigation</h2><menu><li><a href='#top'>Top</a>";
	[...allHeadings].forEach((headingEl) => {
		const title = headingEl.innerHTML;
		const link =
			headingEl.getAttribute("id") ||
			encodeURI(
				title
					.replaceAll(" ", "-")
					.replaceAll(".", "-")
					.replaceAll("#", "")
					.replaceAll("&", "")
					.replaceAll(/<[^>]*>?/gm, "")
					.replaceAll("--", "-")
			).toLowerCase();
		headingEl.setAttribute("id", link);
		output += `<li><a href="#${link}">${title}</a></li>`;
	});
	container.innerHTML = output + "</menu>";
}
