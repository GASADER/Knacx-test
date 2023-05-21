import express from "express";

import { findAll, findId, createUser} from "../controller/users.controller.js"

const router = express.Router();

router.get("/", findAll);
router.get("/:id", findId);
router.post("/", createUser);

export default router