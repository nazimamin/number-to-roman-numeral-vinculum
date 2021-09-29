import { Router } from 'express';
import { APPLICATION_ENVS } from '@configs/constants';
import { romanNumeralVinculumConverterController } from '@controllers/index';

const romanNumeralRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: RomanNumeralConverter
 *    description: API to convert number to Roman numeral up to Vinculum
 * /romannumeral:
 *   get:
 *     summary: Converts number to Roman numeral Vinculum
 *     tags: [RomanNumeralConverter]
 *     produces:
 *       - text/plain
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Numeric value to be converted to Roman numeral Vinculum.
 *         schema:
 *           type: string
 *     responses:
 *        200:
 *          description: Converted Roman numeral Vinculum
 *        400:
 *          description: Bad request. Missing inputs
 *        422:
 *          description: Bad request. Invalid inputs
 */
romanNumeralRouter.get(`${APPLICATION_ENVS.romanNumeralConverterEndpoint}`, romanNumeralVinculumConverterController);

export { romanNumeralRouter };
