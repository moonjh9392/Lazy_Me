import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import Main from '../components/Main';
import ResetStyle from '../styles/Reset';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
