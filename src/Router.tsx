import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barcode from './pages/Barcode';
import Community from './pages/Community';
import Event from './pages/Event';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Volunteer from './pages/Volunteer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/barcode" element={<Barcode />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/volunteer" element={<Volunteer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
