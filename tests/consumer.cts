import * as api from '@lp-labs/array-zip-longest';
import { zipLongest } from '@lp-labs/array-zip-longest';
console.log(zipLongest([['a', 'b'], ['x']], ''));
// @ts-expect-error invalid argument must be rejected by declarations
api.zipLongest('arrays');
