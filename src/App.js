import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '@pages/LandingPage/LandingPage';
import MyPage from '@pages/MyPage/MyPage';
import ListPage from '@pages/ListPage/ListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
