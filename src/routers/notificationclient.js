

import express from "express";
import * as controllers from '../controllers/index.js';

const router = express.Router();


router.post('/', controllers.createNotificationClient);
router.put('/:id', controllers.updateNotificationClient);
router.get('/', controllers.getAllNotificationClient);
router.get('/:id', controllers.getNotificationByIdClient);

export default router;