import { ModalProvider, useModalContext } from '@contexts/ModalContext';
import Header from '@components/Header';
import MyCredit from './MyCredit';
import TributeSupport from './TributeSupport';
// Modals
import ChargeModal from '@components/Modal/ChargeModal';
import PopupModal from '@components/Modal/PopupModal';
import DonationModal from '@components/Modal/DonationModal';
import VoteModal from '@components/Modal/VoteModal';

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
      <MyCredit />
      <TributeSupport />
    </>
  );
}

export default function ListPage() {
  return (
    <ModalProvider>
      <ListPageContent />
    </ModalProvider>
  );
}
