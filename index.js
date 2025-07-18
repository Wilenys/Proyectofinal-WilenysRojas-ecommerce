import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import productRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { handleNotFound } from './src/middlewares/notFound.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/auth', authRoutes);

app.use(handleNotFound);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
