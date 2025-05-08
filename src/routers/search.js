import { Router } from 'express';
import express from 'express';

import * as controllers from '../controllers/index.js'


const router = Router();

router.use(express.json());

router.get('/', controllers.searchProductsController)
router.get('/filter', controllers.filterProducts)



export default router;