window.addEventListener('load', function () {
    const approvedRequestsTable = document.getElementById('approvedRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    
    approvedRequestsTable.innerHTML = ''; // Clear existing rows

    requests.forEach(request => {
        if (request.status === 'Approved') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.destination}</td>
                <td>${request.fromDate}</td>
                <td>${request.toDate}</td>
                <td>${request.priority}</td>
                <td>${request.status}</td>
            `;
            approvedRequestsTable.appendChild(row);
        }
    });
});
