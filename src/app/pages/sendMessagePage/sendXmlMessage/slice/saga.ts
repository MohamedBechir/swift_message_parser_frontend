import { XMLMESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchXmlMessagesAction as actions } from '.';

export function* fetchXmlMessagesSaga(action) {
  try {
    const XmlMessages = yield call(
      request.get,
      XMLMESSAGE_ENDPOINTS.xml_messages,
    );
    yield put(actions.fetchXmlMessageSuccess(XmlMessages));
  } catch (error) {
    console.log(error);
  }
}

export function* sendXmlMessagesSaga(action) {
  try {
    const sendingResponse = yield call(
      request.post,
      XMLMESSAGE_ENDPOINTS.send_xml_message + `/${action.payload.id}`,
    );
    yield put(actions.sendMessageSuccess(sendingResponse));
  } catch (error) {
    yield put(actions.sendMessageError(error));
  }
}

export function* XmlMessagesRootState() {
  yield all([
    takeLatest(actions.requestFetchXmlMessages.type, fetchXmlMessagesSaga),
    takeLatest(actions.requestSendMessage.type, sendXmlMessagesSaga),
  ]);
}
