import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017/Skeleton';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/api', contactRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('("message": "Welcome to DressStore application")');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});