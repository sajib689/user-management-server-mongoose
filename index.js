import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import useRouter from './route/users.route.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/v1', useRouter)





  app.get('/', (req, res) => {
    res.send('Hello World!');
  })