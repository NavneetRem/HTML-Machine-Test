document.getElementById('travelRequestForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get and calculate date values
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate = new Date(document.getElementById('toDate').value);
    const noOfDays = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));
    
    // Update the number of days input field
    document.getElementById('noOfDays').value = noOfDays;
    
    // Get form values
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const project = document.getElementById('project').value;
    const cause = document.getElementById('cause').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const modeOfTravel = document.getElementById('modeOfTravel').value;
    const priority = document.getElementById('priority').value; // Get priority

    // Create request object
    const request = {
        employeeId,
        employeeName,
        project,
        cause,
        source,
        destination,
        fromDate: fromDate.toISOString().split('T')[0], // Format YYYY-MM-DD
        toDate: toDate.toISOString().split('T')[0],
        noOfDays,
        modeOfTravel,
        status: 'Pending', // Default status
        priority // Include priority
    };

    // Save to localStorage
    const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    requests.push(request);
    localStorage.setItem('travelRequests', JSON.stringify(requests));
    
    document.getElementById('requestMessage').textContent = 'Your travel request has been submitted.';
});
