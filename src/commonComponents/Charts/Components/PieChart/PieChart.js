import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from "recharts";

const PieChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartComponent;
