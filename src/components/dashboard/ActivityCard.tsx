"use client";

import { motion } from "framer-motion";

const activityData = [
  4, 3, 2, 1, 0, 2, 3,
  1, 4, 2, 0, 3, 1, 4,
  2, 3, 1, 4, 0, 2, 3,
  1, 4, 2, 0, 3, 1, 4,
  2, 3, 1, 4, 0, 2, 3,
];

export default function ActivityCard() {
  const getCellColor = (value: number) => {
    switch (value) {
      case 0:
        return "bg-slate-700";
      case 1:
        return "bg-violet-900";
      case 2:
        return "bg-violet-700";
      case 3:
        return "bg-violet-500";
      case 4:
        return "bg-violet-300";
      default:
        return "bg-slate-700";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.4 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="h-80 rounded-2xl border border-slate-700 bg-slate-800 p-6 lg:col-span-2 transition-all hover:shadow-lg"
      style={{ transitionDuration: "0.01s" }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Learning Activity
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Recent interactions and engagement
          </p>
        </div>

        <div className="text-sm text-slate-400">Last 30 days</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {activityData.map((value, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded-md ${getCellColor(value)}`}
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}