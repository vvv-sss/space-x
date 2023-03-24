import styled from "styled-components";

// ___Styled Component___________________________________________________________________________________________________
const StyledDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 76px;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: 32px;
    z-index: 1;

    & h1 {
        justify-self: center;
        align-self: end;
    }

    & a {
        justify-self: center;
    }
`;

export default StyledDiv;