// Function to create and populate a table
function createTable(data) {
    const tableContainer = document.getElementById("table-container17");
    const table = document.createElement("table");
    const headers = ["Change","Rank", "Team", "Conf", "W-L", "Rating"];

    // Create table header
    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows with data
    data.forEach(row => {
        const rowData = row.split(",");
        const rowElement = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            rowElement.appendChild(cell);
        });
        table.appendChild(rowElement);
    });

    tableContainer.appendChild(table);
}

// Fetch data from the CSV file (CBB17.csv)
fetch("CBB16.csv")
    .then(response => response.text())
    .then(data => {
        const rows = data.split("\n");
        createTable(rows);
    })
    .catch(error => console.error("Error fetching data:", error));
