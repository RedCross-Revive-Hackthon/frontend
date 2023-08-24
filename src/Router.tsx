import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barcode from './pages/Barcode';
import Certification from './pages/Certification';
import Home from './pages/Home';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/barcode" element={<Barcode />}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/certification" element={<Certification></Certification>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
