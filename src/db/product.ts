import { db } from "./database";

export const searchProducts = async (text: string): Promise<string[]> => {
  const rows = await db.getAllAsync<{ name: string }>(
    "SELECT name FROM products WHERE name LIKE ?",
    [`%${text}%`]
  );

  return rows.map((row) => row.name);
};

export const insertProductIfNotExists = async (name: string): Promise<void> => {
  await db.runAsync(
    "INSERT OR IGNORE INTO products (name) VALUES (?)",
    [name]
  );
};
