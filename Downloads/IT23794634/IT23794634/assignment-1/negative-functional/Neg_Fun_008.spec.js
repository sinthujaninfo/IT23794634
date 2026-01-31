// Neg_Fun_008 (Excel): Sentence with english abbreviation disrupts tamil output – S (from IT23794634.xlsx)
// Input: avan CV card konduvaralla. Expected: No tamil conversion / broken tamil output.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'avan CV card konduvaralla';

test('Neg_Fun_008 – Sentence with english abbreviation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
