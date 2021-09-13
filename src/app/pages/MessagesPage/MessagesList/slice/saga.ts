import { MESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchMessagesActions as actions } from '.';

export function* fetchMessagesSaga(action) {
  try {
    console.log('saga' + action.payload.page);
    const messages = yield call(
      request.get,
      MESSAGE_ENDPOINTS.messages +
        `?page=${action.payload.page}&size=${action.payload.size}`,
    );
    yield put(actions.FetchMessagesSuccess(messages));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMessagesRootState() {
  yield takeLatest(actions.requestFetchMessages.type, fetchMessagesSaga);
}
