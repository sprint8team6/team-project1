import React from 'react';
import { useModalContext } from '@contexts/ModalContext';
import CreditImg from '@assets/svg/ic_credit.svg';
import { useState } from 'react';
import styled from 'styled-components';

export default function MyCredit() {
  // State
  const [myCredit, setMyCredit] = useState(3600);
  const { modals, openModal, closeModal } = useModalContext();
  
  return (
    <>
      <MyCreditWrap>
        <MyCreditBox>
          <MyCreditBoxInfo>
            <h2>내 크레딧</h2>
            <MyCreditNum>
              <img src={CreditImg} alt="크레딧 이미지" />
              <span>{myCredit.toLocaleString()}</span>
            </MyCreditNum>
          </MyCreditBoxInfo>

          <CreditChargeBtn>
            <button type="button" onClick={() => openModal('ChargeModal')}>
              충전하기
            </button>
          </CreditChargeBtn>
        </MyCreditBox>
      </MyCreditWrap>
    </>
  );
}

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
    padding: 30px 65px;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;
  }
`;

const MyCreditBoxInfo = styled.div`
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

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }
`;

const CreditChargeBtn = styled.div`
  & > button {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--brand-coral);
  }
`;
