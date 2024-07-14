import React from 'react';
import styled from 'styled-components';
import IdolCard from './IdolCard';
import LeftArrow from '@assets/svg/btn_pagination_arrow_left.svg';
import RightArrow from '@assets/svg/btn_pagination_arrow_right.svg';

export default function TributeSupport() {
  return (
    <>
      <MyCreditWrap>
        <ListPageSubTitle>
          <h2>후원을 기다리는 조공</h2>
        </ListPageSubTitle>
        <IdolTributeList>
          <button type="button">
            <img src={LeftArrow} alt="왼쪽 화살표 이미지" />
          </button>
          <IdolCardBox>
            <IdolCard />
            <IdolCard />
            <IdolCard />
            <IdolCard />
          </IdolCardBox>
          <button type="button">
            <img src={RightArrow} alt="오른쪽 화살표 이미지" />
          </button>
        </IdolTributeList>
      </MyCreditWrap>
    </>
  );
}

const MyCreditWrap = styled.section`
  margin-top: 50px;
  margin-bottom: 80px;
  padding: 0 20px;
  color: #ffffff;

  @media screen and (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

const ListPageSubTitle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 32px;

  @media screen and (max-width: 744px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 16px;
  }

  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--white);

    @media screen and (max-width: 744px) {
      font-size: 2rem;
      padding: 0;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.6rem;
    }
  }
`;

const IdolTributeList = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;

  @media screen and (max-width: 744px) {
    overflow-x: scroll;
    padding-bottom: 10px;
  }

  & > button {
    @media screen and (max-width: 744px) {
      display: none;
    }
  }
`;

const IdolCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 744px) {
    gap: 16px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 375px) {
    gap: 8px;
  }
`;
