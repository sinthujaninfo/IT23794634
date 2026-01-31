// Pos_Fun_019 (Excel Pos_Fun_0019): Convert sentence with extra spaces – S (from IT23794634.xlsx)
// Input: naan kulikka poren. Expected: நான்   குளிக்க   போறேன். Covers: Extra spaces sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan kulikka poren';
const EXPECTED_TAMIL = 'நான்   குளிக்க   போறேன்';

test('Pos_Fun_019 – Convert sentence with extra spaces', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
