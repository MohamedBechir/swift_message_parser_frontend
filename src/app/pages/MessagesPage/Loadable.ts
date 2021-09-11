/**
 *
 * Asynchronously loads the component for MessagesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MessagesPage = lazyLoad(
  () => import('./index'),
  module => module.MessagesPage,
);
