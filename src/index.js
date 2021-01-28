import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server up and running on PORT ${port} 🚀`);
});
