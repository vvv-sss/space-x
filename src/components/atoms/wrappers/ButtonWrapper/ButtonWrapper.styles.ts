import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface ButtonWrapperProps {
    gap?: string;
    width?: string;
}

// ___Styled Component___________________________________________________________________________________________________
const StyledDiv = styled.div<ButtonWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${props => props.gap};
    width: ${props => props.width};
`;

export default StyledDiv;