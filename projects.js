var hashValue = window.location.hash.substring(1).replace("%20", " ");

fetch('assets/project_data.json')
	.then(response => response.json())
	.then(data => {
		jsonData = data;
		data["projects"].forEach(item => {
			let element = document.getElementById('projects-container');

			let other = `
			<div class="left_button_container" id="project${data["projects"].indexOf(item)}-buttons">
			<a href="${item.github_repo}">
				<button class="button">Github</button>
			</a>
			<a href="projects.html#${item.name}">
				<button class="button" id="toggle-view" > More</button >
			</a >
		</div > `;

			let head = ``;
			if (hashValue == item.name) {
				head = `<div class="vertical-rectangle resized" id="project${data["projects"].indexOf(item)}" >`;
			} else {
				head = `<div class="vertical-rectangle" id="project${data["projects"].indexOf(item)}" >`;
			}
			let html = `
				<div class="project-title">
					<img src="${item.logo}" alt="Logo">
						<h2>${item.name}</h2>
				</div>

				<div class="project-description">
					${item.description}
				</div>
			`;
			let indev_status = `
				<div class="home-project-status extended indev" >
					<h3>In Development</h3>
				</div >
				`;
			let paused_status = `
				<div class="home-project-status extended paused" >
					<h3>Paused</h3>
				</div >
				`;
			let cancelled_status = `
				<div class="home-project-status extended cancelled" >
					<h3>Cancelled</h3>
                </div >
				`;
			let released_status = `
				<div class="home-project-status extended released" >
					<h3>Released</h3>
                </div >
				`;
			let footer = `
			</div >
				`;

			head += html += other;

			if (item["status"] == "in_dev") {
				html += indev_status;
			} else if (item["status"] == "paused") {
				html += paused_status;
			} else if (item["status"] == "cancelled") {
				html += cancelled_status;
			} else if (item["status"] == "released") {
				html += released_status;
			}
			head += footer;

			element.insertAdjacentHTML('beforeend', head);
			document.getElementById(`project${data["projects"].indexOf(item)}-buttons`).addEventListener("click", function () {
				document.getElementById(`project${data["projects"].indexOf(item)}`).classList.toggle("resized");
			});
		})
	})
	.catch(error => console.error('Error:', error));