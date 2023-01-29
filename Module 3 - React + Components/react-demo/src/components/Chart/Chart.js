import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((x) => x.value);
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((x) => (
        <ChartBar
          value={x.value}
          maxValue={totalMax}
          label={x.label}
          key={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
