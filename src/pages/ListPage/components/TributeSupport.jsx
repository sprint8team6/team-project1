import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import { getDonations } from '@apis/idolApi';
import LeftArrow from '@assets/svg/btn_pagination_arrow_left.svg';
import RightArrow from '@assets/svg/btn_pagination_arrow_right.svg';
import IdolCard from './IdolCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TributeSupport() {
  const [idolDonations, setIdolDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // swiper 반응형 지정
  const SWIPER_BREAKPOINTS = {
    745: {
      // 745 이상 적용(pc버전)
      slidesPerView: 4,
      spaceBetween: 24,
    },
    376: {
      // 376 이상 적용(tablet버전)
      slidesPerView: 2.4,
      spaceBetween: 16,
    },
    0: {
      // 0 이상 적용(moblie버전)
      slidesPerView: 2.1,
      spaceBetween: 8,
    },
  };

  // swiper 화살표 버튼 지정
  const SWIPER_NAVIGATION = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };

  // swiper 자동 재생
  const SWIPER_AUTOPLAY = {
    delay: 4000, // 4초마다 자동 재생
    disableOnInteraction: false, // 사용자가 슬라이더를 변경해도 자동재생 유지
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { list } = await getDonations({
          pageSize: 100,
          cursor: 0,
          priorityIdolIds: 1,
        });
        setIdolDonations(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    handleLoad();
  }, []);

  // 로딩중
  if (loading) {
    return (
      <MyCreditWrap>
        <ListPageSubTitle>
          <h2>후원을 기다리는 조공</h2>
        </ListPageSubTitle>
        <IdolCardBox>
          <IdolCard />
          <IdolCard />
          <IdolCard />
          <IdolCard />
        </IdolCardBox>
      </MyCreditWrap>
    );
  }

  return (
    <MyCreditWrap>
      <ListPageSubTitle>
        <h2>후원을 기다리는 조공</h2>
      </ListPageSubTitle>
      <IdolTributeList>
        <ArrowButton className="swiper-button-prev" type="button">
          <img src={LeftArrow} alt="왼쪽 화살표 이미지" />
        </ArrowButton>
        <Swiper
          breakpoints={SWIPER_BREAKPOINTS}
          autoplay={SWIPER_AUTOPLAY}
          modules={[Navigation, Autoplay]}
          navigation={SWIPER_NAVIGATION}
        >
          {idolDonations.map((donation) => {
            return (
              <SwiperSlide key={donation.id}>
                <IdolCard donation={donation} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ArrowButton className="swiper-button-next" type="button">
          <img src={RightArrow} alt="오른쪽 화살표 이미지" />
        </ArrowButton>
      </IdolTributeList>
    </MyCreditWrap>
  );
}

const MyCreditWrap = styled.section`
  margin-top: 50px;
  margin-bottom: 80px;
  color: #ffffff;

  @media screen and (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

const ListPageSubTitle = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1340px;
  padding: 0 20px;
  margin: 0 auto;

  & > .swiper {
    max-width: 1200px;
  }
`;

const ArrowButton = styled.button`
  opacity: 0.7;
  &.swiper-button-disabled {
    display: none;
  }

  @media screen and (max-width: 744px) {
    display: none;
  }

  &::after {
    display: none;
  }
`;

const IdolCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: 744px) {
    gap: 16px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 375px) {
    gap: 8px;
  }
`;
