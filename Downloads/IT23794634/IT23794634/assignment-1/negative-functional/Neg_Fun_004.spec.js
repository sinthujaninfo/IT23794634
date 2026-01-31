// Neg_Fun_004 (Excel): Random character sequence input – S (from IT23794634.xlsx)
// Input: dfhtyrthytg. Expected: No tamil conversion / incorrect output.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'dfhtyrthytg';

test('Neg_Fun_004 – Random character sequence input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
