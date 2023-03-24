// ___Recoil_____________________________________________________________________________________________________________
import { atom } from 'recoil';

// ___Types______________________________________________________________________________________________________________
export interface FavoriteTour {
    id: string;
    title: string;
    details: string;
}

// ___States_____________________________________________________________________________________________________________
export const favoritesListState = atom<FavoriteTour[]>({
    key: 'favoritesListState',
    default: [],
});