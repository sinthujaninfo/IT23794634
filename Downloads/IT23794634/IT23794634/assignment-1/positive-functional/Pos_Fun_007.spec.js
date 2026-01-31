// Pos_Fun_007 (Excel Pos_Fun_0007): convert complex statement – M (from IT23794634.xlsx)
// Input: mazhai adichalum naan kadaikku pogala. Expected: மழை அடிச்சாலும் நான் கடைக்கு போகல.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'mazhai adichalum naan kadaikku pogala';
const EXPECTED_TAMIL = 'மழை அடிச்சாலும் நான் கடைக்கு போகல';

test('Pos_Fun_007 – convert complex statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
