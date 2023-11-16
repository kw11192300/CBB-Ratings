fetch('9All_Games_2023.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n').slice(1); // Skip the header row

        const tableBody = document.getElementById('gameData9');

        rows.forEach(row => {
            const columns = row.split(',');

            const tr = document.createElement('tr');

            columns.forEach(column => {
                const td = document.createElement('td');
                td.textContent = column;
                tr.appendChild(td);
            });

            tableBody.appendChild(tr);
        });
    });
