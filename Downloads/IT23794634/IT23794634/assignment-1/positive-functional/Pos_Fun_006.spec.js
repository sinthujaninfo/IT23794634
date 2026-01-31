// Pos_Fun_006 (Excel Pos_Fun_0006): convert compound statement – M (from IT23794634.xlsx)
// Input: naan uni ponen appuram kadaikku vandhen. Expected: நான்  உன்னி போனேன் அப்புறம் கடைக்கு வந்தேன்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan uni ponen appuram kadaikku vandhen';
const EXPECTED_TAMIL = 'நான்  உன்னி போனேன் அப்புறம் கடைக்கு வந்தேன்';

test('Pos_Fun_006 – convert compound statement', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim().replace(/\s+/g, ' ')).toContain('போனேன்');
  expect(output.trim().replace(/\s+/g, ' ')).toContain('வந்தேன்');
});
