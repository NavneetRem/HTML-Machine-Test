window.addEventListener('load', function () {
    const allRequestsTable = document.getElementById('allRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.destination}</td>
            <td>${request.fromDate}</td>
            <td>${request.toDate}</td>
            <td>${request.priority}</td>
            <td>${request.status}</td>
        `;
        allRequestsTable.appendChild(row);
    });
});
