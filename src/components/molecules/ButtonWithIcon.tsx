// ___React______________________________________________________________________________________________________________
import { useState, useEffect } from "react";
// ___Assets_____________________________________________________________________________________________________________
import AddToFavoriteIcon from '../../assets/icons/favorite_icon.svg';
import DeleteIcon from '../../assets/icons/delete_icon.svg';
import ArrowLeftIcon from '../../assets/icons/arrow_left_icon.svg';
import ArrowRightIcon from '../../assets/icons/arrow_right_icon.svg';
// ___Components_________________________________________________________________________________________________________
import Button from "../atoms/Button/Button";
import Icon from "../atoms/Icon";

// ___Types______________________________________________________________________________________________________________
interface ButtonWithIconProps {
    mode: 'button' | 'link';
    icon: 'add-to-favorite' | 'delete' | 'arrow-left' | 'arrow-right';
    styles?: 'transparent';
    path?: string;
    action?: () => void;
}

// ___Component__________________________________________________________________________________________________________
const ButtonWithIcon = ({ mode, icon, styles, path, action }: ButtonWithIconProps) => {

    const [imgSrc, setImgSrc] = useState<string>('');
    const [imgAlt, setImgAlt] = useState<string>('');

    useEffect(() => {
        switch(icon) {
            case 'add-to-favorite':
                setImgSrc(AddToFavoriteIcon);
                setImgAlt('heart');
                break;
            case 'delete':
                setImgSrc(DeleteIcon);
                setImgAlt('trash bin');
                break;
            case 'arrow-left':
                setImgSrc(ArrowLeftIcon);
                setImgAlt('arrow left');
                break;
            case 'arrow-right':
                setImgSrc(ArrowRightIcon);
                setImgAlt('arrow right');
                break;
        }
    },[])

    return ( 
        <Button 
            mode={ mode }
            to={ path }
            view='icon' 
            styles={ styles }
            handleClick={ action }
        >
            <Icon src={ imgSrc } alt={ `Icon with the ${imgAlt} sign` }/>
        </Button>
    );
}

export default ButtonWithIcon;