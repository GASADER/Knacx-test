import sql from "../config/sql.js";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM `vaccine_register`", (err, result) => {
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
    sql.query(
      "SELECT * FROM `vaccine_register` WHERE `user_id` = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const Post = (data) => {
  return new Promise((resolve, reject) => {
    sql.query(
      "INSERT INTO `vaccine_register` (`round`, `vaccine_booking_date`) VALUES (?, ?)",
      [data.round, data.vaccine_booking_date],
      (err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          sql.query(
            "INSERT INTO `user_data` (`id_passport`, `marriage_status`,`career`,`phone_number`) VALUES ( ?, ?, ?, ?)",
            [
              data.id_passport,
              data.marriage_status,
              data.career,
              data.phone_number,
            ],
            (err, result) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                sql.query(
                  "INSERT INTO `user_address` (`prefix`, `fname_thai`,`lname_thai`,`fname_eng`,`lname_eng`,`birthdate`,`gender`,`nationality`,`religion`,`address`,`city`,`canton`,`district`,`province`,`country`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                  [
                    data.prefix,
                    data.fname_thai,
                    data.lname_thai,
                    data.fname_eng,
                    data.lname_eng,
                    data.birthdate,
                    data.gender,
                    data.nationality,
                    data.religion,
                    data.address,
                    data.city,
                    data.canton,
                    data.district,
                    data.province,
                    data.country,
                  ],
                  (err, result) => {
                    if (err) {
                      console.error(err);
                      reject(err);
                    } else 
                    resolve(result);
                  }
                );
              }
            }
          );
        }
      }
    );
  });
};
