"use client";

import { motion } from "framer-motion";

import { Course } from "../../types/course";
import { Atom, Rocket, Server } from "lucide-react";

interface CourseCardProps {
  course: Course;
  index?: number;
}

const icons = { Atom, Rocket, Server };

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const Icon = icons[course.icon_name as keyof typeof icons] || Atom;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay:0.1+ index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="h-64 rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all hover:shadow-lg cursor-pointer"
      style={{ transitionDuration: "0.01s" }}
    >
      <div className="mb-4 inline-flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600 text-indigo-300">
          <Icon size={20} />
        </div>

        <div className="ml-2">
          <h3 className="text-lg font-semibold text-slate-100">{course.title}</h3>
          <p className="text-sm text-slate-300">Updated {new Date(course.created_at).toISOString().slice(0,10)}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex-1 pr-4">
          <div className="relative h-3 w-full rounded-full bg-slate-700">
            <div
              className="absolute left-0 top-0 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        <span className="ml-4 text-sm font-medium text-slate-100">{course.progress}%</span>
      </div>
    </motion.div>
  );
}
