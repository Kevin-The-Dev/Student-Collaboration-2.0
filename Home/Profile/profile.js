document.addEventListener('DOMContentLoaded', () => {
    // Attendance Data (for Bar Chart)
    const attendanceData = {
        labels: ['Programming', 'Electrical Eng.', 'Data Structures', 'Database Management'],
        datasets: [{
            label: 'Attendance %',
            data: [75, 90, 100, 95], // Replace with actual attendance data
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Performance Data (for Line Chart with null value example)
    const performanceData = {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
        datasets: [{
            label: 'Overall Percentage (%)',
            data: [77.5, 82.5, null, 85], // Null value for missing data in Semester 3
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        }]
    };

    // Render Attendance Bar Chart
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(attendanceCtx, {
        type: 'bar',
        data: attendanceData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Render Performance Line Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'line',
        data: performanceData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
