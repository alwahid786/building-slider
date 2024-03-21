const ctx = document.getElementById('pieChart');

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

  const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: pieChartData,
  })

  const pieChartContainer = document.querySelector('#pieChartValues');
  var totalpieCharValues = pieChartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

  const pieChartValues = pieChartData.labels.map((label, index) => {
    const pieCharData = pieChartData.datasets[0].data[index];

    return `
        <div>
            <h4>Total Room: ${totalpieCharValues}</h4>
            <p>${label}- ${index}<p>
        </div>
        `
  }).join('');

  pieChartContainer.innerHTML = pieChartValues;