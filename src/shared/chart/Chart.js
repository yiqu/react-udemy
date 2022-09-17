import ChartBar from './ChartBar';
import './Chart.scss';

const Chart = (props) => {

  const content = props.dataPoints.map((dp) => {
    return (
      <ChartBar value={ dp.value } max={ dp.max } label={ dp.label } key={ dp.label }></ChartBar>
    );
  });

  return (
    <div className="chart">
      { content }
    </div>
  );
};

export default Chart;