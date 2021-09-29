import { Router } from 'express';
import { ERRORS } from '@configs/constants';

const globalRouter = Router();

globalRouter.use('*', (_, res) => {
  res.status(ERRORS.NOT_FOUND.statusCode).send(ERRORS.NOT_FOUND.message);
});

export { globalRouter };
