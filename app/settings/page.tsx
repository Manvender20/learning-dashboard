import Sidebar from "../../src/components/sidebar/Sidebar";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-violet-600 p-3">
              <Settings size={20} />
            </div>

            <div>
              <h1 className="text-2xl font-semibold">Settings</h1>
              <p className="text-sm text-zinc-400 mt-1">Manage your account preferences and application settings.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium">No settings to configure</h3>
            <p className="mt-2 text-sm text-zinc-400">Everything important is set. You'll see more options here later.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
