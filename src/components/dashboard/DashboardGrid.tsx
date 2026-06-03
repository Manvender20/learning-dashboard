import HeroCard from "./HeroCard";
import CourseCard from "./CourseCard";
import ActivityCard from "./ActivityCard";
import { Student } from "../../types/student";
import { Course } from "../../types/course";

interface DashboardGridProps {
  student: Student;
  courses: Course[];
}

export default function DashboardGrid({ student, courses }: DashboardGridProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <HeroCard student={student} />
      </div>

      {courses.map((course, idx) => (
        <CourseCard key={course.id} course={course} index={idx} />
      ))}

      <ActivityCard />
    </section>
  );
}