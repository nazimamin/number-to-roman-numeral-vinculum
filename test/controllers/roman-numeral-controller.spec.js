import * as RomanNumeralConverterController from '@controllers/roman-numeral-controller';
import * as RomanNumeralConverterService from '@services/roman-numeral-service';
import { ERRORS } from '@configs/constants';

const mockRequest = () => {
  const req = {
    body: jest.fn().mockReturnValue({}),
    params: jest.fn().mockReturnValue({}),
    query: jest.fn().mockReturnValue({})
  };
  return req;
};
const mockResponse = () => {
  const res = {
    send: jest.fn().mockReturnValue({}),
    status: jest.fn().mockReturnValue({}),
    json: jest.fn().mockReturnValue({})
  };
  return res;
};

describe('Roman Numeral Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return 200 http code with converted Roman Numeral value', () => {
    jest.spyOn(RomanNumeralConverterService, 'convertToRomanNumeralVinculum').mockReturnValue('IV');

    let req = mockRequest();
    let res = mockResponse();

    req = {
      ...req,
      query: {
        query: 4
      }
    };

    RomanNumeralConverterController.romanNumeralVinculumConverterController(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('IV');
  });

  it('should return 200 http code with converted Roman Numeral Vinculum value', () => {
    const outputValue = 'D̿X̿V̿C̅C̅V̅CCCXXX';
    jest.spyOn(RomanNumeralConverterService, 'convertToRomanNumeralVinculum').mockReturnValue(outputValue);

    let req = mockRequest();
    let res = mockResponse();

    req = {
      ...req,
      query: {
        query: 515205330
      }
    };

    RomanNumeralConverterController.romanNumeralVinculumConverterController(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(outputValue);
  });

  it('should return with 400 http status code when query param is missing', () => {
    let req = mockRequest();
    let res = mockResponse();

    req = {
      ...req,
      query: {}
    };

    RomanNumeralConverterController.romanNumeralVinculumConverterController(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(ERRORS.MISSING_PARAM.message);
  });

  it('should return with 422 http status code when query param is invalid', () => {
    let req = mockRequest();
    let res = mockResponse();

    req = {
      ...req,
      query: {
        query: 'fdksljfdslkfjsdlk8888'
      }
    };

    RomanNumeralConverterController.romanNumeralVinculumConverterController(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.send).toHaveBeenCalledWith(ERRORS.INVALID_PARAM.message);
  });
});
