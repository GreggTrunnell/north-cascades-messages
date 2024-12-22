import {useState} from 'react';

function Message ( message ) {
  const [ showing, setShowing ] = useState( true );

  function addMeToFavorites(){
    console.log("Meow", message.message)
  }

  return (
    <div>
      <p><strong onClick={ ()=>{ setShowing( !showing ) } }>{ message.message.name }</strong>: 
      { showing ? message.message.text : '' } 
      <button onClick={ addMeToFavorites }>+</button>
      </p>
    </div>
  );
}

export default Message
