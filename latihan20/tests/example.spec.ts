import { test, expect } from "@playwright/test";

const awaitTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

test("Testing Input Username", async ({ page }) => {
  await page.goto("https://trx-practices-h8.vercel.app/");

  await page.setViewportSize({ width: 1920, height: 958 });

  await page.waitForSelector("#username");
  await page.click("#username");
  await page.fill("#username", "admin");

  await page.waitForSelector("#login-btn");
  await page.click("#login-btn");

  await page.waitForSelector("#amount");
  await page.fill("#amount", "100000");

  await page.waitForSelector("#add-transaction-btn");
  await page.click("#add-transaction-btn");

  await page.waitForSelector("#transaction-list");

  await page.close();
});
