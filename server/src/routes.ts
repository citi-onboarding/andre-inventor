import express from 'express';
import UserController from '@controllers/UserController'
import ProjectController from '@controllers/ProjetoController'
import HomeController from '@controllers/HomeController';
import AboutMeController from '@controllers/AboutMeController';
import eBookController from '@controllers/eBookController';

const routes = express.Router();
const userController = new UserController();
const projectController = new ProjectController();
const homeController = new HomeController();
const aboutMeController = new AboutMeController();
const ebookController = new eBookController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/projects',projectController.create);
routes.get('/projects', projectController.get);
routes.delete('/projects/:id', projectController.delete);
routes.put('/projects/:id', projectController.update);

routes.post('/home', homeController.create);
routes.get('/home', homeController.get);
routes.delete('/home/:id',homeController.delete);
routes.put('/home/:id',homeController.update);

routes.post('/aboutMe', aboutMeController.create);
routes.get('/aboutMe', aboutMeController.get);
routes.delete('/aboutMe/:id',aboutMeController.delete);
routes.put('/aboutMe/:id',aboutMeController.update);

routes.post('/eBook', ebookController.create);
routes.get('/eBook', ebookController.get);
routes.delete('/eBook/:id',ebookController.delete);
routes.put('/eBook/:id',ebookController.update);


export default routes;