import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectToDatabase } from './db/db.js';
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'

const app = express();
const PORT = process.env.PORT || 5000;

connectToDatabase();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
