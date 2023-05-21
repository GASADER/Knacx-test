import {getUsers, getUsersById} from "../service/users.service.js"

export const findAll = async (req, res) => {
    try {
      const posts = await getUsers();
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  };
export const findId = async (req, res) => {
    const id = req.params.id
    try {
      const posts = await getUsersById(id);
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  };