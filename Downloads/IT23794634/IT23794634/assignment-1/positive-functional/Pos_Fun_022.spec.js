// Pos_Fun_022 (Excel Pos_Fun_0022): Convert instruction with common action verb sentence – S (from IT23794634.xlsx)
// Input: indha velai mudichu vaa. Expected: இந்த வேலை முடிச்சு வா.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'indha velai mudichu vaa';
const EXPECTED_TAMIL = 'இந்த வேலை முடிச்சு வா';

test('Pos_Fun_022 – Convert instruction with common action verb sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
