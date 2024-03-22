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