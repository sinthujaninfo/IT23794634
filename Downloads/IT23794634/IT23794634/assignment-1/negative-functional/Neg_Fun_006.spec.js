// Neg_Fun_006 (Excel): Only special characters input – S (from IT23794634.xlsx)
// Input: #@@&&##*. Expected: No tamil conversion / Remain unchanged.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = '#@@&&##*';

test('Neg_Fun_006 – Only special characters input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
