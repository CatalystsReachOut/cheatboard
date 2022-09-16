import express from "express";
const router=express.Router();

// controllers
import { fetchTextFromCode, generateCheatcode } from "../controllers/cheatBoardController.js";

router.route("/fetchCode").post(generateCheatcode);
router.route("/fetchCode").get(fetchTextFromCode);

export default router;