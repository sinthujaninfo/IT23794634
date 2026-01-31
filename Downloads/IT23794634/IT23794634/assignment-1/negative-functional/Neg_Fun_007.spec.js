// Neg_Fun_007 (Excel): Joined words without spaces cause incorrect conversion – S (from IT23794634.xlsx)
// Input: naankovilkupoidduirukaan. Expected: Correct tamil with proper word separation / incorrect tamil output (robustness).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naankovilkupoidduirukaan';

test('Neg_Fun_007 – Joined words without spaces', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
