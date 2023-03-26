import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
interface ImageProps {
    type?: 'banner' | 'banner-favorite' | 'logo';
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    margin?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    filter?: string;
    opacity?: number;
}

// ___Styled Component___________________________________________________________________________________________________
const Image = styled(motion.img).attrs<ImageProps>((props) => ({
    src: props.src,
    alt: props.alt
}))<ImageProps>`
    width: ${ props => props.width };
    height: ${ props => props.height };
    margin: ${ props => props.margin };
    object-fit: ${ props => props.objectFit };
    filter: ${ props => props.filter };
    opacity: ${ props => props.opacity };

    ${ props =>
        props.type === 'banner' &&
            css<ImageProps>`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${ props => props.height ?? '100%' };
            object-fit: cover;
            opacity: 0.48;
            z-index: 0;
        `}

    ${ props =>
        props.type === 'banner-favorite' &&
            css<ImageProps>`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${ props => props.height ?? 'auto' };
            object-fit: cover;
            opacity: 0.48;
            z-index: 0;

            @media (max-width: 900px) {
                height: 100%;
            }
        `}

    ${ props =>
        props.type === 'logo' &&
            css<ImageProps>`
            cursor: pointer;
        `}
`;

export default Image;