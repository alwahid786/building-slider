const pieChart = document.getElementById('pieChart');

const pieChartData = {
    labels: [
      'Occupied',
      'Disconnect',
      'Unoccupied'
    ],
    datasets: [{
    //   label: 'My First Dataset',
      data: [28, 4, 10],
      backgroundColor: [
        '#02dcff',
        '#ea1818',
        '#d4d4d4'
      ],
      hoverOffset: 1
    }]
  };

  const myPieChart = new Chart(pieChart, {
    type: 'pie',
    data: pieChartData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
  })

const pieChartContainer = document.querySelector('#pieChartValues');

const totalPieChartData = pieChartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

document.querySelector('#pieCharTotal').innerHTML = `<h6 class="f-sm">Total Room: ${totalPieChartData}</h6>`;

// const dataLength = pieChartData.datasets[0].data.length;

const pieChartValues = pieChartData.datasets[0].data.map((value, index) => {
    const label = pieChartData.labels[index];
    const color = pieChartData.datasets[0].backgroundColor[index];

    return `
        <div>
            <div class="d-flex align-items-center flex-gap-1">
                <div style="width:10px; height:10px; background-color:${color}; border-radius:50%;"></div>
                <p class="f-sm">${label}- ${value}</p>
            </div>
        </div>
    `;
}).join('');

pieChartContainer.innerHTML = pieChartValues;



// Doughnut Chart 
const Doughnut = document.querySelector('#Doughnut');

const doughnutData = {
    labels: [
        'Test one',
        'Test two',
        'Test three',
        'Test four'
    ],
    datasets: [{
        data: [4, 2, 1, 1],
        backgroundColor: [
            '#02dcff',
            '#7553ff',
            '#ffcc43',
            '#ff6f93'

        ],
        hoverOffset: 1
    }]
};

const myDoughnut = new Chart(Doughnut, {
    type: 'doughnut',
    data: doughnutData,
    options: {
        cutout: '80%',
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})

const doughnutContainer = document.querySelector('#DoughnutValues');

const doughnutValues = doughnutData.datasets[0].data.map((value, index) => {
    const label = doughnutData.labels[index];
    const color = doughnutData.datasets[0].backgroundColor[index];

    return `
        <div class="d-flex flex-column mt-3">
            <div class="d-flex align-items-center flex-gap-1">
                <div style="width:10px; height:10px; background-color:${color}; border-radius:50%;"></div>
                <h6>${value}</h6>
            </div>
            <p class="f-sm">${label}</p>
        </div>
    `
}).join('');


doughnutContainer.innerHTML = doughnutValues;


// Bar chart
const barLineCtx = document.getElementById('barLineChart').getContext('2d');

const barLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Bar Dataset',
            type: 'bar',
            data: [8, 19, 3, 15, 2, 3, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Line Dataset',
            type: 'line',
            data: [12, 19, 3, 5, 2, 3, 20],
            fill: false,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }
    ]
};

const barLineChart = new Chart(barLineCtx, {
    type: 'bar',
    data: barLineData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Two lines chart

const twoLineCtx = document.getElementById('twoLineChart').getContext('2d');

        const twoLineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Line 1',
                    data: [10, 20, 15, 25, 30, 35, 40],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4 // Adjust curvature of line
                },
                {
                    label: 'Line 2',
                    data: [5, 15, 10, 20, 25, 20, 30],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4 // Adjust curvature of line
                }
            ]
        };

        const lineChartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                shadowedLine: {
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 5
                }
            }
        };

        const lineChart = new Chart(twoLineCtx, {
            type: 'line',
            data: twoLineChartData,
            options: lineChartOptions
        });

