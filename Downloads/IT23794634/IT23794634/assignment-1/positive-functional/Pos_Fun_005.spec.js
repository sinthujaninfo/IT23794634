// Pos_Fun_005 (Excel Pos_Fun_0005): convert negative statement – S (from IT23794634.xlsx)
// Input: naan kulikka thevaiillai. Expected: நான் குளிக்க  தேவையில்லை. Covers: Daily language usage, Negative form.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan kulikka thevaiillai';
const EXPECTED_TAMIL = 'நான் குளிக்க  தேவையில்லை';

test('Pos_Fun_005 – convert negative statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim().replace(/\s+/g, ' ')).toContain('குளிக்க');
  expect(output.trim().replace(/\s+/g, ' ')).toContain('தேவையில்லை');
});
