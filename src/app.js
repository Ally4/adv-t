import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import routes from './routes/index';

const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => console.log(`The development server is running on the port ${PORT}`));

export default app;
