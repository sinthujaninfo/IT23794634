// Pos_Fun_012 (Excel Pos_Fun_0012): convert sentence with place name – S (from IT23794634.xlsx)
// Input: naan kilinochchi varen. Expected: நான் கிளிநொச்சி வரேன். Covers: Names/Places.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan kilinochchi varen';
const EXPECTED_TAMIL = 'நான் கிளிநொச்சி வரேன்';

test('Pos_Fun_012 – convert sentence with place name', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
