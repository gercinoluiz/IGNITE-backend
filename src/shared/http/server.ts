import express from 'express';
import 'reflect-metadata' // This is used in orther to tsringe work
import '../container'
import swaggerUi from 'swagger-ui-express'; // LIB DO SWAGGER
import swaggerFile from '../../docs/swagger.json';


const app = express();

import '../../database';
import { router } from '../../routes';

app.use(express.json());

// 1. The route I wanna use as docs
// 2. The swagger server
// 3. The JSON file with config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); // I import it before my routes

app.use(router);

app.listen(3333, () =>
    console.log('Server runing on port 3333 in development...')
);
