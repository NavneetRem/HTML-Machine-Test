window.addEventListener('load', function () {
    const userRequestsTable = document.getElementById('userRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.destination}</td>
            <td>${request.fromDate}</td>
            <td>${request.toDate}</td>
            <td>${request.priority}</td> <!-- Include priority -->
            <td>${request.status}</td>
        `;
        userRequestsTable.appendChild(row);
    });
});
