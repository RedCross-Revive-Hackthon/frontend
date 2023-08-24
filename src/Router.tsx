import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
