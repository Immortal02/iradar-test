import conditions from './conditions.json';
import express from 'express';

const router = express.Router();

router.get('/condition', (req, res) => {
  res.send(JSON.stringify(conditions));
});

export default router;