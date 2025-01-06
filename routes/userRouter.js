import express from 'express';
import {create,fetch,update,Delete,find} from '../controller/userController.js';
const router = express.Router();
router.post('/create',create);
router.get('/fetch',fetch);
router.put('/update/:id',update);
router.delete('/Delete/:id',Delete);
router.get('/find/:id',find);

export default router;
