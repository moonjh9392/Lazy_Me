import { useFetch } from '../util/api';
import styled from 'styled-components';
import Loading from './common/Loading';
import List from './List';

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function TodoList(params) {
  const [todoList, isPending, error] = useFetch('http://localhost:3001/todoList/');
  return (
    <TodoListStyle>
      {isPending ? (
        <Loading />
      ) : (
        todoList.map((ele) => {
          return <List key={ele.id} content={ele} />;
        })
      )}
    </TodoListStyle>
  );
}
