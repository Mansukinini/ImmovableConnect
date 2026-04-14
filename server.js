import express from 'express';
import cors from 'cors';
import path from 'node:path'; 
import connectDB from './data/db.js';
import authRoutes from './routes/api/auth.js';
import profileRoutes from './routes/api/profile.js';
import postsRoutes from './routes/api/posts.js';
import userRoutes from './routes/api/user.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:8081'
}));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/dist'));

  app.get('(.*)', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    res.send('Server is running, but no specific route matched.');
  });
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export default app;