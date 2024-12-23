import {useState} from 'react';
import useStore from '../Store/store';

function Message ( message ) {
  const [ showing, setShowing ] = useState( true );

  //need a var for useStore
  const addToFavorites = useStore(( state )=> state.addToFavorites )

  function addMeToFavorites(){
    console.log("addMeToFavorites button hit", message.message);
     addToFavorites( message.message );
  }

  return (
    <div>
      <p><strong onClick={ ()=>{ setShowing( !showing ) } }>{ message.message.name }</strong>: 
      { showing ? message.message.text : '' } 
      <button className='add-to-favorite-button' onClick={ addMeToFavorites }>✚</button>
      </p>
    </div>
  );
}

export default Message

