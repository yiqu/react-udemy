import './ChartBar.scss';

const ChartBar = (props) => {

  const label = props.label;

  let barHeight = '0%';

  if (props.max > 0) {
    barHeight = Math.round((props.value / (props.max ? props.max : 1)) * 100) + '%';
  }
  
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={ {height : barHeight} }>
        </div>
      </div>
      <div className="chart-bar__label">
        {label}
      </div>
    </div>
  );
};

export default ChartBar;