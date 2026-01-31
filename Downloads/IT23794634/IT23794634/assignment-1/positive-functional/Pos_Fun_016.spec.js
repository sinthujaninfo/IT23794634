// Pos_Fun_016 (Excel Pos_Fun_0016): convert joined word input sentence – S (from IT23794634.xlsx)
// Input: ennaseiriga. Expected: என்னசெரிக்க. Covers: joined word.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'ennaseiriga';
const EXPECTED_TAMIL = 'என்னசெரிக்க';

test('Pos_Fun_016 – convert joined word input sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
