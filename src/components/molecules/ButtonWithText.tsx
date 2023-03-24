// ___Components__________________________________________________________________________________________________________
import Button from "../atoms/Button/Button";

// ___Types______________________________________________________________________________________________________________
interface ButtonTextProps {
    mode: 'button' | 'link';
    title: string;
    styles?: 'transparent';
    path?: string;
    action?: () => void;
}

// ___Component__________________________________________________________________________________________________________
const ButtonWithText = ({ mode, title, styles, path, action }: ButtonTextProps) => {
    return ( 
        <Button 
            mode={ mode }
            to={ path } 
            view='text'
            styles={ styles }
            handleClick={ action }
        >
            { title }
        </Button>
    );
}

export default ButtonWithText;