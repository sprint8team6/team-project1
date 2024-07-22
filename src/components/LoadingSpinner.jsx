import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

const MaskedBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width === '100%' ? props.width : 'inherit')};
  height: ${(props) => (props.height === '100%' ? props.height : 'inherit')};
  z-index: 9998;
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--light-black);
  width: ${(props) => (props.width === '100%' ? props.width : 'inherit')};
  height: ${(props) => (props.height === '100%' ? props.height : 'inherit')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  z-index: 9999;
`;

// 데이터 로딩 중임을 사용자에게 알려주는 UI

export default function LoadingSpinner({
  size = 20,
  color = 'var(--brand-coral)',
  minLoadTime = 1500,
  width,
  height,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  return isVisible ? (
    <MaskedBackground width={width} height={height}>
      <SpinnerOverlay width={width} height={height}>
        <PulseLoader size={size} color={color} />
      </SpinnerOverlay>
    </MaskedBackground>
  ) : null;
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  minLoadTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};
