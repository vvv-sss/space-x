// ___Recoil_____________________________________________________________________________________________________________
import { useSetRecoilState } from 'recoil';
import { favoritesListState } from '../recoil/Store';

// ___Hook_______________________________________________________________________________________________________________
export const useClearFavorites = () => {
    
    const setFavoritesList = useSetRecoilState(favoritesListState);

    const clearFavorites = () => {
        setFavoritesList([]);
    };

    return clearFavorites;
};