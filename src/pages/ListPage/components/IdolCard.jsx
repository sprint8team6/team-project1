import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import styled from 'styled-components';
// component
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
  const [donationValue, setDonationValue] = useState(
    donation?.receivedDonations ?? 0
  );
  const [idolStatus, setIdolStatus] = useState({
    donationProfilePicture: donation?.idol.profilePicture ?? defaultImage,
    donationSubtitle: donation?.subtitle ?? '제목이 없습니다.',
    donationTitle: donation?.title ?? '부제목이 없습니다.',
    donationReceivedDonation: donationValue,
    donationDeadLineDay: donation ? DEADLINE_DAY : '-',
    setDonationValue: (value) => {
      setDonationValue(value);
    },
    donationTarget: donation?.targetDonation ?? null,
  });
  const [donationPercentage, setDonationPercentage] = useState(0);

  // Context
  const { openModal } = useModalContext();

  useEffect(() => {
    setIdolStatus((prevStatus) => ({
      ...prevStatus,
      donationReceivedDonation: donationValue,
    }));
  }, [donationValue]);

  const handleTributeButtonClick = () => {
    openModal('DonationModal', idolStatus);
  };

  // 목표 도네이션까지 달성된 도네이션 퍼센테이지 값 구하기
  useEffect(() => {
    const calculatePercentage = () => {
      const result =
        (idolStatus.donationReceivedDonation / idolStatus.donationTarget) * 100;
      return setDonationPercentage(result);
    };

    calculatePercentage();
  }, [donation]);

  return (
    <IdolCardWrap>
      <IdolCardImage>
        <Image data-profile-picture={idolStatus.donationProfilePicture} />
        <Button onClick={handleTributeButtonClick}>후원하기</Button>
      </IdolCardImage>
      <IdolCardText>
        <span title={idolStatus.donationSubtitle}>
          {idolStatus?.donationSubtitle ?? '임시 서브 타이틀'}
        </span>
        <p title={idolStatus.donationTitle}>
          {idolStatus?.donationTitle ?? '임시 메인 타이틀'}
        </p>
        <div>
          <IdolCardCredit>
            <div>
              <img src={CreditIcon} alt="크레딧 아이콘" />
              <span>
                {idolStatus?.donationReceivedDonation.toLocaleString() ?? '0'}
              </span>
            </div>
            <span>{idolStatus?.donationDeadLineDay ?? '-'}일 남음</span>
          </IdolCardCredit>
          <IdolCardCreditGauge data-donation-percentage={donationPercentage} />
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
    targetDonation: PropTypes.number.isRequired,
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
  background-image: ${({ 'data-profile-picture': profilePicture }) =>
    profilePicture ? `url(${profilePicture})` : `url(${defaultImage})`};
  background-position-y: -10px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const IdolCardText = styled.div`
  & > span,
  & > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

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
    width: ${({ 'data-donation-percentage': donationPercentage }) =>
      donationPercentage ? `${donationPercentage}%` : 0};
    height: 100%;
    content: '';
    background-color: var(--brand-coral);
    transition: all 2s ease-out;
  }
`;
