import { MESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchMessagesActions as actions } from '.';

export function* fetchMessagesSaga(action) {
  try {
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

export function* fetchMessagesPerTypeSaga(action) {
  try {
    const messagesPerType = yield call(
      request.get,
      MESSAGE_ENDPOINTS.messages + `/${action.payload.messageType}`,
    );
    yield put(actions.FetchMessagesSuccessPerType(messagesPerType));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMessagesRootState() {
  yield all([
    takeLatest(actions.requestFetchMessages.type, fetchMessagesSaga),
    takeLatest(
      actions.requestFetchMessagesPerType.type,
      fetchMessagesPerTypeSaga,
    ),
  ]);
}
