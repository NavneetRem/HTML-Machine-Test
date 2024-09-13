window.addEventListener('load', function () {
    const pendingRequestsTable = document.getElementById('pendingRequests');
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];

    // Clear existing rows
    pendingRequestsTable.innerHTML = '';

    requests.forEach(request => {
        if (request.status === 'Pending') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.employeeId}</td>
                <td>${request.employeeName}</td>
                <td>${request.project}</td>
                <td>${request.cause}</td>
                <td>${request.source}</td>
                <td>${request.destination}</td>
                <td>${request.fromDate}</td>
                <td>${request.toDate}</td>
                <td>${request.noOfDays}</td>
                <td>${request.modeOfTravel}</td>
                <td>${request.priority}</td>
                <td>${request.status}</td>
                <td>
                    <select onchange="handleAction(this, '${request.employeeId}')">
                        <option value="">Select Action</option>
                        <option value="approve">Approve</option>
                        <option value="reject">Reject</option>
                        <option value="onHold">On Hold</option>
                    </select>
                </td>
            `;
            pendingRequestsTable.appendChild(row);
        }
    });
});

function handleAction(selectElement, employeeId) {
    const action = selectElement.value;
    if (!action) return;

    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    const updatedRequests = requests.map(request => {
        if (request.employeeId === employeeId) {
            request.status = action.charAt(0).toUpperCase() + action.slice(1); // Capitalize first letter
        }
        return request;
    });

    localStorage.setItem('travelRequests', JSON.stringify(updatedRequests));

    // Redirect based on action
    if (action === 'approve') {
        window.location.href = 'approved_requests.html';
    } else if (action === 'reject') {
        window.location.href = 'rejected_requests.html';
    } else if (action === 'onHold') {
        window.location.href = 'on_hold_requests.html';
    }
}
