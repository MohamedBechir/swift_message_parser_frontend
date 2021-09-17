/**
 *
 * Asynchronously loads the component for StatisticsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StatisticsPage = lazyLoad(
  () => import('./index'),
  module => module.StatisticsPage,
);
