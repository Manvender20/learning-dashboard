
"use client";

import { useState } from "react";
import {
  Menu,
  Home,
  BookOpen,
  BarChart2,
  Settings,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/", icon: Home },
    { label: "Courses", href: "/courses", icon: BookOpen },
    { label: "Progress", href: "/progress", icon: BarChart2 },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside
      className={`hidden lg:flex flex-col border-r border-slate-800/60 bg-slate-900/60 py-6 transition-all ease-in-out backdrop-blur-sm ${
        isCollapsed ? "w-20 items-center" : "w-64 px-4"
      }`}
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
        transitionDuration: "0.01s",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md" />

          {!isCollapsed && (
            <h2 className="font-semibold text-slate-100">LearnHub</h2>
          )}
        </div>

        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="rounded-lg p-2 hover:bg-slate-800/40 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={18} className="text-zinc-200" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col gap-3 w-full">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            collapsed={isCollapsed}
          />
        ))}
      </nav>
    </aside>
  );
}