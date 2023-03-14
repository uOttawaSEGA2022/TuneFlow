import Mock from './mock';

import './db/auth';
import './db/ecommerce';

Mock.onAny().passThrough();
