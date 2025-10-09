import React from "react";
import useHeroApp from "../Hook/useHeroApp";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Rechart = () => {
  const { app } = useHeroApp();

  // Fallback if app or ratings are missing
  const { ratings = [] } = app || {};
  console.log(ratings);
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        App Ratings Overview
      </h2>

      {ratings.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ratings}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No ratings data available</p>
      )}
    </div>
  );
};

export default Rechart;
