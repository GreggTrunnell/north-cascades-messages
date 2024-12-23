import { create } from 'zustand';

 const useStore = create(( set )=>(
    {
      favorites: [ "Why won't you populate??"],
      addToFavorites: ( newFavorite )=>{
        //Needed to favorite's' not favorite. Needed to restart server to work properly.
        set(( state )=> ({ favorites:  [ ...state.favorites, newFavorite] } ) )
      }
    }
))

 export default useStore;

 