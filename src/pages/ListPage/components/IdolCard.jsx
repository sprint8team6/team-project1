import { useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import styled from 'styled-components';
import Button from '@components/Button';
import IdolImage from '@assets/fandomK-img/fandomK-img6.png';
import defaultImage from '@assets/png/alt_image.png';
import CreditIcon from '@assets/svg/ic_credit.svg';

export default function IdolCard() {
  // State
  const [idolStatus, setIdolStatus] = useState({
    imgUrl: IdolImage,
    tributeTxt: '강남역 광고',
    tributeInfo: '뉴진스 민지 지하철 광고',
    tributeCredit: 6000,
    tributeDate: 5,
  });

  // Context
  const { openModal } = useModalContext();

  const handleTributeButtonClick = () => {
    openModal('DonationModal', idolStatus);
  };

  return (
    <IdolCardWrap>
      <IdolCardImage>
        <img
          src={idolStatus.imgUrl ? idolStatus.imgUrl : defaultImage}
          alt="아이돌 이미지"
        />
        <Button onClick={handleTributeButtonClick}>후원하기</Button>
      </IdolCardImage>
      <IdolCardText>
        <span>{idolStatus?.tributeTxt ?? '임시 서브 타이틀'}</span>
        <p>{idolStatus?.tributeInfo ?? '임시 메인 타이틀'}</p>
        <div>
          <IdolCardCredit>
            <div>
              <img src={CreditIcon} alt="크레딧 아이콘" />
              <span>{idolStatus?.tributeCredit.toLocaleString() ?? '0'}</span>
            </div>
            <span>{idolStatus?.tributeDate ?? '??'}일 남음</span>
          </IdolCardCredit>
          <IdolCardCreditGauge />
        </div>
      </IdolCardText>
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

const IdolCardImage = styled.div`
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
    bottom: 30px;
    transform: translateX(-50%);
    width: 90%;
    max-width: 235px;
    z-index: 2;

    @media screen and (max-width: 375px) {
      height: 30px;
    }
  }
`;

const IdolCardText = styled.div`
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
