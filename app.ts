import express from "express";
import bodyParser from 'body-parser';
import users from './routes/users';
import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import products from './routes/products';
import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/users', users);

app.use('/products', products);
const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
