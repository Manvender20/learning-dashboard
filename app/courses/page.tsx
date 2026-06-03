import Sidebar from "../../src/components/sidebar/Sidebar";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-violet-600 p-3">
              <BookOpen size={20} />
            </div>

            <div>
              <h1 className="text-2xl font-semibold">Courses</h1>
              <p className="text-sm text-zinc-400 mt-1">Browse and continue your courses.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium">No courses yet</h3>
            <p className="mt-2 text-sm text-zinc-400">You don't have any courses enrolled. Explore the catalog to get started.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
