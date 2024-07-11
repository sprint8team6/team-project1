import CreditImg from '@assets/svg/ic_credit.svg';
import Header from '@components/Header';
import styled from 'styled-components';
import TributeSupport from '@pages/ListPage/TributeSupport';

export default function MyCredit() {
  return (
    <>
      <MyCreditWrap>
        <MyCreditBox>
          <MyCreditBoxInfo>
            <h2>내 크레딧</h2>
            <MyCreditNum>
              <img src={CreditImg} alt="크레딧 이미지" />
              <span>36,000</span>
            </MyCreditNum>
          </MyCreditBoxInfo>

          <CreditChargeBtn>
            <button type="butotn">충전하기</button>
          </CreditChargeBtn>
        </MyCreditBox>
      </MyCreditWrap>
    </>
  );
}

const MyCreditWrap = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MyCreditBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 75px;
  border-radius: 8px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  color: #ffffff;
`;

const MyCreditBoxInfo = styled.div`
  & > h2 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const MyCreditNum = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 5px;
  }

  & > span {
    font-size: 2.4rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.87);
  }
`;

const CreditChargeBtn = styled.div`
  & > button {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--brand-coral);
  }
`;
