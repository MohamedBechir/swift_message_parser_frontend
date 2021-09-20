import { STATISTICS_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FetchStatisticsActions as actions } from '.';

export function* fetchStatisticsSaga(action) {
  try {
    const statistics = yield call(
      request.get,
      `${STATISTICS_ENDPOINTS.statistics}`,
    );
    yield put(actions.FetchStatisticsSuccess(statistics));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchStatisticsRootState() {
  yield takeLatest(actions.requestFetchStatistics.type, fetchStatisticsSaga);
}
