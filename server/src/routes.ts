import express from 'express';
import UserController from '@controllers/UserController';
import HomeController from '@controllers/HomeController';
import AboutMeController from '@controllers/AboutMeController';

const routes = express.Router();
const userController = new UserController();
const homeController = new HomeController();
const aboutMeController = new AboutMeController()

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/home', homeController.create);
routes.get('/home', homeController.get);
routes.delete('/home/:id',homeController.delete);
routes.put('/home/:id',homeController.update);

routes.post('/aboutMe', aboutMeController.create);
routes.get('/aboutMe', aboutMeController.get);
routes.delete('/aboutMe/:id',aboutMeController.delete);
routes.put('/aboutMe/:id',aboutMeController.update);


export default routes;