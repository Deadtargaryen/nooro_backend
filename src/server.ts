import express, { Request, Response } from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes';

const app = express();
const port = process.env.PORT || 3003;

// Enable CORS
app.use(cors());

// Built-in middleware to parse JSON
app.use(express.json());  // Replacing bodyParser.json() with express.json()

// Register routes under "/api" prefix
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
