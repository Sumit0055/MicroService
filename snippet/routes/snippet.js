import express from "express";
import { createSnippet, getSnippet } from "../controller/snippet.js";
// import { snippets } from "../database/index.js";

const router = express.Router();

router.route("/").post(createSnippet);
router.route("/").get(getSnippet);

export default router