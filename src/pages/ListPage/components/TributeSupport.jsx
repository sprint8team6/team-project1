import { useEffect, useState } from 'react';
import styled from 'styled-components';
// swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// api
import { getDonations } from '@apis/idolApi';
// spinner
import LoadingSpinner from '@components/LoadingSpinner';
// component
import LeftArrow from '@assets/svg/btn_pagination_arrow_left.svg';
import RightArrow from '@assets/svg/btn_pagination_arrow_right.svg';
import Button from '@components/Button';
import IdolCard from './IdolCard';

export default function TributeSupport() {
  const [idolDonations, setIdolDonations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [dataReload, setDataReload] = useState(true);

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
      // 0 이상 적용(mobile버전)
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
    delay: 6000, // 6초마다 자동 재생
    disableOnInteraction: false, // 사용자가 슬라이더를 변경해도 자동재생 유지
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { list } = await getDonations({
          pageSize: 12,
          cursor: 0,
          // priorityIdolIds: 1,
        });
        setIdolDonations(list);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    handleLoad();
  }, [dataReload]);

  const handleClickDataReload = () => {
    setDataReload(!dataReload);
  };

  if (isLoading) {
    return (
      <LoadingSpinner
        isLoading={isLoading}
        color="var(--brand-coral)"
        size={20}
        width="100%"
        height="100%"
        minLoadTime={1000}
      />
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
          {idolDonations.length > 0 ? (
            idolDonations.map((donation) => {
              return (
                <SwiperSlide key={donation.id}>
                  <IdolCard donation={donation} />
                </SwiperSlide>
              );
            })
          ) : (
            <ErrorMessage>
              데이터를 불러오는데 실패했습니다.
              <br />
              <Button
                type="button"
                onClick={() => {
                  handleClickDataReload();
                }}
              >
                데이터 다시 불러오기
              </Button>
            </ErrorMessage>
          )}
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

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: var(--brand-coral);

  button {
    max-width: 200px;
    margin-top: 20px;
  }

  @media screen and (max-width: 744px) {
    font-size: 22px;
  }
`;
