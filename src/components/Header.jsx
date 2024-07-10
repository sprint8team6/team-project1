import styled from 'styled-components';
import logoImg from '../assets/svg/logo_big.svg';
import profileImg from '../assets/svg/profile.svg';
import './reset.css';

const Header = () => {
  const HeaderWrap = styled.header`
    width: 100%;
    background-color: black;

    @media screen and (max-width: 1023px) {
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

    @media screen and (max-width: 767px) {
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

    @media screen and (max-width: 1023px) {
      max-width: 120px;
    }

    @media screen and (max-width: 767px) {
      max-width: 108px;
    }
  `;

  return (
    <HeaderWrap>
      <HeaderBox>
        <HeaderProfile className="header-dummy"></HeaderProfile>

        <HeaderLogo src={logoImg} alt="로고 이미지" />

        <HeaderProfile className="header-profile">
          <img src={profileImg} alt="프로필 이미지" />
        </HeaderProfile>
      </HeaderBox>
    </HeaderWrap>
  );
};

export default Header;
