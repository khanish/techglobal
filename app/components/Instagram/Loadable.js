/**
 *
 * Asynchronously loads the component for Instagram
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
