import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const LineChartComponent = ({ data, xaxislabel = "", yaxislabel = "" }) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart width={500} height={400} data={data}>
        <XAxis dataKey="name">
          <Label value={xaxislabel} offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value={yaxislabel} angle={-90} position="insideLeft" />
        </YAxis>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineChartComponent;
