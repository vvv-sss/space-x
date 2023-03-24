import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface IconProps {
    src: string;
    atl: string;
}

// ___Styled Component___________________________________________________________________________________________________
const Icon = styled.img.attrs<IconProps>((props) => ({
    src: props.src,
    alt: props.alt
}))`
    width: 20px;
    height: 20px;
`;

export default Icon;