import { useFetch } from '../util/api';
import styled from 'styled-components';
import Loading from './common/Loading';
import List from './List';

// real: https://my-json-server.typicode.com/moonjh9392/Lazy_Me_DB/todoList/
// dev: http://localhost:3001/todoList/
const url = `https://my-json-server.typicode.com/moonjh9392/Lazy_Me_DB/todoList/`;

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export default function TodoList(params) {
  //api 사용
  // const [todoList, isPending, error] = useFetch(url);

  //localstorage 사용
  let todoList = localStorage.getItem('todoList');
  if (todoList) {
    todoList = JSON.parse(todoList);
  }
  return (
    <TodoListStyle>
      {todoList ? (
        todoList.map((ele) => {
          return <List key={ele.id} content={ele} />;
        })
      ) : (
        <Loading />
      )}
    </TodoListStyle>
  );
}
