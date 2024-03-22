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

const dataLength = pieChartData.datasets[0].data.length;

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


const doughnutTotalPlugin = {
    afterDraw: function(chart) {
        const ctx = chart.ctx;
        const canvas = chart.canvas;
        const chartArea = chart.chartArea;
        const sum = chart.data.datasets[0].data.reduce((acc, value) => acc + value, 0);

        // Display total in the center
        ctx.save();
        ctx.fillStyle = '#000000'; // Set the color of the text
        ctx.font = '10px Arial'; // Set the font size and family
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(sum, (chartArea.left + chartArea.right) / 2, (chartArea.top + chartArea.bottom) / 2);
        ctx.restore();
    }
};

const myDoughnut = new Chart(Doughnut, {
    type: 'doughnut',
    data: doughnutData,
    options: {
        cutout: '80%',
        plugins: {
            doughnutTotal : doughnutTotalPlugin,
            legend: {
                display: false,
            }
        }
    }
})