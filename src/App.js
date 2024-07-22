import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '@pages/LandingPage/LandingPage';
import MyPage from '@pages/MyPage/MyPage';
import ListPage from '@pages/ListPage/ListPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
