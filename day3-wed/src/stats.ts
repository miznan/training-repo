// Average of a list of numbers. Empty list -> 0.
export function average(nums: number[]): number {
  if (nums.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

// A mark exists unless it is "" (absent). A mark of 0 is a real mark.
export function hasMark(mark: number | ""): boolean {
  return mark != "";
}

// Keep only real marks.
export function validMarks(marks: (number | "")[]): number[] {
  return marks.filter(hasMark) as number[];
}
