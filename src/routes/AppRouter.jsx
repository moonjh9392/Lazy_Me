import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../components/main';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
