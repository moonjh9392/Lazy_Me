import { useState } from 'react';
import styled from 'styled-components';

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

  const WriteButton = styled.button``;
  return (
    <TodoListStyle>
      <input placeholder="할 일을 입력하세요." />
      <WriteButton />
    </TodoListStyle>
  );
}
