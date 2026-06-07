import { superbase } from "./supabase";

export async function getStudent() {
  const { data, error } = await superbase
    .from("students")
    .select("*")
    .limit(1);

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
}