import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface StyledSectionProps {
    height?: string;
}

// ___Styled Component___________________________________________________________________________________________________
const StyledSection = styled.section<StyledSectionProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 740px;
    height: ${props => props.height};
    background: #1E1E1E;
    overflow: hidden;
`;

export default StyledSection;