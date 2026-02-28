
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from "cors"
import connect from './auth/connectDB.ts'
import applicantRoutes from './routes/applicantRoutes.ts'
import { config as cloudinaryConfig } from './auth/cloudinary.ts'


const app = express();

cloudinaryConfig();
app.use(cors());
app.use(express.json());


app.use("/api/applicant",applicantRoutes)
const PORT = process.env.PORT

connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })


