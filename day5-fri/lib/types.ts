export const UNITS = ["IMR", "IPH", "IHSR", "IHM", "ICR", "IHBR"] as const;
export const STATUSES = ["Active", "Completed", "On Hold"] as const;

export interface Project {
  id: string;
  title: string;
  unit: string;
  status: string;
  budget: number;
  startDate: string;
}

export const ERRORS = {
  title: "title is empty",
  unit: "unknown unit",
  status: "unknown status",
  budget: "budget must be a number >= 0",
  startDate: "invalid startDate",
} as const;
