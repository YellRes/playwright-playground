import dayjs from "dayjs";

// 购买时间 10:08:00
export const BUY_IN_MORNING = dayjs()
  .set("hour", 10)
  .set("minute", 8)
  .set("second", 0)
  .format("YYYY-MM-DD HH:mm:ss");

// 购买时间 18:08:00
export const BUY_IN_EVENING = dayjs()
  .set("hour", 18)
  .set("minute", 8)
  .set("second", 0)
  .format("YYYY-MM-DD HH:mm:ss");

// 商城公共url
const HUAWEI_MALL_URL = "https://www.vmall.com/product/";
