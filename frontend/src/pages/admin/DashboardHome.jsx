import { motion } from "framer-motion";
import StatCard from "../../components/admin/StatCard";
import ChartCard from "../../components/admin/ChartCard";
import { data } from "../../data/mockData";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <motion.h1
        className="text-3xl font-bold text-[#0A1F44] dark:text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Overview
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Daily Revenue Trends" data={data.dailyRevenue} />
        <ChartCard title="Top 5 Routes by Revenue" data={data.topRoutes} />
      </div>
    </div>
  );
};

export default DashboardHome;
