/**
 * @flow strict
 * @format
 */

const operators = require('./operators.js');

export const CELL_OPERATORS = operators;

function get_operators(mcc, mnc) {
  const key = `${mcc}${mnc}`;
  if (!(key in operators)) {
    return null;
  }
  return operators[key];
}

export default get_operators;
