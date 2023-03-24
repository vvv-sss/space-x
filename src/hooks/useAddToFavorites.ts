// ___Recoil_____________________________________________________________________________________________________________
import { useRecoilState } from 'recoil';
import { favoritesListState } from '../recoil/Store';

// ___Hook_______________________________________________________________________________________________________________
export const useAddToFavorites = (): ((id: string, title: string, details: string) => void) => {

        const [favoritesList, setFavoritesList] = useRecoilState(favoritesListState);
    
        const addToFavorites = (id: string, title: string, details: string): void => {
            
            const existingFavorite = favoritesList.find((fav) => fav.id === id);

            if (!existingFavorite) {
                const newFavorite = { id, title, details };
                setFavoritesList([...favoritesList, newFavorite]);
            }
        };
    
        return addToFavorites;
};