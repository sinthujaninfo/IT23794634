// Pos_Fun_021 (Excel Pos_Fun_0021): Convert long descriptive paragraph – L (from IT23794634.xlsx)
// Input: naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu
// Expected: நான் இந்த வெப்சைட் ரொம்ப நேரம் உஸ் பண்ணிட்டு இருக்கேன்.இது பல விஷயத்துக்கு ஹெல்ப் ஆகுது

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan indha website romba neram use pannitu irukken.idhu pala vishayathuku help aagudhu';
const EXPECTED_TAMIL = 'நான் இந்த வெப்சைட் ரொம்ப நேரம் உஸ் பண்ணிட்டு இருக்கேன்.இது பல விஷயத்துக்கு ஹெல்ப் ஆகுது';

test('Pos_Fun_021 – Convert long descriptive paragraph', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
