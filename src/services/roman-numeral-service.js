import { ERRORS, UPPER_LIMIT, LOWER_LIMIT } from '@configs/constants';
import { ROMAN_NUMERAL_MAP, ROMAN_NUMERAL_VINCULUM_MAP, ROMAN_NUMERAL_VINCULUM_LARGE_MAP } from './constants';

/**
 * Converts a number to Roman numeral Vinculum format
 *
 * @param {number | string } inputNumber between LOWER_LIMIT <> UPPER_LIMIT
 * @returns {string} converted to Roman numeral Vinculum string
 */
export const convertToRomanNumeralVinculum = (inputNumber) => {
  // check if input contains anything but number
  if (inputNumber && !/^\d+$/.test(inputNumber)) {
    throw {
      ...ERRORS.INVALID_PARAM
    };
  }

  // cast inputNumber to number and remove any leading 0s or blank spaces
  inputNumber = Number(inputNumber);

  // Check if inputNumber contains any decimals or is out-of-bounds
  if (inputNumber % 1 !== 0 || inputNumber < LOWER_LIMIT || inputNumber > UPPER_LIMIT) {
    throw {
      ...ERRORS.INVALID_PARAM
    };
  }

  return convertNumberToRomanNumeralVinculum(inputNumber);
};

/**
 * Converts a number to Roman numeral Vinculum format
 *
 * Break the number to the smallest subset possible then solve each and build the result up
 *
 * @param {number | string } num between LOWER_LIMIT <> UPPER_LIMIT
 * @returns {string} converted Roman numeral Vinculum string
 */
export const convertNumberToRomanNumeralVinculum = (num) => {
  // convert to integer number and remove leading 0s blank spaces
  num = Number(num);
  // Represents Roman Vinculum M̅ (1000000), M̅M̅ (2000000), etc.
  const BREAK_POINT_THRESHOLD_LARGEST = 1000000;
  // Represents Roman Vinculum X̅ (10000), X̅X̅ (20000), etc.
  const BREAK_POINT_THRESHOLD_MID = 1000;
  // Represents Roman Numeral I (1), II (2), etc..
  const BREAK_POINT_THRESHOLD = 1;

  let resultStr = '';
  if (num >= 4000000 && num <= 2200000000) {
    return romanNumeralVinculum(resultStr, num, BREAK_POINT_THRESHOLD_LARGEST);
  }
  if (num >= 4000 && num < 4000000) {
    return romanNumeralVinculum(resultStr, num, BREAK_POINT_THRESHOLD_MID);
  }
  if (num > 0 && num < 4000) {
    return romanNumeralVinculum(resultStr, num, BREAK_POINT_THRESHOLD);
  }

  return null;
};

/**
 * Converts a given number to Roman numeral Vinculum
 * Recursively break the input number to the smallest subset possible then solve each and build the result up
 *
 * @param {string} resultStr final converted string
 * @param {number} num input number that needs to be converted
 * @param {number} threshold which bracket the input number belongs to in Roman numeral map
 * @returns func | string containing the next subset or resultant string
 */
export const romanNumeralVinculum = (resultStr, num, threshold) => {
  let smallestNumberLeft = num;
  let remainder = 0;

  // Threshold === 1 means we're already in the smallest subset number i.e I, II, III
  // Hence, we don't need to break the number further and continue with the loop
  if (threshold !== 1) {
    // i.e num = 83000
    smallestNumberLeft = Math.trunc(num / threshold); // 83
    // Find break point to break the number to a smaller subset
    remainder = num % threshold; // 83000%1000 = 0
    // break to smaller subset  = 3 ->
    const breakPoint = smallestNumberLeft % 10; // 3

    // Number (breakPoint) smaller than 4 belongs in the lower bracket
    // i.e 83000 , 3000 does not belong in the current bracket
    if (breakPoint < 4) {
      // build up the remainder to get the exact representation for the remainder we're setting aside
      // remainder (3000) will be solved in the next recursive call
      remainder += breakPoint * threshold; // 3=> 3000
      smallestNumberLeft -= breakPoint; // 83 - 3 = 80
    }
  }

  // Orderly loop through the map (order is important as we want to loop from the highest to the lowest tenth)
  // [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  for (const [numberValue, romanValue] of ROMAN_NUMERAL_MAP.entries()) {
    // (first loop) currValue..  -> 80 / 1000  => 0
    // (seventh loop) currValue.. -> 80 / 50 => 1 so that means below romanValue will map to L
    const currValueShouldRepeatTimes = Math.trunc(smallestNumberLeft / numberValue);
    // (first loop) 80%1000 => 0  on 5th loop => 30 -> go to the next loop
    smallestNumberLeft = smallestNumberLeft % numberValue;

    if (threshold === 1000000) {
      if (currValueShouldRepeatTimes > 0) {
        resultStr += ROMAN_NUMERAL_VINCULUM_LARGE_MAP.get(numberValue).repeat(currValueShouldRepeatTimes);
      }
    } else if (threshold === 1000) {
      // threshold for 83000 is 1000
      // (first loop) currValueShouldRepeatTimes = 0, so resultStr does not change
      // (seventh loop) currValueShouldRepeatTimes = 1, so resultStr will have item in 50th place (L̅)
      if (currValueShouldRepeatTimes > 0) {
        resultStr += ROMAN_NUMERAL_VINCULUM_MAP.get(numberValue).repeat(currValueShouldRepeatTimes);
      }
    } else {
      if (currValueShouldRepeatTimes > 0) {
        resultStr += romanValue.repeat(currValueShouldRepeatTimes);
      }
    }
    // if we already found all the roman numeral, stop looping through the rest of the items
    if (smallestNumberLeft === 0) {
      break;
    }
  }
  // base case, we've already found the resultant string, break out of recursion
  if (remainder === 0 || threshold === 1) {
    return resultStr;
  }
  return romanNumeralVinculum(resultStr, remainder, Math.trunc(threshold / 1000));
};
