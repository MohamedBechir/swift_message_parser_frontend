/**
 *
 * Asynchronously loads the component for SendMessagePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SendMessage = lazyLoad(
  () => import('./index'),
  module => module.SendMessagePage,
);
