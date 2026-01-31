// Neg_Fun_001 (Excel): Empty input – S (from IT23794634.xlsx)
// Input: (Empty input field). Expected: No tamil conversion with validation message / No output generated.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, getOutputText } = require('../fixtures');

test('Neg_Fun_001 – Empty input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(800);
  const output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
