import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useContext } from 'react';

const CreditContext = createContext();

/**
 * Modal을 Context로 설정하는 Provider
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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CreditContext.Provider value={{ myCredit, setMyCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

CreditContext.propTypes = {
  myCredit: PropTypes.number.isRequired,
  setMyCredit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export const useCreditContext = () => useContext(CreditContext);
