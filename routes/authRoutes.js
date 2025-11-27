import express from "express";
import { requestPasswordReset } from "../controllers/authController.js";

const router = express.Router();

router.post("/reset-request", requestPasswordReset);

export default router;
