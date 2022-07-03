const checkCoupon = require('./checkCoupon.js');

test('Check function without any parameters', () => {
  expect(checkCoupon()).toBe(false);
});
test('Check coupon without correct code, current date and expire date', () => {
  expect(checkCoupon("couponABC")).toBe(false);
});
test('Check valid coupon without current and expire date', () => {
  expect(checkCoupon("couponABC", "couponABC")).toBe(false);
});
test('Check invalid coupon without current and expire date', () => {
  expect(checkCoupon("couponABC", "couponBC")).toBe(false);
});
test('Check valid coupon without expire date', () => {
  expect(checkCoupon("couponABC", "couponABC", "Jul 3, 2022")).toBe(false);
});
test('Check invalid coupon without expire date', () => {
  expect(checkCoupon("couponABC", "couponAB", "Jul 3, 2022")).toBe(false);
});
test('Check valid coupon', () => {
  expect(checkCoupon("couponABC", "couponABC", "Jul 3, 2022", "Dec 25, 2022")).toBe(true);
});
test('Check expired coupon', () => {
  expect(checkCoupon("couponABC", "couponABC", "Jul 3, 2022", "Dec 25, 2000")).toBe(false);
});
test('Check last day coupon', () => {
  expect(checkCoupon("couponABC", "couponABC", "Jul 3, 2022", "Jul 3, 2022")).toBe(true);
});
test('Check invalid coupon date', () => {
  expect(checkCoupon("couponABC", "couponABC", "invalid date", "Jul 3, 2022")).toBe(false);
});
test('Check numeric coupon date 2', () => {
  expect(checkCoupon("couponABC", "couponABC", 0, "Jul 3, 2022")).toBe(false);
});
test('Check numeric coupon date 3', () => {
  expect(checkCoupon("couponABC", "couponABC", 1, "Jul 3, 2022")).toBe(false);
});
test('Check numeric coupon date 4', () => {
  expect(checkCoupon("couponABC", "couponABC", 0, 0)).toBe(false);
});
test('Check numeric coupon date 5', () => {
  expect(checkCoupon("couponABC", "couponABC", 1, 1)).toBe(false);
});
test('Check expired coupon with numeric coupon date 6', () => {
  expect(checkCoupon("couponABC", "couponABC", 1000, 0)).toBe(false);
});
test('Check expired coupon with numeric coupon date 7', () => {
  expect(checkCoupon("couponABC", "couponABC", 1000, 1)).toBe(false);
});