// Pos_Fun_023 (Excel Pos_Fun_0023): Convert sentence with pronoun emphasis – S (from IT23794634.xlsx)
// Input: naan than idha senjen. Expected: நான் தன இதை செஞ்சேன்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan than idha senjen';
const EXPECTED_TAMIL = 'நான் தன இதை செஞ்சேன்';

test('Pos_Fun_023 – Convert sentence with pronoun emphasis', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
