import { findObjectById } from "../../../../utils/arrays"

export const calculateSumToPay = (basket, menus) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menus)
    if (isNaN(menuProduct.price)) return total
    total += menuProduct.price * basketProduct.quantity
    return total
  }, 0)
}
;