// ___Styled Components___________________________________________________________________________________________________
import StyledP from "./Paragraph.styles";

// ___Types_______________________________________________________________________________________________________________
interface ParagraphProps {
    children: React.ReactNode;
}

// ___Component___________________________________________________________________________________________________________
const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <StyledP>
            { children }
        </StyledP>
    )
}

export default Paragraph;