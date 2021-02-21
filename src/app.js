import express from "express";
import routes from './routes/index'
// import i18n from './language/languageConfig'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use(routes);

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => console.log(`The development server is running on the port ${PORT}`));

export default app;
