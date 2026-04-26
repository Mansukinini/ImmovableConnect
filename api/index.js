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
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

export default app;