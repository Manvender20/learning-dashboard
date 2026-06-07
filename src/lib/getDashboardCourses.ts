import { superbase } from "./supabase";

export async function getDashboardCourses() {
  const { data: courses, error: coursesError } = await superbase
    .from("courses")
    .select("*");

  const { data: studentCourses, error: studentCoursesError } =
    await superbase
      .from("student_courses")
      .select("*");

  if (coursesError) {
    throw new Error(coursesError.message);
  }

  if (studentCoursesError) {
    throw new Error(studentCoursesError.message);
  }

  const coursesWithProgress = courses.map((course) => {
    const progressRecord = studentCourses.find(
      (studentCourse) => studentCourse.course_id === course.id
    );

    return {
      ...course,
      progress: progressRecord?.progress ?? 0,
    };
  });

  return coursesWithProgress;
}