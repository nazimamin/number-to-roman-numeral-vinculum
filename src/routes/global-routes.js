import { Router } from 'express';
import { ERRORS } from '@configs/constants';

const globalRouter = Router();

globalRouter.use('*', (_, res) => {
  res
    .status(ERRORS.NOT_IMPLEMENTED.statusCode)
    .send(ERRORS.NOT_IMPLEMENTED.message);
});

export { globalRouter };
