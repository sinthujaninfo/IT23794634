// Neg_Fun_009 (Excel): Currency and number format affects conversion – S (from IT23794634.xlsx)
// Input: ithu thiks rs.500 kidaikuma? Expected: Correct numbers and currency with tamil words / Mixed confused (robustness).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'ithu thiks rs.500 kidaikuma?';

test('Neg_Fun_009 – Currency and number format affects conversion', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
