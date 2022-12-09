import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const chartData = [
    { monthName: 'Jan', value: 0 },
    { monthName: 'Feb', value: 0 },
    { monthName: 'Mar', value: 0 },
    { monthName: 'Apr', value: 0 },
    { monthName: 'May', value: 0 },
    { monthName: 'Jun', value: 0 },
    { monthName: 'Jul', value: 0 },
    { monthName: 'Aug', value: 0 },
    { monthName: 'Sep', value: 0 },
    { monthName: 'Oct', value: 0 },
    { monthName: 'Nov', value: 0 },
    { monthName: 'Dec', value: 0 },
  ];

  chartData.forEach((item, index) => {
    const value = props.expensesData
      .filter((data) => data.date.getMonth() === index)
      .reduce((s, it) => +it.amount + s, 0);
    item.value += value;
  });

  const maxVal = Math.max(...chartData.map((it) => it.value));

  chartData.forEach((it) => (it.maxVal = maxVal));

  return (
    <div className="chart">
      {chartData.map((item) => (
        <ChartBar key={item.monthName} chartItem={item} />
      ))}
    </div>
  );
}

export default Chart;
