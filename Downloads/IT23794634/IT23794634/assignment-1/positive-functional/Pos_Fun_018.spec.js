// Pos_Fun_018 (Excel Pos_Fun_0018): Convert reason-based sentence – S (from IT23794634.xlsx)
// Input: veiyil adikuthu naan pogala. Expected: வெய்யில்  அடிக்குது    நான்  போகல. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'veiyil adikuthu naan pogala';
const EXPECTED_TAMIL = 'வெய்யில்  அடிக்குது    நான்  போகல';

test('Pos_Fun_018 – Convert reason-based sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
