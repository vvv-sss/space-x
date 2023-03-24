import styled from "styled-components";

// ___Styled Component___________________________________________________________________________________________________
const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    gap: 16px;
    width: 100%;
    padding: 16px 0px;
    background: rgba(30, 30, 30, 0.48);
    z-index: 2;

    @media (min-width: 900px) {
        flex-direction: row;
        box-sizing: border-box;
        height: 80px;
        padding: 0 80px;
    }
`;

export default StyledHeader;