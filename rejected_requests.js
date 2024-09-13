window.addEventListener('load', function () {
    const rejectedRequestsTable = document.getElementById('rejectedRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    
    rejectedRequestsTable.innerHTML = ''; // Clear existing rows

    requests.forEach(request => {
        if (request.status === 'Rejected') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.destination}</td>
                <td>${request.fromDate}</td>
                <td>${request.toDate}</td>
                <td>${request.priority}</td>
                <td>${request.status}</td>
            `;
            rejectedRequestsTable.appendChild(row);
        }
    });
});
