import { useState } from 'react';
import styled from 'styled-components';

export default function TodoList(params) {
  const [AddList, setAddList] = useState(null);
  const TodoListStyle = styled.div``;
  const AddInput = styled.input``;
  return (
    <TodoListStyle>
      <AddInput />
      <button />
    </TodoListStyle>
  );
}
