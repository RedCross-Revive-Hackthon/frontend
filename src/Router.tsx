import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barcode from './pages/Barcode';
import Community from './pages/Community';
import DetailPostExample from './pages/DetailPostExample';
import Home from './pages/Home';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/community/give/1" element={<DetailPostExample />}></Route>
        <Route path="/barcode" element={<Barcode />}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
