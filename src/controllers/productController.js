import { db } from "../database/db";

export const getOrCreateProduct = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM products WHERE name = ?",
        [name],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array[0].id);
          } else {
            tx.executeSql(
              `INSERT INTO products (name, created_at)
               VALUES (?, ?)`,
              [name, new Date().toISOString()],
              (_, result) => resolve(result.insertId),
              (_, error) => reject(error)
            );
          }
        }
      );
    });
  });
};
