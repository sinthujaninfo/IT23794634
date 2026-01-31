// Pos_Fun_009 (Excel Pos_Fun_0009): convert imperative command – S (from IT23794634.xlsx)
// Input: neenga enka. Expected: நீங்க என்க.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'neenga enka';
const EXPECTED_TAMIL = 'நீங்க என்க';

test('Pos_Fun_009 – convert imperative command', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
