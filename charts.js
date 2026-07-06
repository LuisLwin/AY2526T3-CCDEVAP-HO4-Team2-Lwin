// Doughnut Chart
const doughnut = document.getElementById('doughnutChart');

new Chart(doughnut, 
    {
        type: 'doughnut',
        data: {
            labels: ['Car 1', 'Car 2', 'Car 3', 'Car 4'],
            datasets: 
            [{
                data: [95, 80, 70, 55],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        options: 
        {
            plugins: 
            {
                title: 
                {
                    display: true,
                    text: 'Vehicle Usage Chart (no. of uses)'
                }
            }
        }
    }
);


// Horiontal Bar Chart
const bar = document.getElementById('barChart');

new Chart(bar, 
    {
        type: 'bar',
        data: 
        {
            labels: ['Car 1', 'Car 2', 'Car 3', 'Car 4'],
            datasets: 
            [{
                label: 'Mileage (km)',
                data: [5200, 4700, 3900, 3200]
            }]
        },
        options: 
        {
            indexAxis: 'y',
            plugins: 
            {
                title: 
                {
                    display: true,
                    text: 'Mileage per Vehicle (km)'
                }
            }
        }
    }
);


// Radar Chart
const radar = document.getElementById('radarChart');

new Chart(radar, {
    type: 'radar',
    data: {
        labels: ['Fuel Efficiency', 'Comfort', 'Reliability', 'Availability', 'Safety'],
        datasets: [{
            label: 'Car 2 Ratings',
            data: [8, 9, 9, 7, 10]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vehicle Ratings'
            }
        },
        scales: {
            r: {
                min: 0,
                max: 10
            }
        }
    }
});