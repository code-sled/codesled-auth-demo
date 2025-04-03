import express from 'express';
import { authenticate } from '@codesled/auth';

const router = express.Router();

router.get('/', authenticate, (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

export default router;
