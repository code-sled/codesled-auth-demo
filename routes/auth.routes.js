import express from 'express';
import { registerUser, loginUser } from '@codesled/auth';
import { User } from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'User already exists' });

  const result = await registerUser(email, password);
  const user = new User({ email, hashedPassword: result.hashed });
  await user.save();

  res.status(201).json({ message: 'User registered', email });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  try {
    const token = await loginUser(email, password, user.hashedPassword);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;
