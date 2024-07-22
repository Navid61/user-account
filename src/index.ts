import express from 'express';
import bodyParser from 'body-parser';
import userAcountRouter from './routes/userAccount.js';
import { startGrpcServer } from './grpc_server.js';
// Initialize Express app
const app = express();
const port = 5001;

app.use(bodyParser.json());

// Express.js route example
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});


app.use('/status', userAcountRouter)

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

startGrpcServer()


