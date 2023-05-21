import {getUsers} from "../service/users.service.js"

export const findAll = async (req, res) => {
    try {
      const posts = await getUsers(res);
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  };