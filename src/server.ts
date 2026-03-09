import express from 'express';// ESM ECMASCRIPT MODULES 
import 'dotenv/config'
import router from './router';
import { connectDB } from './config/db';

const app=express();
connectDB();
//Leer el body de las peticiones
app.use(express.json());

app.use('/',router);

export default app;