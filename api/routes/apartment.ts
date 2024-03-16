import express from "express";
import { create, list, update } from "../controllers/apartments";
const router = express.Router();
router.get("/list", list);
router.get("/list/:id", list);
router.put("/update/:id", update);
router.post("/create", create);
export default router;
