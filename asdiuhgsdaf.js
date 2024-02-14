// This is a full script file

// Assuming you have a function to fetch data from your database
async function fetchData() {
    // Fetch data from your database
    // This is just a placeholder, replace it with your actual code
    const mysql = require('mysql');
    // Create a connection
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'your_database'
    });

    // Connect to the MySQL server
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        // Query the database
        connection.query('SELECT * FROM your_table', (err, rows) => {
            if (err) throw err;

            console.log('Data received from Db:');
            console.log(rows);
        });
    });
    const data = await response.json();

    data = [];

    // Get the parent div
    const parentDiv = document.querySelector('.project-list');

    // Iterate over each item in the data
    data.forEach(item => {
        // Create the 'vertical-rectangle' div
        const verticalRectangleDiv = document.createElement('div');
        verticalRectangleDiv.className = 'vertical-rectangle';

        // Create the 'project-title' div and its children
        const projectTitleDiv = document.createElement('div');
        projectTitleDiv.className = 'project-title';
        const img = document.createElement('img');
        img.src = 'assets/logo.ico';
        img.alt = 'Logo';
        const h2 = document.createElement('h2');
        h2.textContent = item.projectName; // Assuming your data has a 'projectName' field
        projectTitleDiv.append(img, h2);

        // Create the 'description' div
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        descriptionDiv.textContent = item.description; // Assuming your data has a 'description' field

        // Create the 'left_button_container' div and its children
        const leftButtonContainerDiv = document.createElement('div');
        leftButtonContainerDiv.className = 'left_button_container';
        const a1 = document.createElement('a');
        a1.href = item.githubUrl; // Assuming your data has a 'githubUrl' field
        const button1 = document.createElement('button');
        button1.className = 'button';
        button1.textContent = 'Github';
        a1.append(button1);
        const a2 = document.createElement('a');
        a2.href = `projects.html#${item.projectId}`; // Assuming your data has a 'projectId' field
        const button2 = document.createElement('button');
        button2.className = 'button';
        button2.textContent = 'More';
        a2.append(button2);
        leftButtonContainerDiv.append(a1, a2);

        // Append all the created elements to the 'vertical-rectangle' div
        verticalRectangleDiv.append(projectTitleDiv, descriptionDiv, leftButtonContainerDiv);

        // Append the 'vertical-rectangle' div to the parent div
        parentDiv.append(verticalRectangleDiv);
    });
}

// Call the fetchData function when the window loads
window.onload = fetchData;