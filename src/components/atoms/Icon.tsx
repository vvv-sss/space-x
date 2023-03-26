import styled from "styled-components";

// ___Assets_____________________________________________________________________________________________________________
import AddToFavoritesIcon from '../../assets/icons/favorite_icon.svg';
import RemoveIcon from '../../assets/icons/remove_icon.svg';
import ArrowLeftIcon from '../../assets/icons/arrow_left_icon.svg';
import ArrowRightIcon from '../../assets/icons/arrow_right_icon.svg';

// ___Types______________________________________________________________________________________________________________
interface IconProps {
    type: 'add-to-favorites' | 'remove' | 'arrow-left' | 'arrow-right';
}

const Icon = styled.img.attrs<IconProps>( props => {

    const altText = `Icon with the ${props.type} sign`;

    switch(props.type) {
        case 'add-to-favorites':
            return {
                src: AddToFavoritesIcon,
                alt: altText
            }
        case 'remove':
            return {
                src: RemoveIcon,
                alt: altText
            }
        case 'arrow-left':
            return {
                src: ArrowLeftIcon,
                alt: altText
            }
        case 'arrow-right':
            return {
                src: ArrowRightIcon,
                alt: altText
            }
    }
})<IconProps>`
    width: 20px;
    height: 20px;
`;

export default Icon;