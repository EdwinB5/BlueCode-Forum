import express from 'express';
import { HiloController } from '../controllers/hilos.controller.js';

const route = express.Router();

/*
	Endpoint que permite traer todos los hilos que 
	existen en la base de datos
*/
route.get('/', async (req, res) => {
	const hiloController = new HiloController(req);
	let hilo = await hiloController.getHilo(req.params);

	res.status = hilo.status;
	res.json(hilo);
});

/*
	Endpoint que permite realizar busquedas en los hilos
	segun los criterios de busqueda pasados por la url
	?parametro=valor&otro=valor
*/
route.get('/buscar', async (req, res) => {
	const hiloController = new HiloController(req);
	let hilo = await hiloController.getHilo({buscar: req.query});

	res.status = hilo.status;
	res.json(hilo);
});

/*
	Endpoint que permite crear un hilo
	segun los datos enviados por el body (POST) 
*/
route.post('/crear', async (req, res) => {
	const hiloController = new HiloController(req);
	let hilo = await hiloController.createHilo(req.body);

	res.status = hilo.status;
	res.json(hilo);
});

/*
	Endpoint que permite eliminar un hilo
	segun los criterios de eliminación
	?parametro=valor&otro=valor
*/
route.post('/eliminar', async (req, res) => {
	const hiloController = new HiloController(req);
	let hilo = await hiloController.deleteHilo(req.body);

	res.status = hilo.status;
	res.json(hilo);
});

/*
	Endpoint que permite modificar un hilo
	segun los criterios enviados por el body
	de la peticion
*/
route.post('/modificar', async (req, res) => {
	const hiloController = new HiloController(req);
	let hilo = await hiloController.updateHilo(req.body);

	res.status = hilo.status;
	res.json(hilo);
});

export default route;