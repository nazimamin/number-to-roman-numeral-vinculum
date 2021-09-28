import { Router } from 'express';

const romanNumeralRouter = Router();

romanNumeralRouter.get('*', (req, res) => {
  res.status(200).json();
});

export default romanNumeralRouter;
