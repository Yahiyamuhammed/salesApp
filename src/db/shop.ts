import { db } from "./database";

export const searchShops = async (text: string): Promise<string[]> => {
  const rows = await db.getAllAsync<{ name: string }>(
    "SELECT name FROM shops WHERE name LIKE ?",
    [`%${text}%`]
  );

  return rows.map((row) => row.name);
};

export const insertShopIfNotExists = async (name: string): Promise<void> => {
  await db.runAsync(
    "INSERT OR IGNORE INTO shops (name) VALUES (?)",
    [name]
  );
};
