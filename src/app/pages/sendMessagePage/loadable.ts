/**
 *
 * Asynchronously loads the component for SendMessagePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MessagesPage = lazyLoad(
  () => import('./index'),
  module => module.SendMessagePage,
);
