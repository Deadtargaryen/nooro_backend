import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes';

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

app.use(express.json()); 


app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
