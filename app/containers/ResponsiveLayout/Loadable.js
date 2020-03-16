/**
 *
 * Asynchronously loads the component for Layout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
