import Chart from '../../shared/chart/Chart';


const ExpensesChart = (props) => {

  const chartDatapoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0
    },
    {
      label: 'Apr',
      value: 0
    },
    {
      label: 'May',
      value: 0
    },
    {
      label: 'Jun',
      value: 0
    },
    {
      label: 'Jul',
      value: 0
    },
    {
      label: 'Aug',
      value: 0
    },
    {
      label: 'Sep',
      value: 0
    },
    {
      label: 'Oct',
      value: 0
    },
    {
      label: 'Nov',
      value: 0
    },
    {
      label: 'Dec',
      value: 0
    }
  ];

  const max = props.items.reduce((prev, curr) => {
    let now = prev + (+(curr.amount));
    return now;
  }, 0);

  props.items.forEach((item) => {
    const monthInt = item.date?.getMonth();
    chartDatapoints[monthInt].value = (+item.amount) + (+chartDatapoints[monthInt].value);
    chartDatapoints[monthInt].max = max;
  });

  return (
    <Chart dataPoints={ chartDatapoints }></Chart>
  );
};

export default ExpensesChart;