import { JSONMESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchJsonMessagesAction as actions } from '.';

export function* fetchJsonMessagesSaga(action) {
  try {
    const jsonMessages = yield call(
      request.get,
      JSONMESSAGE_ENDPOINTS.json_messages,
    );
    yield put(actions.fetchJsonMessageSuccess(jsonMessages));
  } catch (error) {
    console.log(error);
  }
}

export function* sendJsonMessagesSaga(action) {
  try {
    const sendingResponse = yield call(
      request.post,
      JSONMESSAGE_ENDPOINTS.send_json_message + `/${action.payload.id}`,
    );
    yield put(actions.sendMessageSuccess(sendingResponse));
  } catch (error) {
    console.log(error);
  }
}

export function* JsonMessagesRootState() {
  yield all([
    takeLatest(actions.requestFetchJsonMessages.type, fetchJsonMessagesSaga),
    takeLatest(actions.requestSendMessage.type, sendJsonMessagesSaga),
  ]);
}
