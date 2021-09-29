import * as RomanNumeralConverterController from '../../src/controllers/roman-numeral-controller';
import * as RomanNumeralConverterService from '../../src/services/roman-numeral-service';

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
  it('should return 200 with converted Roman Numeral value', () => {
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

  it('should return 200 with converted Roman Numeral Vinculum value', () => {
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
});
