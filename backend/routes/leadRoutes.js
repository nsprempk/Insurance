import express from "express";

import {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  getLeadStats,
} from "../controllers/leadController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*
 * Public
 */
router.post("/", createLead);

/*
 * Admin only
 */
router.get("/", protect, getLeads);

router.get("/stats", protect, getLeadStats);

router.get("/:id", protect, getLeadById);

router.patch("/:id", protect, updateLead);

export default router;
