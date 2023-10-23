import { test, expect } from "@playwright/test";
import dayjs from "dayjs";
import { getOrder } from '../utils/getOrder' 
import Goods from "../class/goods";
import { BUY_IN_MORNING,
  HUAWEI_MALL_URL,
  MATE_PAD_FLAG,
  MATE_HR_FLAG,} from '../utils/constant'

const getHuaWeiGoodsUrl = url => `${HUAWEI_MALL_URL}${url}`


const matePad = new Goods(getHuaWeiGoodsUrl(MATE_PAD_FLAG), BUY_IN_MORNING)
const mateHs = new Goods(getHuaWeiGoodsUrl(MATE_HR_FLAG), BUY_IN_MORNING)
// MATE60XR地址
// const MATE60_XR_FLAG = "10086429395667.html";
test("get Mate60XR", async ({ page }) => {
  await getOrder(mateHs, page)
});

// matePad地址
// const MATE_PAD_FLAG = "10086692389605.html";
test("get MatePad", async ({ page }) => {
  await getOrder(matePad, page)
})