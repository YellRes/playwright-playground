import { test, expect } from "@playwright/test";
import { getOrder } from '../utils/getOrder' 
import Goods from "../class/goods";
import { BUY_IN_MORNING,
  BUY_IN_EVENING,
  HUAWEI_MALL_URL,
  MATE_60_FLAG,
  MATE_60_PRO_FLAG
} from '../utils/constant'

const getHuaWeiGoodsUrl = url => `${HUAWEI_MALL_URL}${url}`

const mate_60 = new Goods(getHuaWeiGoodsUrl(MATE_60_FLAG), BUY_IN_EVENING)
const mate_60_pro = new Goods(getHuaWeiGoodsUrl(MATE_60_PRO_FLAG), BUY_IN_EVENING)


test("get Mate60", async ({ page }) => {
  getOrder(mate_60, page)
});

// mate60pro 同心套装
test("get Mate60 pro", async ({ page }) => {
  getOrder(mate_60_pro, page)
});

