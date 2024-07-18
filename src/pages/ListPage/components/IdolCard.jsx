import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import styled from 'styled-components';
import Button from '@components/Button';
import defaultImage from '@assets/png/alt_image.png';
import CreditIcon from '@assets/svg/ic_credit.svg';

export default function IdolCard({ donation }) {
  // 데드라인 값 구하기
  const CREATED = new Date(donation?.createdAt);
  const DEADLINE = new Date(donation?.deadline);
  const TIME_DIFF = DEADLINE - CREATED;
  const DEADLINE_DAY = Math.ceil(TIME_DIFF / (1000 * 60 * 60 * 24));

  // State
  const [idolStatus, setIdolStatus] = useState({
    donationProfilePicture: donation
      ? donation.idol.profilePicture
      : defaultImage,
    donationSubtitle: donation ? donation.subtitle : '제목이 없습니다.',
    donationTitle: donation ? donation.title : '부제목이 없습니다.',
    donationReceivedDonation: donation ? donation.receivedDonations : 0,
    donationDeadLineDay: donation ? DEADLINE_DAY : '-',
  });

  // Context
  const { openModal } = useModalContext();

  const handleTributeButtonClick = () => {
    openModal('DonationModal', idolStatus);
  };

  return (
    <IdolCardWrap>
      <IdolCardImage>
        <Image profilePicture={idolStatus.donationProfilePicture} />
        <Button onClick={handleTributeButtonClick}>후원하기</Button>
      </IdolCardImage>
      <IdolCardText>
        <span>{idolStatus?.donationSubtitle ?? '임시 서브 타이틀'}</span>
        <p>{idolStatus?.donationTitle ?? '임시 메인 타이틀'}</p>
        <div>
          <IdolCardCredit>
            <div>
              <img src={CreditIcon} alt="크레딧 아이콘" />
              <span>
                {idolStatus?.donationReceivedDonation.toLocaleString() ?? '0'}
              </span>
            </div>
            <span>{idolStatus?.donationDeadLineDay ?? '??'}일 남음</span>
          </IdolCardCredit>
          <IdolCardCreditGauge />
        </div>
      </IdolCardText>
    </IdolCardWrap>
  );
}

IdolCard.propTypes = {
  donation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    idol: PropTypes.shape({
      profilePicture: PropTypes.string.isRequired,
    }).isRequired,
    receivedDonations: PropTypes.number.isRequired,
  }).isRequired,
};

const IdolCardWrap = styled.div`
  width: 100%;
  max-width: 280px;

  @media screen and (max-width: 375px) {
    max-width: 160px;
  }
`;

const IdolCardImage = styled.div`
  position: relative;
  width: 100%;
  max-height: 290px;
  min-height: 290px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 8px;

  @media screen and (max-width: 375px) {
    max-height: 200px;
    min-height: 200px;
  }

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
    /* aspect-ratio: 1 / 1; */
  }

  & > button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    width: 90%;
    max-width: 235px;
    z-index: 2;

    @media screen and (max-width: 744px) {
      bottom: 15px;
    }

    @media screen and (max-width: 375px) {
      height: 30px;
      bottom: 10px;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props ? `url(${props.profilePicture})` : `url(${defaultImage})`};
  background-position-y: -10px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    color: var(--white);

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
