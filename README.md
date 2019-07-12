# mcc-mnc-list-js
Dictionary from mcc-mnc codes to network operators based on the following Wikipedia info:
https://en.wikipedia.org/wiki/Mobile_country_code


## Installation
```
npm install mcc-mnc-list-js
```

## Record Structure
```javascript
CELL_OPERATORS = {
  `${mcc}${mnc}`: [
    {
      bands: String
      mcc: String
      operator: String
      mnc: String
    },
    ...
  ],
  ...
}
```

## Example Usage
The (mcc=311, mnc=488) pair currently belongs to Verizon Wireless.

The following code retrieves operator information on (mcc=311, mnc=488).

```javascript
import {CELL_OPERATORS} from 'mcc-mnc-list-js';

const mcc = '311';
const mnc = '488';
const key = `${mcc}${mnc}`;
if (key in CELL_OPERATORS) {
  const operators = CELL_OPERATORS[key];
  console.log(`# of operators: ${operators.length}`);
  console.log(`bands: ${operators[0].bands}`);
  console.log(`mcc: ${operators[0].mcc}`);
  console.log(`mnc: ${operators[0].mnc}`);
  console.log(`operator: ${operators[0].operator}`);
}
```
The console output is
```
# of operators: 1
bands: LTE 700
mcc: 311
mnc: 488
operator: Verizon Wireless
```
