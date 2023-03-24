import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface StylesDivProps {
    justifyContent?: string;
}

// ___Styled Component___________________________________________________________________________________________________
const StyledDiv = styled.div<StylesDivProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: ${ props => props.justifyContent };
    margin-bottom: 40px;
`;

export default StyledDiv;