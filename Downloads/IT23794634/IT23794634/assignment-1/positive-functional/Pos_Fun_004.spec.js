// Pos_Fun_004 (Excel Pos_Fun_0004): convert Future tense sentence – S (from IT23794634.xlsx)
// Input: saran naalaiku class varuvan. Expected: சரண் நாளைக்கு கிளாஸ் வருவான். Covers: Daily language usage, Future tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'saran naalaiku class varuvan';
const EXPECTED_TAMIL = 'சரண் நாளைக்கு கிளாஸ் வருவான்';

test('Pos_Fun_004 – convert Future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
