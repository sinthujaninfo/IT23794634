// Pos_Fun_015 (Excel Pos_Fun_0015): convert repeated word usage sentence – S (from IT23794634.xlsx)
// Input: romba romba sad aa irukku. Expected: ரொம்ப ரொம்ப ஷாட்  ஆ  இருக்கு. Covers: word combination.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'romba romba sad aa irukku';
const EXPECTED_TAMIL = 'ரொம்ப ரொம்ப ஷாட்  ஆ  இருக்கு';

test('Pos_Fun_015 – convert repeated word usage sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
