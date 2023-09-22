import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import userRoutes from './src/routes/user.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3300;
mongoose.connect(process.env.MONGO_URL)
    .then(()=>app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((err)=>console.log(err))

const corsConfig={
    credentials: "true",
    origin: "http://localhost:3000",
    optionSuccessStatus: "200",
};

app.use(compression());
app.use(cors(corsConfig));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/user',userRoutes);