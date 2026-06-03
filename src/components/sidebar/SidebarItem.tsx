"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  collapsed?: boolean;
};

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  collapsed = false,
}: Props) {
  const pathname = usePathname() || "/";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-2xl p-3 transition-all w-full ${
        isActive ? "bg-slate-800/50 ring-1 ring-indigo-600/20" : "hover:bg-slate-800/30"
      }`}
      style={{ transitionDuration: "0.01s" }}
      aria-current={isActive ? "page" : undefined}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          isActive ? "bg-indigo-600/20 text-indigo-400" : "text-zinc-300"
        }`}
        style={{ transitionDuration: "0.01s" }}
      >
        <Icon size={18} />
      </div>

      {!collapsed && (
        <span className="whitespace-nowrap text-sm text-slate-100">{label}</span>
      )}

      {isActive && (
        <span className="ml-auto hidden h-6 w-1 rounded-full bg-indigo-500 md:block" />
      )}
    </Link>
  );
}
