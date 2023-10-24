import dayjs from "dayjs";

// 购买时间 10:08:00
export const BUY_IN_MORNING = dayjs()
  .set("hour", 10)
  .set("minute", 7)
  .set("second", 59)
  .format("YYYY-MM-DD HH:mm:ss");

// 购买时间 18:08:00
export const BUY_IN_EVENING = dayjs()
  .set("hour", 18)
  .set("minute", 7)
  .set("second", 59)
  .format("YYYY-MM-DD HH:mm:ss");

// 商城公共url
export const HUAWEI_MALL_URL = "https://www.vmall.com/product/";

export const MATE_60_FLAG = "10086970184614.html";

export const MATE_60_PRO_FLAG = "10086285061721.html";

export const MATE_PAD_FLAG = "10086429395667.html";

export const MATE_HR_FLAG = "10086692389605.html";
