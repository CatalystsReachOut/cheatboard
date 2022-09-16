import express from "express";
const router=express.Router();

// controllers
import { fetchTextFromCode, generateCheatcode } from "../controllers/cheatBoardController.js";

router.route("/generateCode").get(generateCheatcode);
router.route("/generateCode").post(fetchTextFromCode);

export default router;