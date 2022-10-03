import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import Main from '../components/Main';
import GlobalStyle from '../styles/GlobalStyle';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
