import * as RomanNumeralConverterService from '@services/roman-numeral-service';
import { ERRORS } from '@configs/constants';

/**
 * Manages the incoming request validation and response with converted Roman numeral in Vinculum format
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Response | Response<Error>} returns with converted Roman numeral Vinculum format | Error message
 */
export const romanNumeralVinculumConverterController = (req, res) => {
  const { query: inputNumber } = req.query;

  try {
    // return with missing parameter error if query does not contain any value
    if (!inputNumber) {
      throw {
        ...ERRORS.MISSING_PARAM
      };
    }

    // return with invalid parameter error if query contains anything but numbers
    if (inputNumber && !/^\d+$/.test(inputNumber)) {
      throw {
        ...ERRORS.INVALID_PARAM
      };
    }

    const romanNumeralVinculum = RomanNumeralConverterService.convertToRomanNumeralVinculum(inputNumber);

    res.status(200);
    res.send(romanNumeralVinculum);
  } catch (err) {
    res.status(err.statusCode);
    res.send(err.message);
  }
};
