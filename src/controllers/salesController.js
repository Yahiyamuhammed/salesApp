import { db } from "../database/db";
import { getOrCreateShop } from "./shopController";
import { getOrCreateProduct } from "./productController";

export const createSale = async ({ shop, products }) => {
  const shopId = await getOrCreateShop(shop);
  const date = new Date().toISOString();

  const saleResult = await db.runAsync(
    `INSERT INTO sales (shop_id, date, total_price, commission_amount, created_at)
     VALUES (?, ?, 0, 0, ?)`,
    [shopId, date, date]
  );

  const saleId = saleResult.lastInsertRowId;
  let totalAmount = 0;

  for (const item of products) {
    const productId = await getOrCreateProduct(item.name);
    const itemTotal = item.quantity * item.price;
    totalAmount += itemTotal;

    await db.runAsync(
      `INSERT INTO sale_items
       (sale_id, product_id, product_name, quantity, unit, price, total)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        saleId,
        productId,
        item.name,
        item.quantity,
        item.unit,
        item.price,
        itemTotal
      ]
    );
  }

  const commission = totalAmount * (shop.commission / 100);

  await db.runAsync(
    `UPDATE sales SET total_price = ?, commission_amount = ? WHERE id = ?`,
    [totalAmount, commission, saleId]
  );

  return saleId;
};
