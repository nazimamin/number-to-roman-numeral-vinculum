import * as RomanNumeralConverterService from '@services/roman-numeral-service';
import { ERRORS } from '@configs/constants';

describe('Roman Numeral Service', () => {
  describe('convertNumberToRomanNumeralVinculum', () => {
    it('should convert numbers between 1 and 3999 inclusive to Roman numerals', () => {
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('1')).toEqual('I');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('4')).toEqual('IV');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('5')).toEqual('V');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('9')).toEqual('IX');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('27')).toEqual('XXVII');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('39')).toEqual('XXXIX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('45')).toEqual('XLV');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('99')).toEqual('XCIX');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('100')).toEqual('C');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('250')).toEqual('CCL');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('389')).toEqual('CCCLXXXIX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('999')).toEqual('CMXCIX');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('1001')).toEqual('MI');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('2021')).toEqual('MMXXI');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('2599')).toEqual('MMDXCIX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('3999')).toEqual('MMMCMXCIX');
    });

    it('should convert numbers between 4000 and 3999999 inclusive to Roman numerals Vinculum', () => {
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('4000')).toEqual('I̅V̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('4004')).toEqual('I̅V̅IV');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('4059')).toEqual('I̅V̅LIX');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('40000')).toEqual('X̅L̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('49099')).toEqual('X̅L̅I̅X̅XCIX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('65650')).toEqual('L̅X̅V̅DCL');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('83000')).toEqual('L̅X̅X̅X̅MMM');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('84000')).toEqual('L̅X̅X̅X̅I̅V̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('99999')).toEqual('X̅C̅I̅X̅CMXCIX');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('199000')).toEqual('C̅X̅C̅I̅X̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('390999')).toEqual('C̅C̅C̅X̅C̅CMXCIX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('400000')).toEqual('C̅D̅');

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('3000600')).toEqual('M̅M̅M̅DC');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('3000000')).toEqual('M̅M̅M̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('3999999')).toEqual('M̅M̅M̅C̅M̅X̅C̅I̅X̅CMXCIX');
    });

    it('should convert numbers between 4000000 and 2200000000 inclusive with Vinculum', () => {
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('4000000')).toEqual('I̿V̿');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('1607486782')).toEqual(
        'M̿D̿C̿V̿I̿I̿C̅D̅L̅X̅X̅X̅V̅I̅DCCLXXXII'
      );
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('515205330')).toEqual('D̿X̿V̿C̅C̅V̅CCCXXX');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('1726843661')).toEqual(
        'M̿D̿C̿C̿X̿X̿V̿I̿D̅C̅C̅C̅X̅L̅MMMDCLXI'
      );

      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('989154539')).toEqual(
        'C̿M̿L̿X̿X̿X̿I̿X̿C̅L̅I̅V̅DXXXIX'
      );
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('1561473585')).toEqual(
        'M̿D̿L̿X̿M̅C̅D̅L̅X̅X̅MMMDLXXXV'
      );
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('2072530198')).toEqual(
        'M̿M̿L̿X̿X̿M̅M̅D̅X̅X̅X̅CXCVIII'
      );
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('2200000000')).toEqual('M̿M̿C̿C̿');
    });

    it('should throw null when passing number smaller than 1 and larger than 2200000000', () => {
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('0')).toEqual(null);
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('2200000001')).toEqual(null);
    });

    it('should return correct Roman numerals if input values that starts with 0s or blank characters', () => {
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('0000000004000')).toEqual('I̅V̅');
      expect(RomanNumeralConverterService.convertNumberToRomanNumeralVinculum('   0000004004')).toEqual('I̅V̅IV');
    });
  });

  describe('convertToRomanNumeralVinculum', () => {
    it('should correctly convert number to Roman numeral Vinculum', () => {
      expect(RomanNumeralConverterService.convertToRomanNumeralVinculum('4000')).toEqual('I̅V̅');
      expect(RomanNumeralConverterService.convertToRomanNumeralVinculum('4004')).toEqual('I̅V̅IV');
      expect(RomanNumeralConverterService.convertToRomanNumeralVinculum('4059')).toEqual('I̅V̅LIX');
    });

    it('should throw invalid param error if number is out of bounds', () => {
      expect(() => {
        RomanNumeralConverterService.convertToRomanNumeralVinculum('-00000001');
      }).toThrowError(ERRORS.INVALID_PARAM);

      expect(() => {
        RomanNumeralConverterService.convertToRomanNumeralVinculum('0');
      }).toThrowError(ERRORS.INVALID_PARAM);

      expect(() => {
        RomanNumeralConverterService.convertToRomanNumeralVinculum('2200000001');
      }).toThrowError(ERRORS.INVALID_PARAM);

      expect(() => {
        RomanNumeralConverterService.convertToRomanNumeralVinculum('cfgdfgfdg');
      }).toThrowError(ERRORS.INVALID_PARAM);

      expect(() => {
        RomanNumeralConverterService.convertToRomanNumeralVinculum('30.21 1/2');
      }).toThrowError(ERRORS.INVALID_PARAM);
    });
  });
});
