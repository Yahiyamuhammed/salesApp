import * as SQLite from "expo-sqlite";

let db = null;

export const getDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("market.db");
  }
  return db;
};

export const initDB = async () => {
  const database = await getDB();

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS shops (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      latitude REAL,
      longitude REAL,
      accuracy REAL,
      commission REAL,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shop_id INTEGER,
      date TEXT,
      total_price REAL,
      commission_amount REAL,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS sale_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_id INTEGER,
      product_id INTEGER,
      product_name TEXT,
      quantity REAL,
      unit TEXT,
      price REAL,
      total REAL
    );
  `);
};
