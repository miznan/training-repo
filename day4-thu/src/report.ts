import { UNITS, STATUSES, ERRORS, type Project, type InvalidProject } from "./types.ts";

/**
 * Return the list of error messages for one project (use ERRORS.*).
 * A valid project returns [].
 * Check the rules in README.md, in this order: title, unit, status, budget, startDate.
 */
export function validateProject(p: Project): string[] {
  const errors: string[] = [];
  // TODO
  return errors;
}

/** Valid projects whose status is "Active". */
export function activeProjects(projects: Project[]): Project[] {
  // TODO (hint: filter)
  return [];
}

/**
 * Total budget per unit, valid projects only.
 * Example: { IMR: 120000, IPH: 55000 }
 * Keys must be in alphabetical order.
 */
export function budgetByUnit(projects: Project[]): Record<string, number> {
  // TODO (hint: reduce, or a for...of loop)
  return {};
}

/**
 * Valid projects, oldest startDate first. If two dates are equal, sort by id.
 * Must NOT change the original array.
 */
export function sortByStartDate(projects: Project[]): Project[] {
  // TODO
  return [];
}

/** Every invalid project with its errors, in the original order. */
export function findInvalid(projects: Project[]): InvalidProject[] {
  // TODO
  return [];
}
