import { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import '../DropArea/design.css';
import { useFileUploadSlice } from './slice';
import {
  selectErrorMessage,
  selectIsError,
  selectIsSuccess,
} from './slice/selectors';

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};
let style;

interface props {
  passFileName: any;
  passIsSuccess: any;
  passIsError: any;
  passErrorMessage: any;
}
export function MyDropzone(props: props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: onDrop,
  });
  const { actions } = useFileUploadSlice();
  const dispatch = useDispatch();

  function onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      props.passFileName(file.name);
      return dispatch(actions.requestUploadFile({ files: file }));
    });
  }
  const isSuccess = useSelector(selectIsSuccess);
  props.passIsSuccess(isSuccess);

  const isError = useSelector(selectIsError);
  props.passIsError(isError);

  const errorMessage = useSelector(selectErrorMessage);
  props.passErrorMessage(errorMessage);

  style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <>
      <Div className="container mr-5 ml-5">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div className="text-center">
            <FaFileUpload size={60} />
          </div>
          <h3 className="text-xl-center mt-5">Drag and Drop to Upload File</h3>
          <h3 className="text-xl-center mt-2">OR</h3>
          <Button variant="secondary w-100 mt-2" size="lg" className="w-25">
            Browse File
          </Button>
        </div>
      </Div>
      <h5
        className="row ml-5 mt-3 text-center"
        style={{ fontWeight: 'lighter' }}
      >
        Accepted format: .txt*
      </h5>
    </>
  );
}

const Div = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 1900px;
  background-color: #e9e8e8;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='1' stroke-dasharray='6' stroke-dashoffset='1' stroke-linecap='square'/%3e%3c/svg%3e");
`;
