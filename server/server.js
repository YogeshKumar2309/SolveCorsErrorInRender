import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Simple CORS setup
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://your-vercel-app.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from backend!');
})

// Simple API routes
app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Hello from backend!',
    items: [1, 2, 3, 4, 5]
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});