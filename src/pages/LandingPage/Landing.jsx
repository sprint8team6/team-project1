import styled from 'styled-components';
import logo from '@assets/svg/logo.svg';
import backgroundImg from '@assets/LandingPage/image 14.png';
import topDesign from '@assets/svg/Img_top.svg';
import landingBgImg1 from '@assets/LandingPage/fandomK-img13.svg';
import landingBgImg2 from '@assets/LandingPage/fandomK-img10.svg';
import landingBgImg3 from '@assets/LandingPage/fandomK-img14.svg';
import landingImg1 from '@assets/LandingPage/Home-1.png';
import landingImg2 from '@assets/LandingPage/Home-2.png';
import landingImg3 from '@assets/LandingPage/Home-3.png';

function Landing() {
  return (
    <div>
      <>
        <Main>
          <TopDesignImg src={topDesign} alt="디자인" />
          <LogoWrap>
            <div>
              내가 좋아하는 아이돌을
              <br /> 가장 <span>쉽게 덕질</span> 하는 방법
            </div>
            <img src={logo} alt="로고 이미지" />
          </LogoWrap>
          <BackgroundImg src={backgroundImg} alt="배경 이미지" />
          <Button>지금 시작하기</Button>
        </Main>
        <BottomContainer>
          <LandingSection>
            <LandingBackgroundImg />
            <LandingWrap>
              <span>후원하기</span>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해 보세요
              <img src={landingImg1} alt="랜딩 이미지1" />
            </LandingWrap>
          </LandingSection>
          <LandingSection>
            <LandingWrap>
              <span>이달의 아티스트</span>
              내 아티스트에게 1등의
              <br />
              영예를 선물하세요
              <img src={landingImg2} alt="랜딩 이미지2" />
            </LandingWrap>
          </LandingSection>
          <LandingSection>
            <LandingWrap>
              <span>나만의 아티스트</span>
              좋아하는 아티스트들의
              <br />
              소식을 모아보세요
              <img src={landingImg3} alt="랜딩 이미지3" />
            </LandingWrap>
          </LandingSection>
          <Rectangle />
        </BottomContainer>
      </>
    </div>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1080px;
  background-color: var(--dark-black);
  position: relative;
`;

const TopDesignImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const BackgroundImg = styled.img`
  opacity: 0.7;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

const LogoWrap = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 26px;
  font-weight: 700;
  font-size: 26px;
  color: var(--white);
  z-index: 1;

  & span {
    color: var(--brand-coral);
  }

  & img {
    width: 509px;
  }
`;

const Button = styled.button`
  margin-bottom: 140px;
  width: 477px;
  height: 48px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  color: var(--white);
  background: linear-gradient(90deg, var(--brand-coral), var(--brand-pink));
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3600px;
  background-color: var(--dark-black);
  position: relative;
`;

const Rectangle = styled.div`
  width: 187px;
  height: 3080px;
  background-color: var(--rectangle-blue);
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LandingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1200px;
  position: relative;
  z-index: 1;
`;

const LandingBackgroundImg = styled.div`
  width: 1200px;
  height: 1200px;
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 14, 0),
      rgba(2, 0, 14, 0.18),
      rgba(2, 0, 14, 0.5) 5%,
      rgba(2, 0, 14, 1) 60%
    ),
    url(${landingBgImg1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
`;

const LandingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  font-weight: 700;
  font-size: 24px;
  color: var(--white);
  z-index: 1;

  & span {
    font-weight: 500;
    font-size: 16px;
    color: var(--yellow);
  }

  & img {
    margin-top: 48px;
    width: 320px;
  }
`;

export default Landing;
