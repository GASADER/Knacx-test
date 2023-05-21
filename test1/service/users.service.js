import sql from "../config/sqlConfig.js";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT * FROM `vaccine_register`', (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};