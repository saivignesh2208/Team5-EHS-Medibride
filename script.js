// Sample data for charts
const sleepData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Hours Slept',
        data: [7, 6, 5, 8, 7, 9, 6],
        backgroundColor: 'rgba(64, 112, 244, 0.6)',
        borderColor: 'rgba(64, 112, 244, 1)',
        borderWidth: 1
    }]
};

const foodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Calories Consumed',
        data: [1800, 2000, 2200, 1700, 1900, 2100, 2000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Function to create charts
function createCharts() {
    const sleepCtx = document.getElementById('sleepChart').getContext('2d');
    const foodCtx = document.getElementById('foodChart').getContext('2d');

    new Chart(sleepCtx, {
        type: 'bar',
        data: sleepData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(foodCtx, {
        type: 'bar',
        data: foodData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to create charts on page load
window.onload = createCharts;
