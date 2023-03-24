import styled from "styled-components";

// ___Types_____________________________________________________________________________________________________________
interface StyledButtonProps {
    isActive?: boolean | undefined;
}

// ___Styled Component___________________________________________________________________________________________________
const styles = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 1;
    position: relative;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
`;

const activeStyles = `
    &::before {
        content:'';
        display: block;
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: white;
        z-index: 1;
    }
`;

const StyledButton = styled.button<StyledButtonProps>`
    ${styles}
    ${({ isActive }) => isActive && activeStyles }
`;

export default StyledButton;