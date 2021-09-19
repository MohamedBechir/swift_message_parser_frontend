/**
 *
 * Asynchronously loads the component for StatisticsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
);
