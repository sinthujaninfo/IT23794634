// Pos_Fun_003 (Excel Pos_Fun_0003): convert past tense sentence – S (from IT23794634.xlsx)
// Input: netru naan ponan. Expected: நேற்று நான் போனான். Covers: Daily language usage, Past tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'netru naan ponan';
const EXPECTED_TAMIL = 'நேற்று நான் போனான்';

test('Pos_Fun_003 – convert past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
