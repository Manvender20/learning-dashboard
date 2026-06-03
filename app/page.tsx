import Sidebar from "../src/components/sidebar/Sidebar";
import DashboardGrid from "../src/components/dashboard/DashboardGrid";
import {getStudent} from "../src/lib/getStudent";
import {getCourses} from "../src/lib/getCourses";

export default async function Home() {
  const student = await getStudent();
  const courses = await getCourses();

  return (
    <main className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <DashboardGrid student={student} courses={courses} />
      </section>
    </main>
  );
}