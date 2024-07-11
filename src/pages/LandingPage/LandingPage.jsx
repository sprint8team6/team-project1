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
import Button from '@components/Button';

function LandingPage() {
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
          <ButtonWrap>
            <Button>지금 시작하기</Button>
          </ButtonWrap>
        </Main>
        <BottomContainer>
          <LandingSection>
            <LandingWrap>
              <LandingTitleWrap>
                <span>후원하기</span>
                좋아하는 아이돌에게
                <br />
                쉽게 조공해 보세요
              </LandingTitleWrap>
              <img src={landingImg1} alt="랜딩 이미지1" />
            </LandingWrap>
          </LandingSection>
          <LandingSection>
            <LandingWrap>
              <LandingTitleWrap alignRight>
                <span>이달의 아티스트</span>
                내 아티스트에게 1등의
                <br />
                영예를 선물하세요
              </LandingTitleWrap>
              <img src={landingImg2} alt="랜딩 이미지2" />
            </LandingWrap>
          </LandingSection>
          <LandingSection>
            <LandingWrap>
              <LandingTitleWrap>
                <span>나만의 아티스트</span>
                좋아하는 아티스트들의
                <br />
                소식을 모아보세요
              </LandingTitleWrap>
              <img src={landingImg3} alt="랜딩 이미지3" />
            </LandingWrap>
          </LandingSection>
          <LandingBackgroundImg1 />
          <LandingBackgroundImg2 />
          <LandingBackgroundImg3 />
          <Rectangle />
        </BottomContainer>
      </>
    </div>
  );
}

export default LandingPage;

const Main = styled.div`
  padding: 140px 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1080px;
  background-color: var(--dark-black);
  position: relative;

  @media (max-width: 744px) {
    padding: 115px 0 125px;
    height: 1200px;
  }

  @media (max-width: 375px) {
    padding: 100px 0;
    height: 812px;
  }
`;

const TopDesignImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 744px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: block;
  }
`;

const BackgroundImg = styled.img`
  width: 932px;
  opacity: 0.7;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  @media (max-width: 744px) {
    width: 714px;
    top: 50%;
  }

  @media (max-width: 375px) {
    width: 394px;
    top: 52%;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 26px;
  font-weight: 700;
  font-size: 26px;
  color: var(--white);
  z-index: 1;

  @media (max-width: 744px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-weight: 400;
  }

  & span {
    color: var(--brand-coral);
  }

  & img {
    width: 509px;

    @media (max-width: 744px) {
      width: 325px;
    }

    @media (max-width: 375px) {
      width: 237px;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 477px;

  @media (max-width: 375px) {
    width: 230px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 3600px;
  background-color: var(--dark-black);
  position: relative;
  z-index: 0;

  @media (max-width: 744px) {
    height: 2232px;
  }

  @media (max-width: 375px) {
    height: 2436px;
  }
`;

const Rectangle = styled.div`
  width: 187px;
  height: 3080px;
  background-color: var(--rectangle-blue);
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 744px) {
    width: 117px;
    height: 1860px;
  }

  @media (max-width: 375px) {
    height: 2100px;
  }
`;

const LandingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1200px;
  z-index: 2;

  @media (max-width: 744px) {
    height: 744px;
  }

  @media (max-width: 375px) {
    height: 812px;
  }
`;

const LandingBackgroundImg1 = styled.div`
  width: 1200px;
  height: 1200px;
  background: radial-gradient(
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
  top: 0px;
  z-index: 1;

  @media (max-width: 744px) {
    width: 744px;
    height: 744px;
  }

  @media (max-width: 375px) {
    top: 32px;
  }
`;

const LandingBackgroundImg2 = styled.div`
  width: 1200px;
  height: 1200px;
  background: radial-gradient(
      circle,
      rgba(2, 0, 14, 0),
      rgba(2, 0, 14, 0.18),
      rgba(2, 0, 14, 0.5) 5%,
      rgba(2, 0, 14, 1) 60%
    ),
    url(${landingBgImg2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 1201px;
  z-index: 1;

  @media (max-width: 744px) {
    width: 744px;
    height: 744px;
    top: 745px;
  }

  @media (max-width: 375px) {
    top: 845px;
  }
`;

const LandingBackgroundImg3 = styled.div`
  width: 1200px;
  height: 1200px;
  background: radial-gradient(
      circle,
      rgba(2, 0, 14, 0),
      rgba(2, 0, 14, 0.18),
      rgba(2, 0, 14, 0.5) 5%,
      rgba(2, 0, 14, 1) 60%
    ),
    url(${landingBgImg3});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 2401px;
  z-index: 1;

  @media (max-width: 744px) {
    width: 744px;
    height: 744px;
    top: 1489px;
  }

  @media (max-width: 375px) {
    top: 1656px;
  }
`;

const LandingTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  width: 311px;
  height: 93px;
  font-weight: 700;
  font-size: 24px;
  color: var(--white);

  @media (max-width: 744px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    ${({ alignRight }) =>
      alignRight
        ? `align-items: end; text-align: right;`
        : `align-items: start; text-align: left;`}
    height: 73px;
  }

  & span {
    font-weight: 500;
    font-size: 16px;
    color: var(--yellow);

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;

const LandingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  z-index: 1;

  & img {
    margin-top: 48px;
    width: 320px;

    @media (max-width: 744px) {
      width: 200px;
    }

    @media (max-width: 375px) {
      width: 240px;
    }
  }
`;
