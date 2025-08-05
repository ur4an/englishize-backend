import { Router } from "express";
import submissionRoute from "./submission";

const router = Router();

router.use("/submit", submissionRoute);

export default router;
