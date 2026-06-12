import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('shoe');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.goto('https://www.amazon.in/s?k=shoe&crid=1RI3EBQCTWLOE&sprefix=%2Caps%2C516&ref=nb_sb_noss');
});