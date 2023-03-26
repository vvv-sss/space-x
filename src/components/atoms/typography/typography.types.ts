export interface TypographyTypes {
    padding?: string;
    margin?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    truncate?: boolean;
    textLines?: number;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
    backgroundColor?: string;
    textShadow?: string;
    wordSpacing?: string;
    textIndent?: string;
    textOverflow?: 'clip' | 'ellipsis';
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}
