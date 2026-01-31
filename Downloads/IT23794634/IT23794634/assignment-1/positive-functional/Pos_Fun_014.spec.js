// Pos_Fun_014 (Excel Pos_Fun_0014): convert sentence with punctuation – S (from IT23794634.xlsx)
// Input: sari, nillu varen. Expected: சரி , நில்லு  வரேன். Covers: Punctuation.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'sari, nillu varen';
const EXPECTED_TAMIL = 'சரி , நில்லு  வரேன்';

test('Pos_Fun_014 – convert sentence with punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
