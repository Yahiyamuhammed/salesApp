import { db } from "../database/db";

export const getOrCreateShop = async (shop) => {
  const existing = await db.getAllAsync(
    "SELECT * FROM shops WHERE name = ?",
    [shop.name]
  );

  if (existing.length > 0) {
    return existing[0].id;
  }

  const result = await db.runAsync(
    `INSERT INTO shops (name, latitude, longitude, accuracy, commission, created_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      shop.name,
      shop.latitude,
      shop.longitude,
      shop.accuracy,
      shop.commission,
      new Date().toISOString()
    ]
  );

  return result.lastInsertRowId;
};
