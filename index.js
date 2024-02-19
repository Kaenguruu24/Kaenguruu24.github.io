fetch('assets/project_data.json')
	.then(response => response.json())
	.then(data => {
		data["projects"].forEach(item => {
			let element = document.getElementById('projects-container');

			let html = `
			<div class="rectangle">
                <div class="project-title">
                    <img src="${item.logo}" alt="Logo" />
                    <h2>${item.name}</h2>
                </div>
                <div class="description">
                    ${item.description}
                </div>
				`;
			let indev_status = `
                <div class="home-project-status indev">
                    <h3>InDev</h3>
                </div>
				`;
			let paused_status = `
                <div class="home-project-status paused">
                    <h3>Paused</h3>
                </div>
				`;
			let cancelled_status = `
                <div class="home-project-status cancelled">
                    <h3>Cancelled</h3>
                </div>
				`;
			let released_status = `
                <div class="home-project-status released">
                    <h3>Released</h3>
                </div>
				`;
			let footer = `
				<div class="button_container" >
					<a href="${item.github_repo}">
						<button class="button">Github</button>
					</a>
					<a href="projects.html#${item.name}">
						<button class="button">More</button>
					</a>
				</div >
			</div >
			`;

			if (item["status"] == "in_dev") {
				html += indev_status;
			} else if (item["status"] == "paused") {
				html += paused_status;
			} else if (item["status"] == "cancelled") {
				html += cancelled_status;
			} else if (item["status"] == "released") {
				html += released_status;
			}
			html += footer;

			element.insertAdjacentHTML('beforeend', html);
		});
	})
	.catch(error => console.error('Error:', error));