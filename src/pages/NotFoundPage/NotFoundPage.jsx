import Header from '@components/Header';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <NotFoundWrap>
        <h2>존재하지 않는 페이지 입니다.</h2>
        <p>주소를 다시 한번 확인해주세요.</p>
        <Link to="/">메인 페이지로 가기</Link>
      </NotFoundWrap>
    </>
  );
}

const NotFoundWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1240px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 0 20px;

  h2 {
    font-size: 60px;
    text-align: center;
    line-height: 1.5;

    @media screen and (max-width: 744px) {
      font-size: 34px;
    }

    @media screen and (max-width: 375px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 40px;
    margin: 30px 0;

    @media screen and (max-width: 744px) {
      font-size: 24px;
    }

    @media screen and (max-width: 375px) {
      font-size: 20px;
      margin: 20px 0;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    max-width: 240px;
    height: 52px;
    line-height: 54px;
    text-align: center;
    border-radius: 3px;
    background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);
    color: var(--white);
    font-size: 18px;
    font-weight: 700;

    @media screen and (max-width: 744px) {
      max-width: 200px;
      height: 42px;
      line-height: 44px;
      font-size: 16px;
    }
  }
`;
