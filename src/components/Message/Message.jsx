import {useState} from 'react';
import useStore from '../Store/store';

function Message ( message ) {
  const [ showing, setShowing ] = useState( true );

  const addToFavorites = useStore( (state)=> state.addToFavorites );

  function addMeToFavorites(){
    console.log( 'in addMeToFavorites:', message.message );
    addToFavorites( message.message );
  }

  return (
    <div>
      <strong onClick={ ()=>{ setShowing( !showing ) } }>{ message.message.name }</strong>: 
      { showing ? message.message.text : '' } 
      <button onClick={ addMeToFavorites }>Add To Favs</button>
      
    </div>
  );

}

export default Message