import { ModalProvider, useModalContext } from 'contexts/ModalContext';
import Header from '@components/Header';
import MyCredit from './MyCredit';
import TributeSupport from './TributeSupport';
// Modals
import ChargeModal from '@components/Modal/ChargeModal';
import PopupModal from '@components/Modal/PopupModal';
import DonationModal from '@components/Modal/DonationModal';

function ListPageContent() {
  const { modals, openModals, closeModal } = useModalContext();

  return (
    <>
      <PopupModal
        isOpen={modals.popupModal}
        onClose={() => closeModal('popupModal')}
      />
      <ChargeModal
        isOpen={modals.chargeModal}
        onClose={() => closeModal('chargeModal')}
      />
      {/* <DonationModal 
          isOpen={modals.chargeModal}
          onClose={() => closeModal('chargeModal')/> */}
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
