import styled from 'styled-components';
import Button from '@components/Button';
import IdolImg from '@assets/fandomK-img/fandomK-img6.png';
import CreditIcon from '@assets/svg/ic_credit.svg';

export default function IdolCard() {
  return (
    <IdolCardWrap>
      <IdolCardImg>
        <img src={IdolImg} alt="아이돌 이미지" />
        <Button>후원하기</Button>
      </IdolCardImg>
      <IdolCardTxt>
        <span>강남역 로고</span>
        <p>뉴진스 민지 지하철 광고</p>
        <div>
          <IdolCardCredit>
            <div>
              <img src={CreditIcon} alt="크레딧 아이콘" />
              <span>6,000</span>
            </div>
            <span>5일 남음</span>
          </IdolCardCredit>
          <IdolCardCreditGauge />
        </div>
      </IdolCardTxt>
    </IdolCardWrap>
  );
}

const IdolCardWrap = styled.div`
  max-width: 280px;
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
    max-width: 255px;
    z-index: 2;
  }
`;

const IdolCardTxt = styled.div`
  & > span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.6);
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 24px;
    color: var(--wthie);
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
