import { ModalProvider, useModalContext } from '@contexts/useModalContext';
import { CreditProvider } from '@contexts/useCreditContext';
import styled from 'styled-components';
// Modals
import ChargeModal from '@components/Modal/ChargeModal';
import PopupModal from '@components/Modal/PopupModal';
import DonationModal from '@components/Modal/DonationModal';
import VoteModal from '@components/Modal/VoteModal';
// Components
import Header from '@components/Header';
import LeftTopGradient from '@assets/svg/Image_top.svg';
import MyCredit from './components/MyCredit';
import TributeSupport from './components/TributeSupport';
import MonthChart from './components/MonthChart';

function ListPageContent() {
  // Context
  const { modals, openModal, closeModal } = useModalContext();

  return (
    <>
      {modals.ChargeModal.isOpen && (
        <ChargeModal
          isOpen={modals.ChargeModal}
          onClose={() => closeModal('ChargeModal')}
        />
      )}
      {modals.DonationModal.isOpen && (
        <DonationModal
          isOpen={modals.DonationModal}
          onClose={() => closeModal('DonationModal')}
        />
      )}
      {modals.VoteModal.isOpen && (
        <VoteModal
          isOpen={modals.VoteModal}
          onClose={() => closeModal('VoteModal')}
        />
      )}
      {modals.PopupModal.isOpen && (
        <PopupModal
          isOpen={modals.PopupModal}
          onClose={() => closeModal('PopupModal')}
        />
      )}
      <Header />
      <LeftTopGradientDesign />
      <MyCredit openModal={openModal} />
      <TributeSupport />
      <MonthChart openModal={openModal} />
    </>
  );
}

export default function ListPage() {
  return (
    <CreditProvider>
      <ModalProvider>
        <ListPageContent />
      </ModalProvider>
    </CreditProvider>
  );
}

export const LeftTopGradientDesign = styled.div`
  display: block;
  position: absolute;
  width: 199px;
  height: 273px;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: url(${LeftTopGradient});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;
