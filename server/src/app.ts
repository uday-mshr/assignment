import express, { Express, Request, Response }from 'express';
import cors from 'cors';
import router from './routes/index.route';
import connectToDatabase from './utils/db';

const app: Express = express();

app.use(express.json());



const corsOptions = {
  origin: '*', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable set cookie
  optionsSuccessStatus: 204,
};


// Use cors middleware
app.use(cors(corsOptions));


connectToDatabase();

app.use("/api", router);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello, From server-service!');
});



export default app;
