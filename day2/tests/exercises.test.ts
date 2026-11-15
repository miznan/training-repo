import { test } from "node:test";
import assert from "node:assert/strict";
import { grade } from "../src/ex01-grade.ts";
import { bmi } from "../src/ex02-bmi.ts";
import { fizzBuzz } from "../src/ex03-fizzbuzz.ts";
import { reverseString } from "../src/ex04-reverse.ts";
import { findMax } from "../src/ex05-max.ts";
import { countVowels } from "../src/ex06-vowels.ts";
import { sumOfEvens } from "../src/ex07-sum-evens.ts";
import { ageFromIc } from "../src/ex08-age-from-ic.ts";
import { isPalindrome } from "../src/ex09-palindrome.ts";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../src/ex10-temperature.ts";

test("ex01 grade", () => {
  assert.equal(grade(100), "A");
  assert.equal(grade(80), "A");
  assert.equal(grade(79), "B");
  assert.equal(grade(65), "B");
  assert.equal(grade(50), "C");
  assert.equal(grade(40), "D");
  assert.equal(grade(39), "F");
  assert.equal(grade(0), "F");
  assert.equal(grade(-1), "INVALID");
  assert.equal(grade(101), "INVALID");
});

test("ex02 bmi", () => {
  assert.deepEqual(bmi(70, 1.75), { value: 22.9, category: "Normal" });
  assert.deepEqual(bmi(50, 1.7), { value: 17.3, category: "Underweight" });
  assert.deepEqual(bmi(80, 1.7), { value: 27.7, category: "Overweight" });
  assert.deepEqual(bmi(100, 1.7), { value: 34.6, category: "Obese" });
});

test("ex03 fizzBuzz", () => {
  assert.deepEqual(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
  assert.equal(fizzBuzz(15)[14], "FizzBuzz");
  assert.equal(fizzBuzz(15).length, 15);
  assert.deepEqual(fizzBuzz(0), []);
});

test("ex04 reverseString", () => {
  assert.equal(reverseString("hello"), "olleh");
  assert.equal(reverseString(""), "");
  assert.equal(reverseString("NIH"), "HIN");
});

test("ex05 findMax", () => {
  assert.equal(findMax([3, 9, 2]), 9);
  assert.equal(findMax([-5, -2, -9]), -2);
  assert.equal(findMax([]), undefined);
});

test("ex06 countVowels", () => {
  assert.equal(countVowels("Institut Kesihatan"), 7);
  assert.equal(countVowels("AEIOU"), 5);
  assert.equal(countVowels("rhythm"), 0);
});

test("ex07 sumOfEvens", () => {
  assert.equal(sumOfEvens([1, 2, 3, 4]), 6);
  assert.equal(sumOfEvens([-2, -3, 5]), -2);
  assert.equal(sumOfEvens([]), 0);
});

test("ex08 ageFromIc", () => {
  const today = new Date(2026, 10, 14); // 14 Nov 2026 (month is 0-based)
  assert.equal(ageFromIc("020315-10-1234", today), 24);
  assert.equal(ageFromIc("021231-10-1234", today), 23); // birthday not reached yet
  assert.equal(ageFromIc("991114-10-1234", today), 27); // birthday is today
  assert.equal(ageFromIc("051115-14-5678", today), 20); // birthday tomorrow
  assert.equal(ageFromIc("12345", today), -1);
});

test("ex09 isPalindrome", () => {
  assert.equal(isPalindrome("Kayak"), true);
  assert.equal(isPalindrome("Nurses run"), true);
  assert.equal(isPalindrome("NIH"), false);
});

test("ex10 temperature", () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(37), 98.6);
  assert.equal(fahrenheitToCelsius(212), 100);
  assert.equal(fahrenheitToCelsius(100), 37.8);
});
