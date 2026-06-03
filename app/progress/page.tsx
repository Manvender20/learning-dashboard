import Sidebar from "../../src/components/sidebar/Sidebar";
import { BarChart2 } from "lucide-react";

export default function ProgressPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-violet-600 p-3">
              <BarChart2 size={20} />
            </div>

            <div>
              <h1 className="text-2xl font-semibold">Progress</h1>
              <p className="text-sm text-zinc-400 mt-1">Track your learning progress and milestones.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium">No activity yet</h3>
            <p className="mt-2 text-sm text-zinc-400">Your progress will show up here once you start a course.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
