
// src/lib/getCourses.ts

import { superbase } from "./supabase";

export async function getCourses() {
  const { data, error } = await superbase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}