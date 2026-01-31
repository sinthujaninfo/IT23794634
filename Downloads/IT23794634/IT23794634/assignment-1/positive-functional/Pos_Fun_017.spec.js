// Pos_Fun_017 (Excel Pos_Fun_0017): convert sentence with english technical word – M (from IT23794634.xlsx)
// Input: naan bike repair panninen. Expected: நான் பைக்  ரிப்பேர் பண்ணினேன். Covers: mixed tanglish + english words.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan bike repair panninen';
const EXPECTED_TAMIL = 'நான் பைக்  ரிப்பேர் பண்ணினேன்';

test('Pos_Fun_017 – convert sentence with english technical word', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
