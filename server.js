import express from 'express';
import cors from 'cors';
import path from 'node:path';
import connectDB from './data/db.js';
import authRoutes from './routes/api/auth.js';
import profileRoutes from './routes/api/profile.js';
import postsRoutes from './routes/api/posts.js';
import userRoutes from './routes/api/user.js';

// Only connect to DB when not in serverless mode
if (process.env.VERCEL === undefined) {
  connectDB();
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*' // Allow all origins in production
}));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
  
  app.get('/:path(.*)', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

// Vercel serverless handler - wrap Express app
export default async function handler(req, res) {
  // Set proper headers for JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Use express as request handler
  return app(req, res);
}

// For local development
if (process.env.VERCEL === undefined) {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}