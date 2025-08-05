import express from "express";
import { prisma } from "../lib";

const submissionRoute = express.Router();

submissionRoute.post("/", async (req, res) => {
  try {
    const { name, email, phone, message, role } = req.body;
    const submission = await prisma.submission.create({
      data: { name, email, phone, message, role },
    });
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ error: "Submission failed", details: err });
  }
});

submissionRoute.get("/", async (req, res) => {
  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { submittedAt: "desc" },
    });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

export default submissionRoute;
