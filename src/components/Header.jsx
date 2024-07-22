import styled from 'styled-components';
import logoImage from '@assets/svg/logo_big.svg';
import profileImage from '@assets/svg/profile.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderBox>
        <HeaderProfile />

        <Link to="/list">
          <HeaderLogo src={logoImage} alt="로고 이미지" />
        </Link>

        <HeaderProfile>
          <Link to="/mypage">
            <img src={profileImage} alt="프로필 이미지" />
          </Link>
        </HeaderProfile>
      </HeaderBox>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100%;
  background-color: black;

  @media screen and (max-width: 744px) {
    padding: 0 24px;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media screen and (max-width: 375px) {
    height: 44px;
  }
`;

const HeaderProfile = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLogo = styled.img`
  max-width: 167px;
  cursor: pointer;

  @media screen and (max-width: 744px) {
    max-width: 120px;
  }

  @media screen and (max-width: 375px) {
    max-width: 108px;
  }
`;
