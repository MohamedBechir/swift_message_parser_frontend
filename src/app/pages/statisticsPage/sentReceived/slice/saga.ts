import { STATISTICS_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FetchSentReceivedActions as actions } from '.';

export function* fetchMessagesPerTypeSaga(action) {
  try {
    const sentReceived = yield call(
      request.get,
      `${STATISTICS_ENDPOINTS.sent_received}`,
    );
    yield put(actions.FetchMessagesSentReceivedSuccess(sentReceived));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchStatisticsRootState() {
  yield takeLatest(
    actions.requestFetchSentReceived.type,
    fetchMessagesPerTypeSaga,
  );
}
