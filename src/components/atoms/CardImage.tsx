import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface CardImageProps {
    src: string;
    atl: string;
}

// ___Styled Component___________________________________________________________________________________________________
const CardImage = styled.img.attrs<CardImageProps>((props) => ({
    src: props.src,
    alt: props.alt
}))`
    width: 100%;
    height: 296px;
    object-fit: cover;
`;

export default CardImage;