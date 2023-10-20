import { test, expect } from "@playwright/test";
import dayjs from "dayjs";

// 购买时间
const TIME_TO_BUY = dayjs()
  .set("hour", 18)
  .set("minute", 8)
  .set("second", 0)
  .format("YYYY-MM-DD HH:mm:ss");

// 购买时间晚上
const TIME_TO_BUY_MORNING = dayjs()
  .set("hour", 10)
  .set("minute", 8)
  .set("second", 0)
  .format("YYYY-MM-DD HH:mm:ss");

// 商城公共url
const MALL_URL = "https://www.vmall.com/product/";
// mate60地址
const MATE60_FLAG = "10086970184614.html";
test("get Mate60", async ({ page }) => {
  // 打开网址
  await page.goto(`${MALL_URL}${MATE60_FLAG}`);
  // await context.storageState({ path: "state.json" });

  // 登录
  await page.getByText("立即登录").click();

  // 等待登录成功
  await page.waitForResponse(new RegExp(`^${MALL_URL}${MATE60_FLAG}`));

  // 登录抢购时间
  await page.waitForTimeout(dayjs(TIME_TO_BUY).diff(dayjs(), "second") * 1000);

  await page
    // .locator("#product-operation")
    .getByRole("link", { name: "立即下单" })
    .click();

  // 确认订单页面
  await page.waitForResponse((res) => {
    return res.url().includes("order/nowConfirmcart");
  });

  await page.getByRole("link", { name: "提交订单" }).click();
});

// MATE60XR地址
const MATE60_XR_FLAG = "10086429395667.html";
test("get Mate60XR", async ({ page }) => {
  // 打开网址
  await page.goto(`${MALL_URL}${MATE60_XR_FLAG}`);
  // await context.storageState({ path: "state.json" });

  // 登录
  await page.getByText("立即登录").click();

  // 等待登录成功
  await page.waitForResponse(new RegExp(`^${MALL_URL}${MATE60_XR_FLAG}`));

  // 登录抢购时间
  await page.waitForTimeout(
    dayjs(TIME_TO_BUY_MORNING).diff(dayjs(), "second") * 1000
  );

  await page
    .locator("#product-operation")
    .getByRole("link", { name: "立即下单" })
    .click();

  // 确认订单页面
  await page.waitForResponse((res) => {
    return res.url().includes("order/nowConfirmcart");
  });

  await page.getByRole("link", { name: "提交订单" }).click();
});

// matePad地址
// const MATE_PAD_FLAG = "10086692389605.html";
// test("get MatePad", async ({ page }) => {
//   // 打开网址
//   await page.goto(`${MALL_URL}${MATE_PAD_FLAG}`);
//   // await context.storageState({ path: "state.json" });

//   // 登录
//   await page.getByText("立即登录").click();

//   // 等待登录成功
//   await page.waitForResponse(new RegExp(`^${MALL_URL}${MATE_PAD_FLAG}`));

//   // 登录抢购时间
//   await page.waitForTimeout(
//     dayjs(TIME_TO_BUY_MORNING).diff(dayjs(), "second") * 1000
//   );

//   await page
//     .locator("#product-operation")
//     .getByRole("link", { name: "立即下单" })
//     .click();

//   // 确认订单页面
//   await page.waitForResponse((res) => {
//     return res.url().includes("order/nowConfirmcart");
//   });

//   await page.getByRole("link", { name: "提交订单" }).click();
// });

// matePad地址
const MATE_PAD_FLAG = "10086817880534.html";
test("get MatePad", async ({ page }) => {
  // 打开网址
  await page.goto(`${MALL_URL}${MATE_PAD_FLAG}`);
  // await context.storageState({ path: "state.json" });

  // 登录
  await page.getByText("请登录").click();

  // 等待登录成功
  await page.waitForResponse(new RegExp(`^${MALL_URL}${MATE_PAD_FLAG}`));

  // 登录抢购时间
  await page.waitForTimeout(
    dayjs(TIME_TO_BUY_MORNING).diff(dayjs(), "second") * 1000
  );
  // 时差问题
  await page
    .locator("#product-operation")
    .getByRole("link", { name: "立即下单" })
    .click();

  // 确认订单页面
  await page.waitForResponse(
    new RegExp("https://www.vmall.com/order/nowConfirmcart")
  );

  await page.getByRole("link", { name: "提交订单" }).click();
});
