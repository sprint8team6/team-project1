import React from 'react';
import styled from 'styled-components';
// files
import CheckedTrue from '../assets/svg/Checked_True.svg';
import CheckedFalse from '../assets/svg/Checked_False.svg';

/** 라디오 버튼 컴포넌트
 * @param {boolean} checked - 라디오 버튼이 체크되었는지 확인하는 props
 * @param {function} onClick - 라디오 버튼이 눌렸을 때
 */
export default function RadioButton({ checked = false, onClick }) {
  return checked ? <CheckedTrueRadioButton /> : <CheckedFalseRadioButton />;
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
