// Neg_Fun_002 (Excel): Only spaces input – S (from IT23794634.xlsx)
// Input: "  ". Expected: No tamil conversion with validation message / No output generated.

const { test, expect } = require('@playwright/test');
const { BASE_URL, getEditorLocator, getOutputText } = require('../fixtures');

test('Neg_Fun_002 – Only spaces input', async ({ page }) => {
  await page.goto(BASE_URL);
  const editor = await getEditorLocator(page);
  await editor.click();
  await editor.press('Control+a');
  await editor.press('Backspace');
  await page.waitForTimeout(100);
  await editor.fill('  ');
  await page.waitForTimeout(800);
  const output = await getOutputText(page);
  expect(output.trim()).toBe('');
});
