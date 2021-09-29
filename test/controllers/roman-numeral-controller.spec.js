import * as RomanNumeralConverterController from '../../../src/controllers';
import * as RomanNumeralConverterService from '../../../src/services';

fdescribe('Roman Numeral Controller', () => {
  it('should return 200 with converted Roman Numeral Vinculum value', async () => {
    const spy = jest.spyOn(RomanNumeralConverterService, 'convertToRomanNumeralVinculum').mockReturnValue('IV');
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

    let req = mockRequest();
    let res = mockRequest();

    req = {
      ...req,
      query: {
        query: 4
      }
    };

    await RomanNumeralConverterController.romanNumeralVinculumConverterController(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('IV');
  });
});
