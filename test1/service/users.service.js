import sql from "../config/sql.js";

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

export const getUsersById = (id) => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT * FROM `vaccine_register` WHERE `user_id` = ?', [id], (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};