export interface WrapperProps {
    id?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    padding?: string;
    border?: string;
    margin?: string;
    zIndex?: number;
}

export interface FlexWrapperProps {
    type?: 'header' | 'hero' | 'button' | 'card';
    flex?: string;
    flexDirection?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: string;
}

export interface GridWrapperProps {
    type?: 'home-slider' | 'favorites-slider';
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gap?: string;
    gridAutoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
    gridAutoRows?: string;
    gridAutoColumns?: string;
    gridColumn?: string;
    gridRow?: string;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
}