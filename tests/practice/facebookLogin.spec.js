import { test, expect } from '@playwright/test';

const FB_URL = 'https://www.facebook.com/';

test.describe('Facebook Login Tests', () => {
  test('TC_POS_002 - Verify login using registered mobile number', async ({ page }) => {
    const mobileNumber = process.env.FB_MOBILE || 'YOUR_REGISTERED_MOBILE';
    const password = process.env.FB_PASSWORD || 'YOUR_VALID_PASSWORD';

    await page.goto(FB_URL, { waitUntil: 'domcontentloaded' });

    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="pass"]')).toBeVisible();

    await page.locator('input[name="email"]').fill(mobileNumber);
    await page.locator('input[name="pass"]').fill(password);
    await page.getByRole("button",{name:"Log in"}).click()

    await page.waitForLoadState('networkidle');

    await expect(page.locator('a[aria-label="Home"]')).toBeVisible({ timeout: 20000 });
  });
});
