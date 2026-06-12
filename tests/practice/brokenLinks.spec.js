import { test, expect } from '@playwright/test';

test('Validate broken links', async ({ page, request }) => {

  await page.goto('https://www.amazon.in/');
  await page.locator("#twotabsearchtextbox").click()
  await page.waitForLoadState("load")

  // Get all anchor tags
  const links = await page.locator('a').all();
  
  

  for (const link of links) {

    const url = await link.getAttribute('href');

    // Skip empty or invalid hrefs
    if (!url || url.startsWith('javascript') || url.startsWith('#')) {
      continue;
    }
    console.log(url);
    
    // Send API request to check status
    const response = await request.get(url);

    const status = response.status();

    if (status >= 400) {
      console.log(`Broken Link: ${url} --> Status Code: ${status}`);
    } else {
      console.log(`Valid Link: ${url} --> Status Code: ${status}`);
    }
  }
});