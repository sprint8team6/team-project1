import {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const ToastContext = createContext();

/**
 * Toast를 Context로 설정하는 Provider
 *
 * @param children - 태그 내부 (자식 컴포넌트들)
 */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
  }, []);

  const closeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ toasts, addToast, closeToast }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Toast 컨텍스트를 사용하기 위한 Custom Hook
 *
 * @returns
 * - {Array} toasts - 현재 표시되고 있는 토스트 배열
 * - {Function} addToast - 새 토스트를 띄우는 함수
 * - {Function} closeToast - 토스트를 제거하는 함수
 */
export const useToastContext = () => useContext(ToastContext);
