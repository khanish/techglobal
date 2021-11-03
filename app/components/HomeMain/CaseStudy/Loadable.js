/**
 *
 * Asynchronously loads the component for CaseStudy
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
