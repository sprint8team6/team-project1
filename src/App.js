import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '@pages/LandingPage/Landing.jsx';
import MyPage from '@pages/MyPage/MyPage.jsx';
import MyCredit from '@pages/ListPage/MyCredit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/list" element={<MyCredit />} />
        {/* <Route path="/list" element={<ListPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
