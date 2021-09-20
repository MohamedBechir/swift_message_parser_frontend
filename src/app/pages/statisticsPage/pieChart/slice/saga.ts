import { STATISTICS_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FetchMessagesPerTypeActions as actions } from '.';

export function* fetchMessagesPerTypeSaga(action) {
  try {
    const messagesPerType = yield call(
      request.get,
      `${STATISTICS_ENDPOINTS.messages_per_type}`,
    );
    yield put(actions.FetchMessagesPerTypeSuccess(messagesPerType));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchStatisticsRootState() {
  yield takeLatest(
    actions.requestFetchMessagesPerType.type,
    fetchMessagesPerTypeSaga,
  );
}
