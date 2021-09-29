import supertest from 'supertest';
import api from '@/index';
import { ERRORS, APPLICATION_ENVS } from '@configs/constants';

describe('Number To Roman Numeral Vinculum', () => {
  it('should return 200 http status code with converted Roman Numeral value', (done) => {
    const queryPath = `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=4`;
    supertest(api).get(queryPath).expect(200, done);
  });

  it('should return 200 http status code with converted Roman Numeral Vinculum value', (done) => {
    const queryPath = `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=2200000000`;
    supertest(api).get(queryPath).expect('M̿M̿C̿C̿').expect(200, done);
  });

  it('should return with 422 http status code has a negative number', (done) => {
    const queryPath = `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=-9090`;
    supertest(api).get(queryPath).expect(ERRORS.INVALID_PARAM.message).expect(ERRORS.INVALID_PARAM.statusCode, done);
  });

  it('should return with 400 http status code when query param is missing', (done) => {
    const queryPath = `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=`;
    supertest(api).get(queryPath).expect(ERRORS.MISSING_PARAM.message).expect(ERRORS.MISSING_PARAM.statusCode, done);
  });

  it('should return with 422 http status code when query param is invalid', (done) => {
    const queryPath = `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=dsfsdfds`;
    supertest(api).get(queryPath).expect(ERRORS.INVALID_PARAM.message).expect(ERRORS.INVALID_PARAM.statusCode, done);
  });

  it('should return with 404 http status when a path does not exist', (done) => {
    const queryPath = `/?query=dsfsdfds`;
    supertest(api).get(queryPath).expect(ERRORS.NOT_FOUND.message).expect(ERRORS.NOT_FOUND.statusCode, done);
  });
});
