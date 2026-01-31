// Pos_Fun_001 (Excel Pos_Fun_0001): convert daily activity sentence – S (from IT23794634.xlsx)
// Input: naan nalaiku velaikku povean. Expected: நான் நாளைக்கு வேலைக்கு போவேன். Covers: Daily language usage.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan nalaiku velaikku povean';
const EXPECTED_TAMIL = 'நான் நாளைக்கு வேலைக்கு போவேன்';

test('Pos_Fun_001 – convert daily activity sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
