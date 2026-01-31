// Pos_Fun_024 (Excel Pos_Fun_0024): Convert sentence with polite plural reference – S (from IT23794634.xlsx)
// Input: neenga innaiku varenuma. Expected: நீங்க இன்னைக்கு வரணுமா.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'neenga innaiku varenuma';
const EXPECTED_TAMIL = 'நீங்க இன்னைக்கு வரணுமா';

test('Pos_Fun_024 – Convert sentence with polite plural reference', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
