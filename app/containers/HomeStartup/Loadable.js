/**
 *
 * Asynchronously loads the component for HomeStartup
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
