import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDeleteLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fetchDelete, fetchPatch } from '../util/api';

const ListStyle = styled.div`
  margin: 20px 0;
  background-color: white;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(231, 231, 234);
  display: flex;

  div {
    padding: 10px;
  }
`;
const CheckBox = styled.div`
  flex-grow: 0.5;
`;
const ContentBox = styled.div`
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: larger;
  textarea {
    border: none;
    border-radius: 4px;
    resize: none;
  }
`;
const DeleteBox = styled.div`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export default function List({ content }) {
  return (
    <ListStyle>
      <CheckBox>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
      </CheckBox>

      <ContentBox>
        {content.title}
        <textarea placeholder="메모 입력 후 저장을 눌러주세요." />
      </ContentBox>
      <DeleteBox>
        <FontAwesomeIcon icon={faDeleteLeft} size="2x" color="pink" />
        <FontAwesomeIcon icon={faDownload} size="2x" color="skyblue" />
      </DeleteBox>
    </ListStyle>
  );
}
