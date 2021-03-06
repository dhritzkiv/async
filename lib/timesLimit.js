'use strict';

import mapLimit from './mapLimit';
import range from 'lodash/_baseRange';

export default function timeLimit(count, limit, iteratee, cb) {
    return mapLimit(range(0, count, 1), limit, iteratee, cb);
}
