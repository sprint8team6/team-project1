import { useState, useCallback } from 'react';

/** Modal을 사용하는 커스텀 Hook
 *
 */
function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

export default useModal;
