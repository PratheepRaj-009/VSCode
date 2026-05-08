import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test.beforeAll(async () => {
    console.log('Runs once for Login Tests');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/login');
  });

  test.afterEach(async () => {
    console.log('After each login test');
  });

  test.afterAll(async () => {
    console.log('Runs after all Login Tests');
  });

  test('Valid Login', async ({ page }) => {
    // test steps
  });

  test('Invalid Login', async ({ page }) => {
    // test steps
  });

});


test.describe('Dashboard Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/dashboard');
  });

  test('Check Dashboard UI', async ({ page }) => {
    // test steps
  });

});