import express from 'express';
import { htmlQuestionHandler, cssQuestionHandler, jsQuestionHandler, reactQuestionHandler } from '../controllers/question.controller.js';
const router = express.Router();

router.get('/html', htmlQuestionHandler);
router.get('/css', cssQuestionHandler);
router.get('/js', jsQuestionHandler);
router.get('/react', reactQuestionHandler);

export default router;