/**
 *
 * Asynchronously loads the component for MessageUploadPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const uploadMessagePage = lazyLoad(
  () => import('.'),
  module => module.UploadMessageComponenet,
);
