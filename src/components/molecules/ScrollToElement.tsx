// ___Styled Components__________________________________________________________________________________________________
import AnchorTag from "../atoms/AnchorTag";

// ___Types______________________________________________________________________________________________________________
interface ScrollToElementProps {
    children: React.ReactNode;
    href?: string;
}

// ___Component__________________________________________________________________________________________________________
const ScrollToElement = ({ children, href = '' }: ScrollToElementProps) => {
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.getElementById(href);

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return ( 
        <AnchorTag onClick={ (e) => handleClick(e) }>
            {  children }
        </AnchorTag>
    );
}

export default ScrollToElement;