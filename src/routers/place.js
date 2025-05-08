import { Router } from 'express';
import express from 'express';

import * as controllers from '../controllers/index.js'


const router = Router();

router.use(express.json());

router.post('/', controllers.creatPlace);
router.get('/', controllers.getAllPlace);

export default router;