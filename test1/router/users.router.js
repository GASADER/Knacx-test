import express from "express";

import { findAll } from "../controller/users.controller.js"

const router = express.Router();

router.get("/", findAll);

export default router