// ___React______________________________________________________________________________________________________________
import { Link } from "react-router-dom";
// ___Styled Components__________________________________________________________________________________________________
import Image from "../atoms/Image";
// ___Assets_____________________________________________________________________________________________________________
import LogoImg from '../../assets/images/logo.png';

// ___Component__________________________________________________________________________________________________________
const LogoLink = () => {
    return ( 
        <Link to='home'>
            <Image 
                type='logo' 
                src={ LogoImg } 
                alt='Company logo of the Space-X' 
            />
        </Link>
    );
}

export default LogoLink;