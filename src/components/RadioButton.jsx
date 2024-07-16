import React from 'react';
import styled from 'styled-components';
// assets
import CheckedTrue from '@assets/svg/checked_true.svg';
import CheckedFalse from '@assets/svg/checked_false.svg';

/** 라디오 버튼 컴포넌트
 * @param {string} className - 스타일을 윟란 클래스명
 * @param {boolean} isChecked - 라디오 버튼이 체크되었는지 확인하는 props
 * @param {function} onClick - 라디오 버튼이 눌렸을 때
 */
export default function RadioButton({ className, isChecked = false, onClick }) {
  return isChecked ? (
    <CheckedTrueRadioButton className={className} onClick={onClick} />
  ) : (
    <CheckedFalseRadioButton className={className} onClick={onClick} />
  );
}

const BaseRadioButton = styled.button`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

const CheckedTrueRadioButton = styled(BaseRadioButton)`
  background-image: url(${CheckedTrue});
`;

const CheckedFalseRadioButton = styled(BaseRadioButton)`
  background-image: url(${CheckedFalse});
`;
