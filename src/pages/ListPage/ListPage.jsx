import { ModalProvider, useModalContext } from '@contexts/useModalContext';
import { CreditProvider } from '@contexts/useCreditContext';
import styled from 'styled-components';
import { ToastProvider, useToastContext } from '@contexts/useToastContext';
// Modals
import ChargeModal from '@components/Modal/ChargeModal';
import PopupModal from '@components/Modal/PopupModal';
import DonationModal from '@components/Modal/DonationModal';
import VoteModal from '@components/Modal/VoteModal';
import Toast from '@components/Modal/Toast';
// Components
import Header from '@components/Header';
import LeftTopGradient from '@assets/svg/Image_top.svg';
import MyCredit from './components/MyCredit';
import TributeSupport from './components/TributeSupport';
import MonthChart from './components/MonthChart';

function ListPageContent() {
  // Context
  const { modals, openModal, closeModal } = useModalContext();
  const { toasts, addToast, closeToast } = useToastContext();

  return (
    <>
      {modals.ChargeModal.isOpen && (
        <ChargeModal
          isOpen={modals.ChargeModal.isOpen}
          onClose={() => closeModal('ChargeModal')}
        />
      )}
      {modals.DonationModal.isOpen && (
        <DonationModal
          isOpen={modals.DonationModal.isOpen}
          onClose={() => closeModal('DonationModal')}
        />
      )}
      {modals.VoteModal.isOpen && (
        <VoteModal
          isOpen={modals.VoteModal.isOpen}
          onClose={() => closeModal('VoteModal')}
        />
      )}
      {modals.PopupModal.isOpen && (
        <PopupModal
          isOpen={modals.PopupModal.isOpen}
          onClose={() => closeModal('PopupModal')}
        />
      )}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          isOpen
          onClose={() => closeToast(toast.id)}
          message={toast.message}
        />
      ))}
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
        <ToastProvider>
          <ListPageContent />
        </ToastProvider>
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
