import { ModalProvider, useModalContext } from '@contexts/useModalContext';
import { CreditProvider } from '@contexts/useCreditContext';
// Modals
import ChargeModal from '@components/Modal/ChargeModal';
import PopupModal from '@components/Modal/PopupModal';
import DonationModal from '@components/Modal/DonationModal';
import VoteModal from '@components/Modal/VoteModal';
// Components
import Header from '@components/Header';
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
