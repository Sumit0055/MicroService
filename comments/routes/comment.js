import express from "express";
import { createComment, getCommentSnippetId } from "../controller/comment.js"

const router = express.Router();

router.route("/:id/comment").post(createComment);
router.route("/:id/comment").get(getCommentSnippetId);

export default router