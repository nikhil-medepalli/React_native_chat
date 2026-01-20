import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getChatMessages } from "../controllers/messageController";

const router = Router();

router.get("/chat/:chatId", protectRoute, getChatMessages)

export default router;