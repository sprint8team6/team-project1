import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import CreditImage from '@assets/svg/ic_credit.svg';

export default function MyCredit({ openModal }) {
  // State
  const [myCredit, setMyCredit] = useState(3600);

  return (
    <MyCreditWrap>
      <MyCreditBox>
        <MyCreditBoxInformation>
          <h2>내 크레딧</h2>
          <MyCreditNumber>
            <img src={CreditImage} alt="크레딧 이미지" />
            <span>{myCredit.toLocaleString()}</span>
          </MyCreditNumber>
        </MyCreditBoxInformation>

        <CreditChargeButton>
          <button type="button" onClick={() => openModal('ChargeModal')}>
            충전하기
          </button>
        </CreditChargeButton>
      </MyCreditBox>
    </MyCreditWrap>
  );
}

MyCredit.propTypes = {
  openModal: PropTypes.func.isRequired,
};

const MyCreditWrap = styled.section`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media screen and (max-width: 744px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

const MyCreditBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 75px;
  border-radius: 8px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  color: #ffffff;

  @media screen and (max-width: 744px) {
    padding: 30px 40px;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;
  }
`;

const MyCreditBoxInformation = styled.div`
  & > h2 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 14px;
    color: rgba(255, 255, 255, 0.6);

    @media screen and (max-width: 375px) {
      font-size: 1.4rem;
    }
  }
`;

const MyCreditNumber = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 5px;
  }

  & > span {
    font-size: 2.4rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.87);

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }
`;

const CreditChargeButton = styled.div`
  & > button {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--brand-coral);
  }
`;
