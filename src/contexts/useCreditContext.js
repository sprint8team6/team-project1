import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const CreditContext = createContext();

/**
 * Credit을 Context로 설정하는 Provider
 *
 * @param children - 태그 내부 (자식 컴포넌트들)
 */
export const CreditProvider = ({ children }) => {
  const [myCredit, setMyCredit] = useState(() => {
    const initialCredit = localStorage.getItem('myCredit');
    return initialCredit ? Number(initialCredit) : 0;
  });

  // 크레딧이 변경 되면 localStorage에 있는 크레딧 수정
  useEffect(() => {
    localStorage.setItem('myCredit', myCredit);
  }, [myCredit]);

  const contextValue = useMemo(() => ({ myCredit, setMyCredit }), [myCredit]);

  return (
    <CreditContext.Provider value={contextValue}>
      {children}
    </CreditContext.Provider>
  );
};

CreditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Credit 컨텍스트를 사용하기 위한 Custom Hook
 *
 * 모달을 열고 닫을 때 사용합니다.
 *
 * @returns
 * - {Object} modals - 모든 모달의 현재 상태 (열렸는지/닫혔는지)
 * - {Function} openModal - 모달 이름으로 모달을 여는 함수
 * - {Function} closeModal - 모달 이름으로 모달을 닫는 함수
 */
export const useCreditContext = () => useContext(CreditContext);
