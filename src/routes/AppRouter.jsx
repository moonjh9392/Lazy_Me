import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import Main from '../components/Main';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
