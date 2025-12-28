import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("app.db");

export const initDB = () => {
  db.transaction((tx) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS shops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        latitude REAL,
        longitude REAL,
        accuracy REAL,
        image TEXT,
        commission REAL,
        created_at TEXT
      );
    `);

    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        quantity REAL,
        unit TEXT,
        price REAL,
        created_at TEXT
      );
    `);

    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        shop_id INTEGER,
        date TEXT,
        total_price REAL,
        commission_amount REAL,
        created_at TEXT
      );
    `);

    tx.executeSql(`
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
  });
};
