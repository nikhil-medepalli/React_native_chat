import { Router } from "express";
import { authCallback, getUser } from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

// the me route in the video
router.get("/user",protectRoute, getUser)
router.post("/callback", authCallback)

export default router;