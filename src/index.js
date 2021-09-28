import express from 'express';
import { envs } from '@configs';
import { romanNumeralRouter } from '@routes';

const { PORT = 8080 } = envs;
const app = express();

app.get('/', romanNumeralRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
