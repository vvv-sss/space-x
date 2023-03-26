import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// ___Types______________________________________________________________________________________________________________
interface ButtonProps {
    view?: 'text' | 'icon';
    children?: React.ReactNode;
    isActive?: boolean;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// ___Styled Component___________________________________________________________________________________________________
const StyledButton = styled(motion.button)<ButtonProps>`
    box-sizing: border-box;
    flex: 0 0 1;
    border: none;
    outline: none;
    background-color: transparent;
    color: hsla(212, 22%, 43%, 1);
    font-size: 24px;
    font-weight: 300;
    transition: all 0.2s;
    cursor: pointer;

    ${props => 
        props.view === 'text' &&
            css`
            flex-grow: 1;
            flex-shrink: 1;
            padding: 12px;
            background-color: hsl(208, 100%, 91%);
            color: hsla(0, 0%, 0%, 1);
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            text-transform: uppercase;

            &:hover {
                background-color: hsl(208, 100%, 85%);
            }
        `}

    ${props =>
        props.view === 'icon' &&
            css`
            display: grid;
            place-content: center;
            width: 53px;
            height: 53px;
            background-color: hsl(0, 0%, 92%);

            & img {
                pointer-events: none;
            }

            &:hover {
                background-color: hsla(335, 71%, 84%, 1);
            }

            &.active {
                background-color: hsla(335, 71%, 54%, 1);
            }

            &.active > img {
                filter: 
                    brightness(0) 
                    saturate(100%) 
                    invert(100%) 
                    sepia(100%) 
                    saturate(1%) 
                    hue-rotate(308deg) 
                    brightness(102%) 
                    contrast(101%);
            }
        `}
`;

// ___Component__________________________________________________________________________________________________________
const Button = ({ children, view, isActive, handleClick }: ButtonProps) => {
    return ( 
        <StyledButton 
            view={ view }
            className={ isActive? 'active' : '' }
            onClick={ handleClick }
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        >
            { children }
        </StyledButton>
    );
}

export default Button;