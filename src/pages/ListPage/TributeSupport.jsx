import React from 'react';
import styled from 'styled-components';
import IdolCard from './IdolCard';
import LeftArrow from '@assets/svg/btn_pagination_arrow_left.svg';
import RightArrow from '@assets/svg/btn_pagination_arrow_right.svg';

export default function TributeSupport() {
  return (
    <>
      <MyCreditWrap Tribute>
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
  width: 100%;
  max-width: ${(props) => (props.Tribute ? '1400px' : '1200px')};
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: ${(props) => (props.Tribute ? '80px' : '50px')};
  padding: 0 20px;
  color: #ffffff;
`;

const ListPageSubTitle = styled.div`
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
    padding: 0 80px;
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

  @media screen and (max-width: 744px) {
    overflow-x: scroll;
  }

  & > button {
    @media screen and (max-width: 744px) {
      display: none;
    }
  }
`;

const IdolCardBox = styled.div`
  display: flex;
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
