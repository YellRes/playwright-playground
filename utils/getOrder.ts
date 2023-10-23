import type Goods from "../class/goods";
import dayjs from 'dayjs'


export const getOrder = async (goods: Goods, page) => {
  // 打开网址
  await page.goto(goods.linkUrl)

  // 登录
  await page.getByText("立即登录").click();

  // 等待登录成功
  await page.waitForResponse(new RegExp(goods.linkUrl));

  // 登录抢购时间
  await page.waitForTimeout(dayjs(goods.buyTime).diff(dayjs(), "second") * 1000);

  await page.getByText("立即下单").click();

  // 确认订单页面
  await page.waitForResponse((res) => {
    return res.url().includes("order/nowConfirmcart");
  });

  await page.getByText("提交订单").click();

  
};


