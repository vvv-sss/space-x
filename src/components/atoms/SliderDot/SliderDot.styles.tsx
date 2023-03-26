import styled, { css } from 'styled-components';
import { SliderDotProps } from './SliderDot';

// ___Styled Component___________________________________________________________________________________________________
export const CircleButtonWrapper = styled.div<SliderDotProps>`
    flex-shrink: 0;
    flex-grow: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ color }) => (color === 'black' ? 'black' : 'white')};
    cursor: pointer;
`;

export const InnerCircle = styled.div<SliderDotProps>`
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: ${({ color }) => (color === 'black' ? 'black' : 'white')};
`;