// ___Recoil_____________________________________________________________________________________________________________
import { useRecoilState } from 'recoil';
import { favoritesListState } from '../recoil/Store';

// ___Hook________________________________________________________________________________________________________________
export const useRemoveFromFavorites = (): ((id: string) => void) => {
    
    const [favoritesList, setFavoritesList] = useRecoilState(favoritesListState);

    const removeFromFavorites = (id: string): void => {
        setFavoritesList(favoritesList.filter((fav) => fav.id !== id));
    };

    return removeFromFavorites;
};