import express from "express";

import { findAll,findId } from "../controller/users.controller.js"

const router = express.Router();

router.get("/", findAll);
router.get("/:id", findId);

export default router