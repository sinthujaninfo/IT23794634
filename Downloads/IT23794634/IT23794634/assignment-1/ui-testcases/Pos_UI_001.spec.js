// Pos_UI_001 (Excel): Output clears immediately when input field is cleared – S (from IT23794634.xlsx)
// Input: naan kovil poren, then clear the entire input field. Expected: empty output.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan kovil poren';

test('Pos_UI_001 – Output clears immediately when input field is cleared', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  let output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(800);
  output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
