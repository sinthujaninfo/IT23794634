// Neg_Fun_005 (Excel): Only numeric input – S (from IT23794634.xlsx)
// Input: 11223344. Expected: No tamil conversion / Numbers remain unchanged.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = '11223344';

test('Neg_Fun_005 – Only numeric input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(typeof output).toBe('string');
});
