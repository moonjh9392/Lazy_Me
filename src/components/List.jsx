import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDeleteLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fetchDelete, fetchPatch } from '../util/api';
import { useEffect, useState } from 'react';

const url = 'http://localhost:3001/todoList/';
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
  const [checkOver, setCheckOver] = useState(false);
  const [deleteOver, setDeleteOver] = useState(false);
  const [saveOver, setOver] = useState(false);

  const [check, setCheck] = useState(content.check ? true : false);
  const [memo, setMemo] = useState(content.memo);

  const id = content.id;
  const data = { check, memo };

  const handleCheckClick = () => {
    setCheck(!check);
  };

  useEffect(() => {
    fetchPatch(url, id, data);
  }, [check]);

  const handleDeleteClick = () => {
    fetchDelete(url, id);
  };
  const handleSaveClick = () => {
    fetchPatch(url, id, data);
  };
  const MemoChange = (e) => {
    setMemo(e.target.value);
  };
  return (
    <ListStyle>
      <CheckBox>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color={check ? 'green' : checkOver ? 'green' : 'gray'}
          onMouseOver={() => {
            setCheckOver(true);
          }}
          onMouseLeave={() => {
            setCheckOver(false);
          }}
          onClick={handleCheckClick}
        />
      </CheckBox>

      <ContentBox>
        {content.title}
        <textarea value={memo} placeholder="메모 입력 후 저장을 눌러주세요." onChange={MemoChange} />
      </ContentBox>
      <DeleteBox>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          size="2x"
          color={deleteOver ? 'pink' : 'gray'}
          onMouseOver={() => {
            setDeleteOver(true);
          }}
          onMouseLeave={() => {
            setDeleteOver(false);
          }}
          onClick={handleDeleteClick}
        />
        <FontAwesomeIcon
          icon={faDownload}
          size="2x"
          color={saveOver ? 'skyblue' : 'gray'}
          onMouseOver={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
          onClick={handleSaveClick}
        />
      </DeleteBox>
    </ListStyle>
  );
}
