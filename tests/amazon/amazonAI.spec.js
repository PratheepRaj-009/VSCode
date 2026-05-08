const { chromium } = require('playwright');

async function amazonShoppingAutomation() {
  // Launch browser
  const browser = await chromium.launch({
    headless: false // Set to true for headless mode
  });
  
  const page = await browser.newPage();

  try {
    // Step 1: Navigate to Amazon.in
    console.log('Opening Amazon.in...');
    await page.goto('https://www.amazon.in/', { waitUntil: 'networkidle' });
    
    // Step 2: Search for watches under 5000
    console.log('Searching for watches under 5000...');
    const searchBox = page.locator('input[placeholder="Search Amazon.in"]');
    await searchBox.click();
    await searchBox.fill('watch under 5000');
    await page.keyboard.press('Enter');
    
    // Wait for search results to load
    await page.waitForSelector('div[data-component-type="s-search-result"]');
    console.log('Search results loaded');
    
    // Step 3: Scroll to find watch under Rs.5000
    console.log('Scrolling to find products...');
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    
    // Wait a bit for content to load
    await page.waitForTimeout(2000);
    
    // Step 4: Click on Daniel Hechter watch
    console.log('Clicking on Daniel Hechter watch...');
    const productLink = page.getByRole('link', { name: 'Sponsored Ad - Paris Orsay' });
    await productLink.click();
    
    // Wait for new tab/page to load
    await page.waitForLoadState('networkidle');
    console.log('Product page loaded');
    
    // Step 5: Scroll down to find Add to Cart button
    console.log('Scrolling to Add to Cart button...');
    await page.evaluate(() => {
      window.scrollBy(0, 300);
    });
    
    // Wait for button to be visible
    await page.waitForTimeout(1000);
    
    // Step 6: Click Add to Cart button
    console.log('Clicking Add to Cart...');
    const addToCartBtn = page.locator('#add-to-cart-button');
    await addToCartBtn.click();
    
    // Wait for protection plan dialog
    await page.waitForTimeout(2000);
    
    // Step 7: Dismiss protection plan popup by clicking "No thanks"
    console.log('Clicking No thanks on protection plan...');
    const noThanksBtn = page.locator('input[aria-labelledby="attachSiNoCoverage-announce"]');
    await noThanksBtn.click();
    
    // Wait for cart page to load
    await page.waitForLoadState('networkidle');
    console.log('Product added to cart successfully!');
    
    // Step 8: Take screenshot of cart
    await page.screenshot({ path: 'cart_screenshot.png' });
    console.log('Screenshot saved as cart_screenshot.png');
    
    // Keep browser open for 5 seconds to see the result
    await page.waitForTimeout(5000);
    
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close browser
    await browser.close();
  }
}

// Run the automation
amazonShoppingAutomation();