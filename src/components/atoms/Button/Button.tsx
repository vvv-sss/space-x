// ___Styled Components__________________________________________________________________________________________________
import { StyledButton, StyledLink } from "./Button.styles";

// ___Types______________________________________________________________________________________________________________
interface ButtonProps {
    mode: 'button' | 'link';
    view: 'text' | 'icon';
    styles?: 'transparent';
    children?: React.ReactNode;
    handleClick?(): void;
    to?: string;
}

// ___Component__________________________________________________________________________________________________________
const Button = ({ mode, view, styles, children, handleClick, to = '/' }: ButtonProps) => {
    return ( 
        <>
            { mode === 'button' &&
                <StyledButton 
                    view={ view } 
                    styles={ styles }
                    onClick={ handleClick } 
                >
                    { children }
                </StyledButton>
            }
            { mode === 'link' &&
                <StyledLink 
                    to={ to }
                    view={ view } 
                    styles={ styles }
                    onClick={ handleClick } 
                >
                    { children }
                </StyledLink>
            }
        </>
    );
}

export default Button;