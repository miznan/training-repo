// A mark is a number, or "" when the student was absent for that exam.
// bonus comes from an old CSV import, so it is stored as text, e.g. "5".
export interface Student {
  id: string;
  name: string;
  marks: (number | "")[];
  bonus: string;
}
