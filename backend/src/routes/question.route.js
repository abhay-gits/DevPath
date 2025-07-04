import express from 'express';
import { htmlQuestionHandler, cssQuestionHandler, jsQuestionHandler, reactQuestionHandler, osQuestionHandler } from '../controllers/question.controller.js';
const router = express.Router();

router.get('/html', htmlQuestionHandler);
router.get('/css', cssQuestionHandler);
router.get('/js', jsQuestionHandler);
router.get('/react', reactQuestionHandler);
router.get('/Operating-System', osQuestionHandler);

export default router;