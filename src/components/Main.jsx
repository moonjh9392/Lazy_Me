import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './common/Header';
import TodoList from './TodoList';

const MainStyle = styled.div`
  overflow-y: scroll;

  .menu {
    position: relative;
    margin: 0 auto;
    max-width: 718px;

    @media screen and (max-width: 768px) {
      padding: 128px 24px;
      top: -128px;
    }
  }

  .background {
    background-color: whitesmoke;
    padding-bottom: 80px;
    padding-top: 40px;
    height: 100vh;
  }
`;

const Main = () => {
  return (
    <MainStyle>
      <Header />
      <div className="background">
        <div className="menu">
          {/* <Outlet /> */}
          <TodoList />
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;
