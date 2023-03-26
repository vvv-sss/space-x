import { useRecoilValue } from 'recoil';
import { favoritesListState } from '../recoil/Store';

export const useFavorites = (id: string): boolean => {

    const favoritesList = useRecoilValue(favoritesListState);

    return favoritesList.some((favorite) => favorite.id === id);
};