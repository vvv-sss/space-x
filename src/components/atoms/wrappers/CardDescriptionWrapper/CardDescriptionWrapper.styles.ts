import styled from "styled-components";

// ___Styled Component___________________________________________________________________________________________________
const StyledDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 28px 20px;

    & p {
        height: 64px;
        overflow-y: hidden;
    }
`;

export default StyledDiv;