import express from "express";
import { getUser , Register , Login, Logout } from "../controllers/Users.js";
import { getCategory , createCategory } from "../controllers/Categorys.js";
import { getArticle , getArticlebyID, createArticle } from "../controllers/Articles.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controllers/refreshToken.js";
//import  swaggerUi from 'swagger-ui-express';
//import  swaggerDocument from '../swagger.json';

const router = express.Router();

//Swagger
//router.use('/api-docs', swaggerUi.serve);
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

//Users
router.get('/users', verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

//Category
router.get('/category' ,verifyToken, getCategory);
router.post('/category' , verifyToken, createCategory);

//Article
router.get('/article' , getArticle);
router.get('/article/:id' ,  getArticlebyID);
router.post('/article' , verifyToken, createArticle);

export default router;