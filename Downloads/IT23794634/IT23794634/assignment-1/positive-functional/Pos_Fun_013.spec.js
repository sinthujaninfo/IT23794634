// Pos_Fun_013 (Excel Pos_Fun_0013): convert sentence with numbers – S (from IT23794634.xlsx)
// Input: school 8 manikku start aagum. Expected: ஸ்கூல் 8 மணிக்கு ஸ்டார்ட் ஆகும். Covers: numbers.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'school 8 manikku start aagum';
const EXPECTED_TAMIL = 'ஸ்கூல் 8 மணிக்கு ஸ்டார்ட் ஆகும்';

test('Pos_Fun_013 – convert sentence with numbers', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
