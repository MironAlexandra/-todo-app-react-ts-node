import express from 'express';
import * as controller from '../controllers/taskController';

const router = express.Router();

router.get('/', controller.getTasks);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
