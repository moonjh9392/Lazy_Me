import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { fetchCreate } from '../util/api';

const WriteInputStyle = styled.div`
  border: 1px solid rgba(231, 231, 234);
  border-radius: 8px;
  height: 48px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 18px;
    border-radius: 8px;
    font-size: 18px;
    overflow: auto;
  }
`;

const ButtonStyle = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;
export default function WriteInput(params) {
  const [title, setTitle] = useState('');
  const [over, setOver] = useState(false);

  const handleChangeContnet = (event) => {
    setTitle(event.target.value);
  };

  const saveTodoContent = (e) => {
    e.preventDefault();
    const data = { title };
    fetchCreate('http://localhost:3001/todoList/', data);
    // setTitle('');
  };
  return (
    <WriteInputStyle>
      <input placeholder="할 일을 입력하세요." value={title} onChange={handleChangeContnet} />

      <ButtonStyle>
        <FontAwesomeIcon
          icon={faPencil}
          size="2x"
          color={over ? 'brown' : 'gray'}
          onMouseOver={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
          onClick={saveTodoContent}
        />
      </ButtonStyle>
    </WriteInputStyle>
  );
}
