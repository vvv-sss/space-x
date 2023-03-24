import styled from "styled-components";

// ___Types______________________________________________________________________________________________________________
interface HeroBannerProps {
    src?: string;
    atl?: string;
    height?: 'auto';
}

// ___Styled Component___________________________________________________________________________________________________
const HeroBanner = styled.img.attrs<HeroBannerProps>((props) => ({
    src: props.src,
    alt: props.alt
}))<HeroBannerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${ props => props.height ?? '100%' };
    object-fit: cover;
    opacity: 0.48;
    z-index: 0;
`;

export default HeroBanner;