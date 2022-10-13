import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export default function TodoList(params) {
  const [AddList, setAddList] = useState(null);
  const TodoListStyle = styled.div`
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
    }
  `;

  const ButtonStyle = styled.div`
    position: absolute;
    right: 30px;
    top: 10px;
  `;

  return (
    <TodoListStyle>
      <input placeholder="할 일을 입력하세요." />
      <ButtonStyle>
        <FontAwesomeIcon icon={faPencil} size="2x" color="gray" />
      </ButtonStyle>
    </TodoListStyle>
  );
}
