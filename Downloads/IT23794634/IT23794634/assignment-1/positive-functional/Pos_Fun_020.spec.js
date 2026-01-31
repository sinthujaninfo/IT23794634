// Pos_Fun_020 (Excel Pos_Fun_0020): Convert sentence with multi-line input – M (from IT23794634.xlsx)
// Input: naan varen + newline + kovilukku poren. Expected: நான் வரேன்  கோவிலுக்கு  போறேன். Covers: spaces/line breaks.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const LINE1 = 'naan varen';
const LINE2 = 'kovilukku poren';
const EXPECTED_TAMIL = 'நான் வரேன்  கோவிலுக்கு  போறேன்';

test('Pos_Fun_020 – Convert sentence with multi-line input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(100);
  const words1 = LINE1.trim().split(/\s+/);
  for (const word of words1) {
    await editor.type(word, { delay: 50 });
    await editor.press('Space');
    await page.waitForTimeout(200);
  }
  await editor.press('Enter');
  await page.waitForTimeout(200);
  const words2 = LINE2.trim().split(/\s+/);
  for (const word of words2) {
    await editor.type(word, { delay: 50 });
    await editor.press('Space');
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(800);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
