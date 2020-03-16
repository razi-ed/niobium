/**
 *
 * Asynchronously loads the component for Test
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
