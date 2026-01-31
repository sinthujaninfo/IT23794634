// Pos_Fun_011 (Excel Pos_Fun_0011): convert plural sentence – S (from IT23794634.xlsx)
// Input: manavarkal school poranga. Expected: மாணவர்கள் ஸ்கூல் போறாங்க.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'manavarkal school poranga';
const EXPECTED_TAMIL = 'மாணவர்கள் ஸ்கூல் போறாங்க';

test('Pos_Fun_011 – convert plural sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
