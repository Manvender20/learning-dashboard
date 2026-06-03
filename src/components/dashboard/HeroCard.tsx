"use client";

import { Student } from "../../types/student";
import { motion } from "framer-motion";

interface HeroCardProps {
  student: Student;
}

export default function HeroCard({ student }: HeroCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1,delay:0.0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-800/60 p-8 transition-all hover:shadow-lg hover:shadow-indigo-900/20"
      style={{ transitionDuration: "0.01s" }}
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-700/20 blur-3xl" />
      <div className="absolute left-6 bottom-8 h-28 w-28 rounded-full bg-cyan-400/6 blur-2xl" />

      <div className="relative z-10">
        <p className="text-sm text-slate-300">Welcome back 👋</p>

        <h1 className="mt-2 text-4xl font-extrabold text-slate-100">
          {student.name}
        </h1>

        <p className="mt-3 text-slate-300">Ready to continue learning today?</p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
            <span className="text-xl">🔥</span>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-100">{student.streak} Day Streak</p>
            <p className="text-sm text-slate-300">Keep the streak going — small steps every day</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}