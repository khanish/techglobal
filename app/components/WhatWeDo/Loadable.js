/**
 *
 * Asynchronously loads the component for WhatWeDo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
