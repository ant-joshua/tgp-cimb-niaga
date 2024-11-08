import { test, expect } from "@playwright/test";

test("Testing Input Username", async ({ page }) => {
  await page.goto("https://trx-practices-h8.vercel.app/");

  await page.setViewportSize({ width: 1920, height: 958 });

  await page.waitForSelector("#username");
  await page.click("#username");
  await page.fill("#username", "admin");

  await page.waitForSelector("#login-btn");
  await page.click("#login-btn");

  await page.close();
});
