import './ChartBar.css';

function ChartBar(props) {
  let barFillHeight = '0%';

  if (props.chartItem.maxVal > 0) {
    barFillHeight =
      Math.round((props.chartItem.value / props.chartItem.maxVal) * 100) + '%';
  }

  // console.log(barFillHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.chartItem.monthName}</div>
    </div>
  );
}

export default ChartBar;
