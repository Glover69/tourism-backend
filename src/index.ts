import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { connectDB } from "./database";
import locationRoutes from "./routes/location.routes";


dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());
const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000', 'https://mpampacereals.com', 'https://www.mpampacereals.com', 'https://data-collection-nine.vercel.app', 'http://localhost:8000', 'https://cv-gen-six.vercel.app'];

// Use CORS middleware with specific origins
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use('/api/v1', locationRoutes);


// app.get('/api/data', (req: Request, res: Response) => {
//     res.json({ message: 'Here is your data!' });
// });