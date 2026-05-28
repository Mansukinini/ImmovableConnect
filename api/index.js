import express from 'express';
import cors from 'cors';
import connectDB from '../data/db.js';
import authRoutes from '../routes/api/auth.js';
import profileRoutes from '../routes/api/profile.js';
import postsRoutes from '../routes/api/posts.js';
import userRoutes from '../routes/api/user.js';

// Connect to DB
connectDB();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

export default app;