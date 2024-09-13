window.addEventListener('load', function () {
    const onHoldRequestsTable = document.getElementById('onHoldRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    
    onHoldRequestsTable.innerHTML = ''; // Clear existing rows

    requests.forEach(request => {
        if (request.status === 'On Hold') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.destination}</td>
                <td>${request.fromDate}</td>
                <td>${request.toDate}</td>
                <td>${request.priority}</td>
                <td>${request.status}</td>
            `;
            onHoldRequestsTable.appendChild(row);
        }
    });
});
