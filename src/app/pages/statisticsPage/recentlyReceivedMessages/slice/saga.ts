import { STATISTICS_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FetchLastFiveMessagesActions as actions } from '.';

export function* fetchLastFiveMessagesSaga(action) {
  try {
    const lastFiveMessages = yield call(
      request.get,
      `${STATISTICS_ENDPOINTS.last_five_messages}`,
    );
    yield put(actions.FetchLastFiveMessagesSuccess(lastFiveMessages));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchStatisticsRootState() {
  yield takeLatest(
    actions.requestFetchLastFiveMessages.type,
    fetchLastFiveMessagesSaga,
  );
}
