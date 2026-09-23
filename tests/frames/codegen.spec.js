import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('frame').first().contentFrame().getByRole('textbox').click();
  await page.locator('frame').first().contentFrame().getByRole('textbox').fill('hi');
  await page.locator('frame').first().contentFrame().getByRole('textbox').press('Enter');
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').fill('hello');
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').press('Enter');
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').fill('gudmorning');
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').press('Enter');
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').fill('gudnyt');
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').press('Enter');
  await page.locator('frame').nth(4).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(4).contentFrame().getByRole('textbox').fill('bye');
  await page.locator('frame').nth(4).contentFrame().getByRole('textbox').press('Enter');
});