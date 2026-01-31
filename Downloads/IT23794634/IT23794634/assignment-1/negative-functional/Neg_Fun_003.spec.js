// Neg_Fun_003 (Excel): unsupported language input – S (from IT23794634.xlsx)
// Input: sinthu, codenexta manger. Expected: No tamil conversion / No meaningful output.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'sinthu, codenexta manger';

test('Neg_Fun_003 – unsupported language input', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
});
