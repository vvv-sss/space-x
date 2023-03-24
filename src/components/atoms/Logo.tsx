// ___Styled_____________________________________________________________________________________________________________
import styled from "styled-components";
// ___Assets_____________________________________________________________________________________________________________
import LogoImg from '../../assets/images/logo.png';

// ___Styled Component__________________________________________________________________________________________________
const Logo = styled.img.attrs({
    src: LogoImg,
    atr: 'Company logo of the Space-X'
})`
    cursor: pointer;
`

export default Logo;