// Pos_Fun_010 (Excel Pos_Fun_0010): convert pronoun variation sentence – S (from IT23794634.xlsx)
// Input: friends oda nalaiku poren. Expected: பிரிஎண்ட்ஸ் ஓடிஏ நாளைக்கு போறேன்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'friends oda nalaiku poren';
const EXPECTED_TAMIL = 'பிரிஎண்ட்ஸ் ஓடிஏ நாளைக்கு போறேன்';

test('Pos_Fun_010 – convert pronoun variation sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
