import styled from 'styled-components';
import Button from '@components/Button';
import IdolImg from '@assets/fandomK-img/fandomK-img6.png';
import defaultImg from '@assets/png/alt_image.png';
import CreditIcon from '@assets/svg/ic_credit.svg';
import { useState } from 'react';

export default function IdolCard() {
  const [idolStatus, setIdolStatus] = useState({
    imgUrl: IdolImg,
    tributeTxt: '강남역 광고',
    tributeInfo: '뉴진스 민지 지하철 광고',
    tributeCredit: 6000,
    tributeDate: 5,
  });
  return (
    <IdolCardWrap>
      <IdolCardImg>
        <img
          src={idolStatus.imgUrl ? idolStatus.imgUrl : defaultImg}
          alt="아이돌 이미지"
        />
        <Button>후원하기</Button>
      </IdolCardImg>
      <IdolCardTxt>
        <span>{idolStatus.tributeTxt}</span>
        <p>{idolStatus.tributeInfo}</p>
        <div>
          <IdolCardCredit>
            <div>
              <img src={CreditIcon} alt="크레딧 아이콘" />
              <span>{idolStatus.tributeCredit.toLocaleString()}</span>
            </div>
            <span>{idolStatus.tributeDate}일 남음</span>
          </IdolCardCredit>
          <IdolCardCreditGauge />
        </div>
      </IdolCardTxt>
    </IdolCardWrap>
  );
}

const IdolCardWrap = styled.div`
  width: 100%;
  max-width: 280px;

  @media screen and (max-width: 744px) {
    min-width: 280px;
  }

  @media screen and (max-width: 375px) {
    min-width: 160px;
    max-width: 160px;
  }
`;

const IdolCardImg = styled.div`
  position: relative;
  width: 100%;
  max-height: 290px;
  overflow: hidden;
  margin-bottom: 10px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    z-index: 1;
  }

  & > img {
    position: relative;
    width: 100%;
  }

  & > button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    width: 90%;
    max-width: 235px;
    z-index: 2;

    @media screen and (max-width: 375px) {
      height: 30px;
    }
  }
`;

const IdolCardTxt = styled.div`
  & > span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.6);

    @media screen and (max-width: 375px) {
      font-size: 1.2rem;
    }
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 24px;
    color: var(--wthie);

    @media screen and (max-width: 375px) {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`;

const IdolCardCredit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;

  & span {
    font-size: 1.2rem;
    font-weight: 400;
  }

  & > div {
    display: flex;
    align-items: center;

    & > span {
      color: var(--brand-coral);
    }
  }
`;

const IdolCardCreditGauge = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: var(--white);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    content: '';
    background-color: var(--brand-coral);
  }
`;
