import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
} from "recharts";

const BarChartComponent = ({ data, xaxislabel = "", yaxislabel = "" }) => {
  return (
    <ResponsiveContainer height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name">
          <Label value={xaxislabel} offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value={yaxislabel} angle={-90} position="insideLeft" />
        </YAxis>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
