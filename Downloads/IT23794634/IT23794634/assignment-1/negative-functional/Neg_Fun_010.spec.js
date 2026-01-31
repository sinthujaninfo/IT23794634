// Neg_Fun_010 (Excel): Incorrect tense indicator / clear input – S (from IT23794634.xlsx)
// Input: -> then clear the entire input field. Expected: Tamil output should clearly represent future tense / incorrect output.
// Test: Clear entire input field and verify output is empty.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, typeThanglishAndConvert, getOutputText } = require('../fixtures');

test('Neg_Fun_010 – Clear input field yields empty output', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, 'naan naalaiku poren');
  await page.waitForTimeout(500);
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(800);
  const output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
