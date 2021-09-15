import { FILE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { uploadFileActions as actions } from '.';

export function* uploadFileSaga(action) {
  try {
    const formData = new FormData();
    formData.append('file', action.payload.files);
    const uploadResponse = yield call(
      request.post,
      FILE_ENDPOINTS.upload_file,
      formData,
    );
    yield put(actions.uploadFileSuccess(uploadResponse));
  } catch (error) {
    console.log(error);
  }
}

export function* uploadFileRootState() {
  yield takeLatest(actions.requestUploadFile.type, uploadFileSaga);
}
