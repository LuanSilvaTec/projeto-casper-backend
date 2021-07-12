import express from 'express';
import routes from './routes/routes'
import cors from 'cors'



const app = express()
app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
  });
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000)