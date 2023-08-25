import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Barcode from './pages/Barcode';
import Certification from './pages/Certification';
import Community from './pages/Community';
import DetailPostExample from './pages/DetailPostExample';
import Event from './pages/Event';
import Final from './pages/Final';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Volunteer from './pages/Volunteer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/community/give/1" element={<DetailPostExample />}></Route>
        <Route path="/barcode" element={<Barcode />}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/certification" element={<Certification></Certification>}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/volunteer" element={<Volunteer />}></Route>
        <Route path="/final" element={<Final />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
