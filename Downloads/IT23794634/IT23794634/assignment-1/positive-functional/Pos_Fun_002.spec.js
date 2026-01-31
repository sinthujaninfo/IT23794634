// Pos_Fun_002 (Excel Pos_Fun_0002): convert present tense sentence – S (from IT23794634.xlsx)
// Input: naan velaila nikkiren. Expected: நான் வேலைல நிக்கிறேன். Covers: Daily language usage, Present tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan velaila nikkiren';
const EXPECTED_TAMIL = 'நான் வேலைல நிக்கிறேன்';

test('Pos_Fun_002 – convert present tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
