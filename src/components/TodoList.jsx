import { useFetch } from '../util/api';
import styled from 'styled-components';
import Loading from './common/Loading';

const url = 'http://localhost:3001/todoList/';

export default function TodoList(params) {
  const [todoList, isPending, error] = useFetch('http://localhost:3001/todoList/');
  console.log(todoList);
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        todoList.map((ele) => {
          return <div key={ele.id}>{ele.title}</div>;
        })
      )}
    </>
  );
}
