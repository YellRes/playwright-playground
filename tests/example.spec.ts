import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // 打开网址
  await page.goto("https://www.vmall.com/product/10086970184614.html");

  // 登录
  await page.getByText("立即登录").click();

  // 等待登录
  await page.waitForTimeout(10000);
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
