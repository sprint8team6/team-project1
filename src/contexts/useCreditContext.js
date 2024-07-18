import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useContext } from 'react';

const CreditContext = createContext();

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

CreditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCreditContext = () => useContext(CreditContext);
