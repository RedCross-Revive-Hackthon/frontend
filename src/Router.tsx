import { BrowserRouter, Route, Routes } from 'react-router-dom';
import main from './pages/main';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>메인페이지를 넣어주세요</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
