export const UNITS = ["IMR", "IPH", "IHSR", "IHM", "ICR", "IHBR"] as const;
export const STATUSES = ["Active", "Completed", "On Hold"] as const;

export interface Project {
  id: string;
  title: string;
  unit: string;
  status: string;
  budget: number; // careful: bad data may contain text here
  startDate: string; // "YYYY-MM-DD"
}

export interface InvalidProject {
  id: string;
  errors: string[];
}

export const ERRORS = {
  title: "title is empty",
  unit: "unknown unit",
  status: "unknown status",
  budget: "budget must be a number >= 0",
  startDate: "invalid startDate",
} as const;
