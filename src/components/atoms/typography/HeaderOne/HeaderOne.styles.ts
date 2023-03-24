import styled from "styled-components";

// ___Styled Component___________________________________________________________________________________________________
const StyledH1 = styled.h1`
    color: #FFFFFF;
    font-family: 'Syne', sans-serif;
    font-size: 48px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 58px;

    & span {
        position: relative;
        top: -50px;
        display: block;
        text-align: center;
        font-size: 310px;
        line-height: 372px;
    }
`;

export default StyledH1;