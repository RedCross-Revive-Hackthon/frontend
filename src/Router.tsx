import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
