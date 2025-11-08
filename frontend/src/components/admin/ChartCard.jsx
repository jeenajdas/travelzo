import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const ChartCard = ({ title, data }) => {
  const isBar = title.includes("Top");

  return (
    <div className="bg-white dark:bg-[#132B5E] p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-[#0A1F44] dark:text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        {isBar ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00A8E8" radius={[8, 8, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00A8E8" strokeWidth={3} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
